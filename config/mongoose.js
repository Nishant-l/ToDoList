const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/ToDoList');

const db= mongoose.connection;

db.on('error',console.error.bind(console,"Erroe connection to db"));

db.once('open',function(){
    console.log('conected to dataBase :: MangoDB');
})

module.exports = db;