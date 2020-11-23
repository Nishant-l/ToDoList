const express=require('express');
// const path=require('path');
const port=8000;
const app=express();
const db=require('./config/mongoose');


app.use(express.urlencoded());
app.use('/',require('./routes'));
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views','./views');





app.listen(port,function(err){
    if(err){
        console.log('following error occured',err);
    }
    console.log(`Server running Successfully on port ${port}`);
});