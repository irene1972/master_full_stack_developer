const Post = require('../models/posts.model');

const getAll = async (req, res) => {
    try {
        const result = await Post.selectAll();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Se ha producido un error al consultar los datos' });
    }
}

const getById = async (req, res) => {

    res.json(req.post);

}

const getByAutor = async (req, res) => {
    const { autorId } = req.params;
    try {
        const result = await Post.selectByAutor(autorId);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Se ha producido un error al consultar los datos' });
    }
}

const create = async (req, res) => {
    try {
        const result = await Post.insert(req.body);
        const nuevoPost=await Post.selectById(result.insertId);

        if (!nuevoPost) {
        return res.status(404).json({ message: 'No existe el post con ese ID' });
    }

        res.status(201).json(nuevoPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Se ha producido un error al insertar los datos' });
    }
}

const edit = async (req, res) => {
    const { postId } = req.params;
    try {
        await Post.update(postId, req.body);
        const post = await Post.selectById(postId);
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Se ha producido un error al actualizar los datos' });
    }
}

const remove = async (req, res) => {
    const { postId } = req.params;
    try {
        //const post = await Post.selectById(postId);
        await Post.deleteById(postId);
        res.json(req.post);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Se ha producido un error al eliminar los datos' });
    }
}

module.exports = {
    getAll,
    getById,
    getByAutor,
    create,
    edit,
    remove
}