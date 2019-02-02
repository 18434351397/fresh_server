const express=require("express");
const router=express.Router();
const UserModel=require("../model/user");

router.get("/",(req,res)=>{
    let page=req.query.page-1;
    let pageSize=Number(req.query.pageSize);
    let obj={};
    if (req.query.name){
        obj.name={$regex:new RegExp(req.query.name)};
    }
    if (req.query.pid){
        obj.pid=req.query.pid;
    }
    if (req.query.cid){
        obj.cid=req.query.cid;
    }
    // GoodsModel.find().countDocuments().then(num=>{
    //     GoodsModel.find().skip(page*pageSize).limit(5).then(docs=>{
    //         if (docs) {
    //             res.send({
    //                 status:"ok",
    //                 data:docs,
    //                 total:num
    //             })
    //         }
    //     })
    // })
    let r1=UserModel.find(obj).countDocuments();
    let r2=UserModel.find(obj).skip(page*pageSize).limit(pageSize);
    Promise.all([r1,r2]).then(docs=>{
        res.send({
            status:"ok",
            data:docs[1],
            total:docs[0]
        })
    })


});
router.post("/",(req,res)=>{
    // console.log(req.body);
    console.log(req.body.cid);
    let goods=new UserModel(req.body);
    goods.save((err,docs)=>{
        if (docs){
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
    UserModel.deleteOne({_id:id}).then((docs)=>{
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
router.delete("/",(req,res)=>{
    let ids=JSON.parse(req.query.id);
    UserModel.deleteMany({_id:{$in:ids}}).then(docs=>{
        if (docs.n===ids.length){
            res.send({
                status:"ok"
            });
        } else{
            res.send({
                status:"error"
            });
        }
    }).catch((err)=>{
        throw err;
    })
});
router.put("/",(req,res)=>{
    let body=req.body;
    UserModel.updateOne({_id:body._id},body).then(docs=>{

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