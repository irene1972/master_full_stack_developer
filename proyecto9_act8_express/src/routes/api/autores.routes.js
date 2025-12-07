const router = require('express').Router();
const { getAll, create, edit, remove, getById } = require('../../controllers/autores.controller');

router.get('/',getAll);
router.post('/',create)
router.get('/getById/:autorId',getById);
router.put('/:autorId',edit)
router.delete('/:autorId',remove)

module.exports=router;