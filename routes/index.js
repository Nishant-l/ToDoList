const express=require('express');
const router=express.Router();
const homeControler=require('../controllers/home_controller');

console.log('routs module fetched by index.js to use by app');

// ----------- passing requested routs to controller-------------------

router.get('/',homeControler.home);
router.post('/addToList',homeControler.content);
router.get('/DeleteFromList/',homeControler.del);

module.exports=router;