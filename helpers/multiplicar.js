import fs from 'fs';
import colors from 'colors'

export const crearArchivo = async (base = 5, listar = false, hasta) => {

    try {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log(`<--- TABLA DEL ${base} --->`.blue)
            console.log(salida.grey);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {

        throw `El error es: ${error}`;
    }

}
