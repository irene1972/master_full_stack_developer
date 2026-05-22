const router = require('express').Router();
const { getAll, create, edit, remove, getById } = require('../../controllers/autores.controller');
const { checkAutorId } = require('../../middlewares/autores.middleware');
const { autorSchema } = require('../../schemas/autores.schema');
const { validateSchema } = require('../../middlewares/validation.middleware');

router.get('/',getAll);
router.get('/getById/:autorId',checkAutorId,getById);
router.post('/',validateSchema(autorSchema),create)
router.put('/:autorId',checkAutorId,edit)
router.delete('/:autorId',checkAutorId,remove)

module.exports=router;