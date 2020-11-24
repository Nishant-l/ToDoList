// const db = require("../config/mongoose");
const Content=require('../models/content');

module.exports.home=function(req,res){

    Content.find({},function(err,content){
        if(err){
            console.log('error in fetching from db');
            return;
        }
        return res.render('index.ejs',{Title:'ToDoList',contact:content});
    });
}
module.exports.content=function(req,res){
    console.log(req.body);
    Content.create({
        date:req.body.date,
        message:req.body.message,
        category:req.body.category
    },function(err,newContent){
        if(err){
            console.log('error in creating content');
            return;
        }
        console.log('*********',newContent);
        return res.redirect('back');
    })
}

module.exports.del=function(req,res){
    // res.end(<h1>WOWOWOW</h1>);
    console.log(req.query.id);
    let q=req.query.id;
    Content.findByIdAndDelete(q,function(err){
        if(err){
            console.log('error in deletion',err);
            return;
        }
        return res.redirect('back');
    })
}