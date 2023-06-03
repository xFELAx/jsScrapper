const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto('https://allegro.pl/kategoria/samochody-osobowe-4029?stan=nowe&pojemnosc-silnika-od=500&rodzaj-paliwa=Benzyna&rodzaj-paliwa=Diesel&rodzaj-paliwa=Benzyna%20%2B%20LPG&rodzaj-paliwa=Hybryda');
    // #search-results > div:nth-child(6) > div > div > div > div > div > section:nth-child(1) > article:nth-child(2) > div.mqen_m6.mjyo_6x.mgmw_3z.mpof_ki.mwdn_0.mp7g_oh.mj7a_16.mg9e_16.mh36_8.m7er_k4.m0ux_vh.mp5q_jr.m31c_kb._1e32a_dJKwY > div.mpof_ki.mr3m_1.myre_zn.myre_8v_l._1e32a_7rKXl > div.mjyo_6x.mpof_ki.myre_zn.mj7a_8.mj7a_0_l.mvrt_8_l.m7er_k4._1e32a_KhViA > div > h2 > a
    // #search-results > div:nth-child(6) > div > div > div > div > div > section:nth-child(1) > article:nth-child(3) > div.mqen_m6.mjyo_6x.mgmw_3z.mpof_ki.mwdn_0.mp7g_oh.mj7a_16.mg9e_16.mh36_8.m7er_k4.m0ux_vh.mp5q_jr.m31c_kb._1e32a_dJKwY > div.mpof_ki.mr3m_1.myre_zn.myre_8v_l._1e32a_7rKXl > div.mjyo_6x.mpof_ki.myre_zn.mj7a_8.mj7a_0_l.mvrt_8_l.m7er_k4._1e32a_KhViA > div > h2 > a
    const cars = await page.$$eval('div.mqen_m6.mjyo_6x.mgmw_3z.mpof_ki.mwdn_0.mp7g_oh.mj7a_16.mg9e_16.mh36_8.m7er_k4.m0ux_vh.mp5q_jr.m31c_kb._1e32a_dJKwY > div.mpof_ki.mr3m_1.myre_zn.myre_8v_l._1e32a_7rKXl > div.mjyo_6x.mpof_ki.myre_zn.mj7a_8.mj7a_0_l.mvrt_8_l.m7er_k4._1e32a_KhViA > div > h2 > a', links =>
        links.map(link => ({
            name: link.textContent.trim(),
            url: link.href
        }))
    );
    console.log(cars.length);
    // #search-results > div:nth-child(6) > div > div > div > div > div > section:nth-child(1) > article:nth-child(3) > div.mqen_m6.mjyo_6x.mgmw_3z.mpof_ki.mwdn_0.mp7g_oh.mj7a_16.mg9e_16.mh36_8.m7er_k4.m0ux_vh.mp5q_jr.m31c_kb._1e32a_dJKwY > div.mpof_ki.mr3m_1.myre_zn.myre_8v_l._1e32a_7rKXl > div.m911_co.mpof_ki.myre_zn.m7f5_5x.mg9e_8.mg9e_0_l.mh36_16_l.mx7m_1.mlkp_ag.m7er_k4._1e32a_-xfCD > div > div._1e32a_-pqeC.mzaq_56 > div:nth-child(2) > div > div > span > span
    // #search-results > div:nth-child(6) > div > div > div > div > div > section:nth-child(1) > article:nth-child(2) > div.mqen_m6.mjyo_6x.mgmw_3z.mpof_ki.mwdn_0.mp7g_oh.mj7a_16.mg9e_16.mh36_8.m7er_k4.m0ux_vh.mp5q_jr.m31c_kb._1e32a_dJKwY > div.mpof_ki.mr3m_1.myre_zn.myre_8v_l._1e32a_7rKXl > div.m911_co.mpof_ki.myre_zn.m7f5_5x.mg9e_8.mg9e_0_l.mh36_16_l.mx7m_1.mlkp_ag.m7er_k4._1e32a_-xfCD > div > div._1e32a_-pqeC.mzaq_56 > div:nth-child(2) > div > div > span > span
    const prices = await page.$$eval('div.mqen_m6.mjyo_6x.mgmw_3z.mpof_ki.mwdn_0.mp7g_oh.mj7a_16.mg9e_16.mh36_8.m7er_k4.m0ux_vh.mp5q_jr.m31c_kb._1e32a_dJKwY > div.mpof_ki.mr3m_1.myre_zn.myre_8v_l._1e32a_7rKXl > div.m911_co.mpof_ki.myre_zn.m7f5_5x.mg9e_8.mg9e_0_l.mh36_16_l.mx7m_1.mlkp_ag.m7er_k4._1e32a_-xfCD > div > div._1e32a_-pqeC.mzaq_56 > div:nth-child(2) > div > div > span > span', prices =>
        prices.map(price => parseFloat(price.textContent.replace(/\s/g, '')))
    );
    console.log(prices.length);
    
    const volumes = await page.$$eval('div.mqen_m6.mjyo_6x.mgmw_3z.mpof_ki.mwdn_0.mp7g_oh.mj7a_16.mg9e_16.mh36_8.m7er_k4.m0ux_vh.mp5q_jr.m31c_kb._1e32a_dJKwY > div.mpof_ki.mr3m_1.myre_zn.myre_8v_l._1e32a_7rKXl > div.mjyo_6x.mpof_ki.myre_zn.mj7a_8.mj7a_0_l.mvrt_8_l.m7er_k4._1e32a_KhViA > div > div > div > div > span:nth-child(6)', volumes =>
        volumes.map(volume => parseInt(volume.textContent.replace(/\s/g, '')))
    );
    console.log(volumes.length);

    const results = cars.map((car, index) => ({
        name: car.name,
        price: prices[index],
        volume: volumes[index],
        cost: prices[index] / volumes[index] / 1000
    }))/*.filter(result => result.volume !== undefined && result.volume !== null)*/;

    //const sortedResults = results.sort((a, b) => a.cost - b.cost);

    console.log();

    await browser.close();
})();
