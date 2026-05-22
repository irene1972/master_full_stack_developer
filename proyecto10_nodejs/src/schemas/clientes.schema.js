const yup = require('yup');

const LETRAS_DNI = 'TRWAGMYFPDXBNJZSQVHLCKE';

const clienteSchema = yup.object({
    nombre: yup
        .string()
        .required('El campo nombre es requerido'),
    apellidos: yup
        .string()
        .required('El campo apellidos es requerido'),
    direccion: yup
        .string()
        .min(5, 'La dirección debe tener como mínimo 5 caracteres')
        .required('La dirección es obligatoria'),
    email: yup.string()
        .trim()
        .uppercase()
        .email('El campo email tiene un formato incorrecto'),
    //.matches()
    edad: yup.number()
        .min(18, 'El cliente debe ser mayor de edad')
        .max(120, 'La edad es superior a 120. No admitido'),
    genero: yup.string() // M, F, O
        .oneOf(['M', 'F', 'O'], 'El género debe ser M, F u O'),
    dni: yup.string()
        .trim().uppercase()
        .matches(/^\d{8}[A-HJ-NP-TV-Z]$/, 'El DNI debe tener 8 dígitos y una letra')
        .test('letra-dni', 'La letra del DNI es incorrecta',
            (value) => {
                const numero = parseInt(value.substring(0, 8));
                const letra = value.at(8)
                return LETRAS_DNI[numero % 23] == letra
            }
        )
});

module.exports = { clienteSchema }