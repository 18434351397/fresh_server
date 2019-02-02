const mongoose=require("./control");
const bannerSchema=mongoose.Schema({
    src:String,
    sort:Number
});
const bannerModel=mongoose.model("banner",bannerSchema);

// let banner=new bannerModel({src:"333",sort:3});
// banner.save((err,docs)=>{
//     console.log(docs);
// });
module.exports=bannerModel;