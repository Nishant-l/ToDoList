const express=require('express');
// const path=require('path');
const port=8000;
const app=express();

app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');




app.listen(port,function(err){
    if(err){
        console.log('following error occured',err);
    }
    console.log(`Server running Successfully on port ${port}`);
});