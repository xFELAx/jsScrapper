const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto('https://www.otomoto.pl/osobowe/nowe?search%5Border%5D=created_at_first%3Adesc');

    const cars = await page.$$eval('div.ooa-1cq16zj.evg565y15 > h2.evg565y6.evg565y20.ooa-10p8u4x.er34gjf0 > a', links =>
        links.map(link => ({
            name: link.textContent.trim(),
            url: link.href
        }))
    );

    const prices = await page.$$eval('span.ooa-1bmnxg7.evg565y11', prices =>
        prices.map(price => parseFloat(price.textContent.replace(/\s/g, '')))
    );

    const volumes = await page.$$eval('div.ooa-1cq16zj.evg565y15 > div > ul > li:nth-child(3).ooa-1k7nwcr.e19ivbs0', volumes =>
        volumes.map(volume => parseInt(volume.textContent.replace(/\s/g, '')))
    );

    const results = cars.map((car, index) => ({
        name: car.name,
        price: prices[index],
        volume: volumes[index],
        cost: prices[index] / volumes[index] / 1000
    })).filter(result => result.volume !== undefined && result.volume !== null);

    const sortedResults = results.sort((a, b) => a.cost - b.cost);

    console.log(sortedResults);

    await browser.close();
})();
