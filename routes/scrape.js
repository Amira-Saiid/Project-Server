const express = require("express");
const psl = require("psl");
const {
  ae,
  lacoste,
  pullandbear,
  zara,
  hm,
  bershka,
} = require("../websites/clothing");
const {
  btech,
  elarabygroup,
  fresh,
  ikea,
  inandoutfurniture,
} = require("../websites/homeapp");
const { amazon, olx, souq, jumia } = require("../websites/ecommerce");
const {
  anastasiabeverlyhills,
  hudabeauty,
  mazayastores,
  sephora,
} = require("../websites/beauty");
const { adidas, nike, puma, reebok } = require("../websites/sports");
const {
  azzamwatches,
  gcwatches,
  iwatchstores,
} = require("../websites/jewlery");
const {
  goldprice,
  silverprice,
} = require("../websites/PreciousMetals");
const router = express.Router();
router.post("/", async (req, res) => {
  const info = req.body;
  const link = new URL(info.link);
  const name = psl.parse(link.hostname);
  eval(`${name.sld}('${link}').then((results)=>{giveresults(results)})`);
  function giveresults(results) {

    res.send(results);
    res.end();  
  }
});

router.post('/metals'),async(req,res)=>{
  const {Curr,Wgt}=req.query;
  goldprice(Curr,Wgt).then((values)=>(res.status(200).send(values)));
};

router.post('/metals'),async(req,res)=>{
  const {Curr,Wgt}=req.query;
  silverprice(Curr,Wgt).then((values)=>(res.status(200).send(values)));
};

  

module.exports = router;
