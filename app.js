import argv from './config/yargs.js';
import { crearArchivo } from './helpers/multiplicar.js';
import colors from 'colors';

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo .green, 'creado'.green))
    .catch(error => console.log(error .red));

