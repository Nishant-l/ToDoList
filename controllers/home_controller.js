// const db = require("../config/mongoose");
const Content=require('../models/content');

contactList=[{message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc my name is xyz i will buy abc',category:'home',date:'31-05-1998'}
];
module.exports.home=function(req,res){

    Content.find({},function(err,content){
        if(err){
            console.log('error in fetching from db');
            return;
        }
        return res.render('index.ejs',{Title:'ToDoList',contact:content});
    });


    // return res.render('index.ejs',{
    //     Title:'ejs',
    //     contact:contactList
    // });
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
    // contactList.push(req.body);
    // res.redirect('back');
}

module.exports.del=function(req,res){
    // res.end(<h1>WOWOWOW</h1>);
    console.log(req.query.date);
    let q=req.query.date;
    let index=0;
    for(let i=0;i<contactList.length;i++){
        if(contactList[i].date===q){
            console.log('found');
            contactList.splice(index,index+1);
            break;
        }
        index++;
    }
    res.redirect('back');
    
}