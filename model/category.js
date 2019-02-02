const mongoose=require("./control");
const categorySchema=mongoose.Schema({
    src:String,
    sort:Number,
    label:String,
    children:[
        {
            src:String,
            sort:Number,
            label:String
        }
    ]
});
const categoryModel=mongoose.model("category",categorySchema);

// let banner=new categoryModel({
//     src:"11",
//     sort:1,
//     label:"水果",
//     children:[
//         {
//             src:"11",
//             sort:2,
//             label:"水蜜桃"
//         }
//     ]
// });
// banner.save((err,docs)=>{
//     console.log(docs);
// });
module.exports=categoryModel;