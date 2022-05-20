const puppeteer = require("puppeteer");


function Rechercher(){
  if(document.getElementById('NbPages').value != null){
    nombre_pages=document.getElementById('NbPages').value;
  }
  if(document.getElementById('Recherche').value != null){
    recherche=document.getElementById('Recherche').value;
  }
}

const f = async () => {
  const browser = await puppeteer.launch({ headless: false }); // par default --> true
  const page = await browser.newPage();
  await page.goto("https://google.com");
  //   await page.screenshot({ path: "./screenshot/example.png" });  fait un screenshot

  await browser.close();
};

f();
