const db=require('../config/db');

const selectAll=async()=>{
    const [result]=await db.query(`select p.titulo,p.descripcion,p.fecha_creacion,p.categoria,a.id as autorId,a.nombre,a.email,a.imagen 
                                    from posts p
                                    inner join autores a on p.autores_id=a.id`);
    return result;
}

const selectById=async(postId)=>{
    const [result]=await db.query(`select p.titulo,p.descripcion,p.fecha_creacion,p.categoria,a.id as autorId,a.nombre,a.email,a.imagen 
                                    from posts p
                                    inner join autores a on p.autores_id=a.id
                                    where p.id=?`,
                                    [postId]);
    if(result.length===0) return null;
    return result[0];
}

const selectByAutor=async(autorId)=>{
    
    const [result]=await db.query(`select p.titulo,p.descripcion,p.fecha_creacion,p.categoria,a.id as autorId,a.nombre,a.email,a.imagen 
                                    from posts p
                                    inner join autores a on p.autores_id=a.id
                                    where a.id=?`,
                                    [autorId]);
                
    if(result.length===0) return null;
    
    return result;
}

const insert=async({titulo,descripcion,fecha_creacion,categoria,autores_id})=>{
    const [result]=await db.query('insert into posts (titulo,descripcion,fecha_creacion,categoria,autores_id) values (?,?,?,?,?)',[titulo,descripcion,fecha_creacion,categoria,autores_id]);
    return result;
}

const update=async(postId,{titulo,descripcion,fecha_creacion,categoria,autores_id})=>{
    const [result]=await db.query('update posts set titulo=?,descripcion=?,fecha_creacion=?,categoria=?,autores_id=? where id=?',[titulo,descripcion,fecha_creacion,categoria,autores_id,postId]);
    return result;
}

const deleteById=async(postId)=>{
    const [result]=await db.query('delete from posts where id=?',[postId]);
    return result;
}

module.exports={
    selectAll,
    selectById,
    selectByAutor,
    insert,
    update,
    deleteById
}