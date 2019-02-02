const express=require("express");
const router=express.Router();
const BannerModel=require("../model/banner");

router.get("/",(req,res)=>{
    BannerModel.find((err,docs)=>{
        res.send({
            status:"ok",
            data:docs
        })
    }).sort({sort:1})
});
router.delete("/:id",(req,res)=>{
    let id=req.params.id;
    BannerModel.remove({_id:id}).then((docs)=>{
        if (docs.n===1){
            res.send({status:"ok"});
        } else{
            res.send({status:"error"});
        }
    }).catch((err)=>{
        res.send(err);
        throw err;
    })
});
router.post("/",(req,res)=>{
    let banner=new BannerModel(req.body);
    banner.save((err,docs)=>{
        if (docs._id){
            res.send({status:"ok"});
        } else{
            res.send({status:"error"});
        }
        if (err){
            throw err;
        }
    });
});
router.put("/",(req,res)=>{
    let body=req.body;
   BannerModel.updateOne({_id:body._id},body).then(docs=>{

       if (docs.nModified===1) {
           res.send({
               status:"ok"
           })
       }else{
           res.send({
               status:"error"
           })
       }
   }).catch(err=>{
       throw err;
   })
});
module.exports=router;