const puppeteer = require('puppeteer');
var list = require('./lista1/lista.js');
var ret = list.getList();

async function boot(list) {
    const browser = await puppeteer.launch({
        headless: false
    });

    

    var page = await browser.newPage();
    await page.goto(`https://www.instagram.com`);

    async function click(page, usuario) {
        console.log(usuario);
        await page.goto(`https://www.instagram.com/${usuario}/`)
        await page.waitForSelector('#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.vBF20._1OSdk > button');
        await page.click('#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.vBF20._1OSdk > button');
        await page.waitForSelector('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.-Cab_');
        await page.click('body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.-Cab_');
        // await browser.close();
    };

    setTimeout(() => {
        list.forEach((item, index) => {
            setTimeout(() => {
                click(page, item);
            }, index * 15000);
        })

    }, 30000);

    
};
boot(ret);

// .button._5f5mN.-fzfL._6VtSN.yZn4P