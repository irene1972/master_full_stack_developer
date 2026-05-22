const router = require('express').Router();
const { getAll, getById, getByAutor, create, edit, remove } = require('../../controllers/posts.controller');
const { checkPostId, checkPostAutorId } = require('../../middlewares/posts.middleware');
const { postSchema } = require('../../schemas/posts.schema');
const { validateSchema } = require('../../middlewares/validation.middleware');

router.get('/',getAll);
router.get('/getById/:postId',checkPostId,getById);
router.get('/autor/:autorId',checkPostAutorId,getByAutor);
router.post('/',validateSchema(postSchema),create);
router.put('/:postId',checkPostId,edit);
router.delete('/:postId',checkPostId,remove);

module.exports=router;