const yup = require('yup');

const postSchema = yup.object({
    titulo: yup
        .string()
        .required('El campo titulo es requerido'),
    descripcion: yup
        .string(),
    autores_id: yup.number()
        .required('El campo autores_id es requerido'),
    categoria: yup.number()
        .required('El campo categoria es requerido')
});

module.exports = { postSchema }