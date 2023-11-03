const express =require('express');
const mongoose =require('mongoose');
 const videorouter=require('./videorouter');
const app =express();
app.use(express.json());
const DBURL="mongodb://localhost:27017/youtubeclone"
mongoose.connect(DBURL)
.then(() => {console.log("Database connected",DBURL)})
.catch((error)=> {console.log("connot connect DB",error)})
app.get('/',function(req, res){
    return res.send("Hello server")
})
app.use(videorouter)
app.listen(5500,function(){
    console.log("app server running on 5500")
})