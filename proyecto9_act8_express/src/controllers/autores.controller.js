const Autor=require('../models/autores.model');

const getAll=async(req,res,next)=>{
    try {
        const result = await Autor.selectAll();
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getById=async(req,res,next)=>{
    const {autorId}=req.params;
    try {
        const result = await Autor.selectById(autorId);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const create=async(req,res,next)=>{
    try {
        const result = await Autor.insert(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const edit=async(req,res,next)=>{
    const {autorId}=req.params;
    try {
        await Autor.update(autorId,req.body);
        const result = await Autor.selectById(autorId);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const remove=async(req,res,next)=>{
    const {autorId}=req.params;
    try {
        const autor=await Autor.selectById(autorId);
        await Autor.deleteById(autorId);
        res.json(autor);
    } catch (error) {
        next(error);
    }
}

module.exports={
    getAll,
    getById,
    create,
    edit,
    remove
}