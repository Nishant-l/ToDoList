module.exports.home=function(req,res){
    return res.render('index.ejs',{
        Title:'ejs'
    });
}