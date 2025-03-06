async function generateBrowser(){ 
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no--sandbox', '--disable-setuid-sandbox'],
        defaultViewport: null
    })
    return browser;
}

async function generatePage(browser){
    const browser = await browser.newPage();

}