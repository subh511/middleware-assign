const express = require("express");
const app = express();


function isOldEnough(age){
    if(age >= 14){
        return true
    }else{
        return false;
    }
}
app.get("/ride1",function(req,res){
    //let entryAge = req.query.age;
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"you have successfully ridden ride1"
        })
    }else{
        res.status(411).json({
            msg:"sorry you are below the age"
        })
    }
})
app.listen(3000)