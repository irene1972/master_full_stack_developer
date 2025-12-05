const router = require('express').Router();
const { getAll, create, edit, remove } = require('../../controllers/autores.controller');

router.get('/',getAll);
router.post('/',create)
router.put('/:autorId',edit)
router.delete('/:autorId',remove)

module.exports=router;