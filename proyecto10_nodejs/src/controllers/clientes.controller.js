const ClienteModel = require('../models/clientes.model');

const getAll = async (req, res) => {
    try {
        const clientes = await ClienteModel.selectAll();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Hay un error gravísimo'
        });
    }
}

const getById = (req, res) => {
    res.json(req.cliente);
}

const create = async (req, res) => {
    // req.body -> nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni.
    const result = await ClienteModel.insert(req.body)
    const nuevoCliente = await ClienteModel.selectById(result.insertId);

    if (!nuevoCliente) {
        return res.status(404).json({ message: 'No existe el cliente con ese ID' });
    }

    res.status(201).json(nuevoCliente);
}

const edit = async (req, res) => {
    // req.body 
    // req.params.clienteId
    const { body, params: { clienteId } } = req;

    const result = await ClienteModel.updateById(clienteId, body);
    const cliente = await ClienteModel.selectById(clienteId);

    res.json(cliente);
}

const remove = async (req, res) => {
    const { clienteId } = req.params;

    // const cliente = await ClienteModel.selectById(clienteId);
    const result = await ClienteModel.deleteById(clienteId);

    res.json(req.cliente);
}

module.exports = {
    getAll, getById, create, edit, remove
}