var express = require('express');
var router = express.Router();
var Items = require('../models/items');
var tax_codes = require('../tax_codes');
var tax_calc = require('../libs/tax_calc');

router.get('/', function(req, res, next) {
  res.json({version:'1'});
});

router.get('/getbill',function (req,res,next){
  var data = [];
  Items.getAll(function(err,response){
    if(err){
      res.json({status:0,response:response})
      return;
    }
    var total_price = 0;
    var total_tax = 0;
    var grand_total = 0;
    for (const key in response) {
      if (response.hasOwnProperty(key)) {
        const element = response[key];
        var tax_data = tax_calc(element.ITEM_TAX_CODE,element.ITEM_PRICE);
        data[key] = {
          name : element.ITEM_NAME
          ,tax_code : element.ITEM_TAX_CODE
          ,type : tax_codes[element.ITEM_TAX_CODE].name
          ,refundable : tax_codes[element.ITEM_TAX_CODE].refundability
          ,price : element.ITEM_PRICE
          ,tax : tax_data.tax
          ,amount : tax_data.amount
        };
        total_price += element.ITEM_PRICE;
        total_tax += tax_data.tax;
        grand_total += tax_data.amount;
      }
    }
    var total = {
      total_price : total_price,
      total_tax : total_tax,
      grand_total : grand_total,
    }
    
    res.json({status:1,response:{list:data,total:total}})

  })
  return;
})

router.post('/settaxobject',function(req,res,next){
  
  var data = {
    ITEM_NAME : req.body.name,
    ITEM_TAX_CODE : req.body.tax_code,
    ITEM_PRICE: req.body.price
  }

  Items.add(data,function(err,count){
    if(err){
      res.json({status:0,response:err});
    }else{
      res.json({status:1,response:count});
    }
  })
  return;
})

module.exports = router;
