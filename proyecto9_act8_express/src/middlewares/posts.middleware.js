const PostModel=require('../models/posts.model');
const AutorModel=require('../models/autores.model');

const checkPostId = async (req, res, next) => {
    const { postId } = req.params;

    // El postId no es numérico
    if (isNaN(postId)) {
        return res.status(400)
            .json({ message: 'El id del post debe ser un número' });
    }

    // El postId no existe
    const post = await PostModel.selectById(postId);
    if (!post) {
        return res.status(404)
            .json({ message: 'El post no existe con ese ID' });
    }

    // Modifico la petición para incluir el post
    req.post = post;

    next();
}

const checkPostAutorId = async (req, res, next) => {
    const { autorId } = req.params;

    // El autorId no es numérico
    if (isNaN(autorId)) {
        return res.status(400)
            .json({ message: 'El id del autor debe ser un número' });
    }

    // El autorId no existe
    const autor = await AutorModel.selectById(autorId);
    if (!autor) {
        return res.status(404)
            .json({ message: 'El autor no existe con ese ID' });
    }

    next();
}


module.exports = { checkPostId,checkPostAutorId }