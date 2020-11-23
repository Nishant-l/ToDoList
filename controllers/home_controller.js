contactList=[{message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'},
             {message:'my name is xyz i will buy abc',category:'home',date:'31-05-1998'}
];
module.exports.home=function(req,res){
    return res.render('index.ejs',{
        Title:'ejs',
        contact:contactList
    });
}
module.exports.content=function(req,res){
    console.log(req.body);
    res.redirect('back');
}