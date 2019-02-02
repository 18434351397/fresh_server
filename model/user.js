const mongoose=require("./control");
const userSchema=mongoose.Schema({
    name:String,
    phone:String,
    password:String,
    header_img:String,
    create_time:{type:Date,default:Date.now}
});
const userModel=mongoose.model("user",userSchema);

// let user=new userModel({
//     name:"张三",
//     phone:"1556895885",
//     password:"123456",
//     header_img:"",
// });
// user.save((err,docs)=>{
//     console.log(docs);
// });
module.exports=userModel;