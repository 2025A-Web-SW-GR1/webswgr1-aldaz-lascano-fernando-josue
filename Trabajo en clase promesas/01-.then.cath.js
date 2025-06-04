// Trabajo en clase Promesas Fernando Aldaz

// .Then y . catch
// promesa.js
const fs = require('fs');

function leerArchivo(ruta) {
    return new Promise((resolve, reject) => {
        fs.readFile(ruta, 'utf-8', (err, data) => {
            if (err) reject(`Error al leer el archivo: ${err}`);
            else resolve(data);
        });
    });
}

function escribirArchivo(ruta, contenidoPrevio) {
    const fecha = new Date().toString();
    const contenidoFinal = `${contenidoPrevio} ${fecha}`;
    return new Promise((resolve, reject) => {
        fs.writeFile(ruta, contenidoFinal, (err) => {
            if (err) reject(`Error al escribir el archivo: ${err}`);
            else resolve('Archivo actualizado correctamente.');
        });
    });
}

const archivo = './a.txt';

leerArchivo(archivo)
    .then(contenido => {
        console.log('Contenido original:', contenido);
        return escribirArchivo(archivo, contenido);
    })
    .then(mensaje => {
        console.log(mensaje);
        return leerArchivo(archivo);
    })
    .then(nuevoContenido => {
        console.log('Contenido final en el archivo:', nuevoContenido);
    })
    .catch(error => {
        console.error('Ocurrió un error:', error);
    });

