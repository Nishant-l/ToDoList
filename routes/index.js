const express=require('express');
const router=express.Router();
const homeControler=require('../controllers/home_controller');

console.log('routs module fetched by index.js to use by app');

router.get('/',homeControler.home);


module.exports=router;