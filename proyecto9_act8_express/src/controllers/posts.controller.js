const Post=require('../models/posts.model');

const getAll=async(req,res,next)=>{
    try {
        const result = await Post.selectAll();
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getByAutor=async(req,res,next)=>{
    const {autorId}=req.params;
    try {
        const result=await Post.selectByAutor(autorId);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const create=async(req,res,next)=>{
    try {
        const result = await Post.insert(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const edit=async(req,res,next)=>{
    const {postId}=req.params;
    try {
        await Post.update(postId,req.body);
        const result = await Post.selectById(postId);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const remove=async(req,res,next)=>{
    const {postId}=req.params;
    try {
        const post=await Post.selectById(postId);
        await Post.deleteById(postId);
        res.json(post);
    } catch (error) {
        next(error);
    }
}

module.exports={
    getAll,
    getByAutor,
    create,
    edit,
    remove
}