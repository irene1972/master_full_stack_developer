const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query('select * from clientes');
    return result;
    // Si la query es un select => obtengo un array con los registros
}

const selectById = async (clienteId) => {
    const [result] = await db.query(
        'select * from clientes where id = ?',
        [clienteId]
    );
    if (result.length === 0) return null
    return result[0];
}

const insert = async ({ nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    const [result] = await db.query(
        `INSERT INTO clientes (nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni]
    );
    return result;
}

const updateById = async (clienteId, { nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {

    const [result] = await db.query(
        'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, genero = ?, cuota = ?, fecha_nacimiento = ?, dni = ? where id = ?',
        [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, clienteId]
    );

    return result;
}

const deleteById = async (clienteId) => {
    const [result] = await db.query('delete from clientes where id = ?', [clienteId]);
    return result;
}

module.exports = {
    selectAll, selectById, insert, updateById, deleteById
}