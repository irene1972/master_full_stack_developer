const router=require('express').Router();

router.use('/autores', require('./api/autores.routes'));



module.exports=router;