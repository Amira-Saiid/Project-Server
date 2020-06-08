
const puppeteer= require ('puppeteer');
let goldprice=(async (_Curr,_Wgt) =>{
const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();
const linkUrl='https://goldprice.org/';
page.setDefaultNavigationTimeout(0);
await page.goto(linkUrl,{waitUntil:'networkidle2'});// ,makesure everything is loaded
    
    
try{
 var Curr=await page.select('select#gpxtickerLeft_curr',_Curr);
 await Curr.select(_Curr);
}catch(err){}

try{
 var Wgt=await page.select('select#gpxtickerLeft_wgt-au',_Wgt);
 await Wgt.select(_Wgt);
}
catch(err){};


try{
await page.goto(linkUrl,{waitUntil:'networkidle2'});
await page.waitForSelector("#gpxtickerLeft_price");
 var SelectedPrice= await page.$eval("#gpxtickerLeft_price",span=> span.textContent);
 
 console.log(SelectedPrice +' '+ Curr + ' in ' + Wgt);
 console.log(parseFloat(SelectedPrice.replace(/,/g,'')));
}
catch(err){console.error("error")
};
await browser.close();
return {
    Wgt: unit,
    Curr:currency,
    SelectedPrice:price,
};
});


let silverprice=(async (_Curr,_Wgt) =>{
const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();
const linkUrl='https://silverprice.org/';
page.setDefaultNavigationTimeout(0);
await page.goto(linkUrl,{waitUntil:'networkidle2'});// ,makesure everything is loaded
    // let curr;
    // let SelectedPrice;
    // let wgt;
try{
   var  Curr=await page.select('select#gpxtickerLeft_curr', 'AWG');
}catch(err){}

try{
   var  Wgt=await page.select('select#gpxtickerLeft_wgt-au', 'kg');}
    catch(err){};
    
//var metal=await page.select('select#gpxtickerLeft_met', 'Silver');

try{
await page.goto(linkUrl,{waitUntil:'networkidle2'});
await page.waitForSelector("#gpxtickerLeft_price");
var SelectedPrice= await page.$eval("#gpxtickerLeft_price",span=> span.textContent);

 console.log(SelectedPrice +' '+ Curr + ' in ' + Wgt);}
 catch(err){console.error("not found")
 };
 
 
return {
    Wgt: unit,
    Curr:currency,
    SelectedPrice:price,
  };
});
module.exports={
    goldprice,
    silverprice,
}


