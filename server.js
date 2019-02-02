const express = require("express");
const path = require("path");
const app = express();


const banner = require("./router/banner");
const category = require("./router/category");
const goods = require("./router/goods");
const user = require("./router/user");


app.use(express.static("./static"));
app.use("/upload",express.static("./upload"));
app.use(express.json());


app.use("/api/banner", banner);
app.use("/api/category",category);
app.use("/api/goods",goods);
app.use("/api/user",user);
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/index.html"));
});

const multer=require("multer");
const mime=require("mime");
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve("./upload"));
    },
    filename: function (req, file, cb) {
        let extname=mime.extension(file.mimetype);
        cb(null, Date.now()+"."+extname);
    }
});

let upload = multer({ storage: storage });

app.post("/api/upload",upload.single("file"),(req,res,next)=>{
    let url=req.file.filename;
    if (url){
        res.send({
            status:"ok",
            path:url
        })
    } else{
        res.send({
            status:"error"
        });
    }
});
app.listen(8000, () => {
    console.log("开启成功");
});