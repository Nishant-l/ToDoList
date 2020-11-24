const { text } = require('express');
const mongoose = require('mongoose');

const contentSchma= new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

const Content=mongoose.model('Content',contentSchma);

module.exports=Content;