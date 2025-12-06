const router = require('express').Router();
const { getAll, getByAutor, create, edit, remove } = require('../../controllers/posts.controller');

router.get('/',getAll);
router.post('/',create)
router.get('/autor/:autorId',getByAutor);
router.put('/:postId',edit)
router.delete('/:postId',remove)

module.exports=router;