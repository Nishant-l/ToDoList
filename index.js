// --------------------creating express Server --------------------------
const express=require('express');
const port=8000;
const app=express();
// ----------------------importing db ------------------------------------
const db=require('./config/mongoose');
const Content=require('./models/content');

// -------------- express midelWare----------------------------------------
app.use(express.urlencoded());
app.use('/',require('./routes'));
app.use(express.static('assets'));

// ------------------configure the behavior of the server------------------
app.set('view engine','ejs');
app.set('views','./views');



// ----------------------- listen for requests on defined port--------------

app.listen(port,function(err){
    if(err){
        console.log('following error occured',err);
    }
    console.log(`Server running Successfully on port ${port}`);
});