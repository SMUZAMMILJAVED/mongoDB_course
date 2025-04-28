const express =require('express');
const Product = require('../models/product');
const router = express.Router();

router.post('/',async(req,res)=>{
  const product=new Product({
    name:req.body.name,
    price:req.body.price
  });
  await product.save();
  res.send("product added!");
    })
module.exports= router;