const Autor=require('../models/autores.model');

const getAll=async(req,res)=>{
    try {
        const result = await Autor.selectAll();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Se ha producido un error al consultar los datos'});
    }
}

const getById=async(req,res)=>{
    res.json(req.autor);
}

const create=async(req,res)=>{
    try {
        const result = await Autor.insert(req.body);
        const nuevoAutor=await Autor.selectById(result.insertId);
        console.log(result);

        if(!nuevoAutor){
            return res.status(404).json({ message: 'No existe el autor con ese ID' });
        }
        res.status(201).json(nuevoAutor);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Se ha producido un error al insertarse los datos'});
    }
}

const edit=async(req,res)=>{
    const {autorId}=req.params;
    try {
        await Autor.update(autorId,req.body);
        const result = await Autor.selectById(autorId);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Se ha producido un error al actualizarse los datos'});
    }
}

const remove=async(req,res)=>{
    const {autorId}=req.params;
    try {
        await Autor.deleteById(autorId);
        res.json(req.autor);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Se ha producido un error al eliminarse los datos'});
    }
}

module.exports={
    getAll,
    getById,
    create,
    edit,
    remove
}