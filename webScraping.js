const puppeteer = require('puppeteer');

(async () => {
  // 브라우저 실행
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 웹사이트로 이동
  await page.goto('https://example.com', { waitUntil: 'networkidle2' });

  // 데이터 추출
  const data = await page.evaluate(() => {
    const title = document.querySelector('h1').innerText;
    const description = document.querySelector('p').innerText;
    return { title, description };
  });

  console.log(data);

  // 브라우저 종료
  await browser.close();
})();
