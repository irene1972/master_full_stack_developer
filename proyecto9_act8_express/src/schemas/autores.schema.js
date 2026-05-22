const yup = require('yup');

const autorSchema = yup.object({
    nombre: yup
        .string()
        .required('El campo nombre es requerido'),
    email: yup.string()
        .trim()
        .email('El campo email tiene un formato incorrecto')
        .required('El campo email es requerido'),
    imagen:yup.string()
        .trim()
});

module.exports = { autorSchema }