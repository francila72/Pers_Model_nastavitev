const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true
});

const htmlTemplate = (title, content) => `<!DOCTYPE html>
<html lang="sl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 100%;
      padding: 20px;
      background: white;
    }
    h1 { font-size: 1.8em; margin: 1em 0 0.5em 0; color: #1a1a1a; page-break-after: avoid; }
    h2 { font-size: 1.4em; margin: 1.2em 0 0.4em 0; color: #333; page-break-after: avoid; }
    h3 { font-size: 1.1em; margin: 1em 0 0.3em 0; color: #555; page-break-after: avoid; }
    h4 { font-size: 1em; margin: 0.8em 0 0.2em 0; color: #666; }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1em 0;
      page-break-inside: avoid;
      font-size: 0.9em;
    }
    th {
      background: #f0f0f0;
      border: 1px solid #999;
      padding: 8px;
      text-align: left;
      font-weight: bold;
    }
    td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    tr:nth-child(even) { background: #f9f9f9; }
    code { 
      background: #f5f5f5;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
    }
    pre {
      background: #f5f5f5;
      padding: 12px;
      border-radius: 4px;
      overflow-x: auto;
      page-break-inside: avoid;
    }
    pre code { background: none; padding: 0; }
    blockquote {
      border-left: 4px solid #ccc;
      padding-left: 12px;
      margin-left: 0;
      color: #666;
    }
    a { color: #0066cc; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .page-break { page-break-after: always; }
  </style>
</head>
<body>
  ${content}
</body>
</html>`;

(async () => {
  console.log('🔄 Generiram nove revizije dokumentov...\n');
  
  // 1. Preberi in pretvori KOS-01.md v HTML
  console.log('📝 Preberam 03-kosovnica.md...');
  const kosMarkdown = fs.readFileSync(path.resolve(__dirname, 'docs/03-kosovnica.md'), 'utf-8');
  const kosHtml = htmlTemplate('Kosovnica KOS-01 – revizija 5', md.render(kosMarkdown));
  const kosHtmlPath = path.resolve(__dirname, 'docs/03-kosovnica-rev5.html');
  fs.writeFileSync(kosHtmlPath, kosHtml);
  console.log('✅ 03-kosovnica-rev5.html ustvarjen');

  // 2. Preberi obstoječi P&ID HTML
  console.log('📝 Preberam 01-pid-ogrevanje-hlajenje.html...');
  const pidHtmlPath = path.resolve(__dirname, 'docs/01-pid-ogrevanje-hlajenje.html');
  
  // 3. Odpri Puppeteer
  console.log('🚀 Zagenam Puppeteer...\n');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    timeout: 30000
  });

  try {
    // Generiraj KOS-01 rev. 5 PDF
    console.log('📄 Generiram KOS-01 rev. 5 PDF...');
    const kosPage = await browser.newPage();
    await kosPage.setViewport({ width: 1280, height: 800 });
    await kosPage.goto(`file://${kosHtmlPath}`, { waitUntil: 'load', timeout: 30000 });
    await kosPage.pdf({
      path: path.resolve(__dirname, 'docs/03-kosovnica-rev5.pdf'),
      format: 'A4',
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
      printBackground: true,
      timeout: 30000
    });
    console.log('✅ 03-kosovnica-rev5.pdf narejen');
    await kosPage.close();

    // Generiraj P&ID rev. 24 PDF
    console.log('📄 Generiram P&ID rev. 24 PDF...');
    const pidPage = await browser.newPage();
    await pidPage.setViewport({ width: 1600, height: 1200 });
    await pidPage.goto(`file://${pidHtmlPath}`, { waitUntil: 'load', timeout: 30000 });
    await pidPage.pdf({
      path: path.resolve(__dirname, 'docs/01-pid-ogrevanje-hlajenje-rev24.pdf'),
      format: 'A4',
      landscape: true,
      margin: { top: '5mm', right: '5mm', bottom: '5mm', left: '5mm' },
      printBackground: true,
      timeout: 30000
    });
    console.log('✅ 01-pid-ogrevanje-hlajenje-rev24.pdf narejen');
    await pidPage.close();

    console.log('\n✅✅✅ Vsi dokumenti so generirani!\n');
    console.log('Nove datoteke:');
    console.log('  - docs/03-kosovnica-rev5.html');
    console.log('  - docs/03-kosovnica-rev5.pdf');
    console.log('  - docs/01-pid-ogrevanje-hlajenje-rev24.pdf');

  } catch (error) {
    console.error('❌ Napaka:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
