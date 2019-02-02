const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/shop");
mongoose.connection.on("connected",()=>{
    console.log("连接成功");
});

module.exports=mongoose;