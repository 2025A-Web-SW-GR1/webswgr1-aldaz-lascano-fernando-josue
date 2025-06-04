// asyncAwait.js
const fs = require('fs');

function leerArchivo(ruta) {
    return new Promise((resolve, reject) => {
        fs.readFile(ruta, 'utf-8', (err, data) => {
            if (err) reject(`Error al leer el archivo: ${err}`);
            else resolve(data);
        });
    });
}

function escribirArchivo(ruta, contenidoAnterior) {
    const fecha = new Date().toString();
    const nuevoContenido = `${contenidoAnterior} ${fecha}`;

    return new Promise((resolve, reject) => {
        fs.writeFile(ruta, nuevoContenido, (err) => {
            if (err) reject(`Error al escribir en el archivo: ${err}`);
            else resolve('Archivo actualizado correctamente.');
        });
    });
}

const archivo = './a.txt';

async function procesarArchivo() {
    try {
        const contenidoOriginal = await leerArchivo(archivo);
        console.log('Contenido original:', contenidoOriginal);

        const mensaje = await escribirArchivo(archivo, contenidoOriginal);
        console.log(mensaje);

        const contenidoFinal = await leerArchivo(archivo);
        console.log('Contenido actualizado:', contenidoFinal);
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

procesarArchivo();
