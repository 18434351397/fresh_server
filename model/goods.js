// src   name   price   special-price    description  cid  bid   sort
//create_time  :{type:Date,default:Date.now}
const mongoose=require("./control");
const goodsSchema=mongoose.Schema({
    src:String,
    name:String,
    price:Number,
    special_price:Number,
    description:String,
    cid:String,
    bid:Number,
    pid:String,
    sort:Number,
    create_time:{type:Date,default:Date.now}
});
const goodsModel=mongoose.model("goods",goodsSchema);

// let goods=new goodsModel({
//     src:"11",
//     sort:1,
//     name:"苹果",
//     price:10,
//     special_price:9.9,
//     description:"这个苹果真好吃",
//     bid:8
// });
// goods.save((err,docs)=>{
//     console.log(docs);
// });
module.exports=goodsModel;