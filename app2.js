const puppeteer = require( 'puppeteer' );

async function click(list){
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto( 'https://devexpress.github.io/testcafe/example/' );
    await page.waitForSelector('#populate');
    await page.click('#populate')

    // await browser.close();
};

boot()