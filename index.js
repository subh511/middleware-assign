const express = require("express");
const app = express();


function isOldEnoughMiddleware(req,res,next){
    let age = req.query.age;
    if(age >= 14){
        next();
    }else{
        res.json({
            msg:"sorry you are below the age"
        })
    }
}
 
app.get("/ride1",isOldEnoughMiddleware,function(req,res){
    //let entryAge = req.query.age;
        res.json({
            msg:"you have successfully ridden ride1"
        })
})

app.get("/ride2",isOldEnoughMiddleware,function(req,res){
    //let entryAge = req.query.age;
        res.json({
            msg:"you have successfully ridden ride2"
        })
})

app.listen(3000)