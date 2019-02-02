const express=require("express");
const router=express.Router();
const CategoryModel=require("../model/category");





router.get("/",(req,res)=>{
    CategoryModel.find().sort({sort:1}).then(docs=>{
        if (docs) {
            res.send({
                status:"ok",
                data:docs
            })
        }
    })
});
router.post("/",(req,res)=>{
    let banner=new CategoryModel(req.body);
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
router.delete("/:id",(req,res)=>{
    let id=req.params.id;
    CategoryModel.remove({_id:id}).then((docs)=>{
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
router.put("/",(req,res)=>{
    let body=req.body;
    CategoryModel.updateOne({_id:body._id},body).then(docs=>{

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