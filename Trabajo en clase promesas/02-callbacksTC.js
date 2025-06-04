// callback.js
const fs = require('fs');

const archivo = './a.txt';

fs.readFile(archivo, 'utf-8', (errLectura, dataOriginal) => {
    if (errLectura) {
        console.error('Error al leer el archivo:', errLectura);
        return;
    }

    console.log('Contenido original:', dataOriginal);

    const fecha = new Date().toString();
    const nuevoContenido = `${dataOriginal} ${fecha}`;

    fs.writeFile(archivo, nuevoContenido, (errEscritura) => {
        if (errEscritura) {
            console.error('Error al escribir en el archivo:', errEscritura);
            return;
        }

        console.log('Archivo actualizado correctamente.');

        fs.readFile(archivo, 'utf-8', (errLecturaFinal, dataFinal) => {
            if (errLecturaFinal) {
                console.error('Error al leer el archivo actualizado:', errLecturaFinal);
                return;
            }

            console.log('Contenido final en el archivo:', dataFinal);
        });
    });
});
