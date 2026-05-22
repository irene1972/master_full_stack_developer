const ClienteModel = require('../models/clientes.model');

const checkClienteId = async (req, res, next) => {
    const { clienteId } = req.params;

    // El clienteId no es numérico
    if (isNaN(clienteId)) {
        return res.status(400)
            .json({ message: 'El id del cliente debe ser un número' });
    }

    // El clienteId no existe
    const cliente = await ClienteModel.selectById(clienteId);
    if (!cliente) {
        return res.status(404)
            .json({ message: 'El cliente no existe con ese ID' });
    }

    // Modifico la petición para incluir el cliente
    req.cliente = cliente;

    next();
}

module.exports = { checkClienteId }