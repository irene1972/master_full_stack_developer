const AutorModel=require('../models/autores.model');

const checkAutorId = async (req, res, next) => {
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

    // Modifico la petición para incluir el autor
    req.autor = autor;

    next();
}

module.exports = { checkAutorId }