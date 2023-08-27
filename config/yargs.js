import yargs from 'yargs';

const argv = yargs(process.argv.slice(2))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 20,
        describe: 'Cantidad de numeros a multiplicar'
    })
    .check((argv) => {
        if (isNaN(argv.base)) {
            throw new Error('La base tiene que ser un número');
        }
        return true;
    })
    .argv;


 export default argv;
