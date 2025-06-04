const { error } = require('console');
const fs = require('fs');
const { resolve } = require('path');

function promesaEsPar(numero){
    const miPrimerPromesa=new Promise(
        (resolve,reject)=>{
            if (numero % 2 == 0) {
                resolve(numero); // RETURN
            }else{
                reject('No es par!'); // THROW
            }
        }
    );
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero){
    return new Promise(res=>res(numero*numero));
}

promesaEsPar(4) // async
    .then(
        (respuestaEsPar)=>{
            console.log('Es par', respuestaEsPar);
            return promesaElevarAlCuadrado(respuestaEsPar)
        }
    )
    .then(
        (respuestaElevarCuadrado)=>{
            console.log('Elevado: ',
                respuestaElevarCuadrado);
        }
    )
    .catch(
        (respuestaError)=>{
            console.log('NO ES PAR', respuestaError)
        }
    );

function leerArchivoPromesa(nombreArchivo){
    return new Promise(
        (res,rej)=>{
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (errorLectura, contenido)=>{
                    if(errorLectura){
                        rej(errorLectura);
                    }else{
                        res(contenido);
                    }
                }
            );  
        }
    );
}
|
leerArchivoPromesa('./a.txt')
    .then(
        (contenidoArchivo)=>{
            console.log('Contenido: ', contenidoArchivo);
        }
    ).catch(
        (error)=>{
            console.error('ERROR', error)
        }
    )

// const correrLogicaPromesa2 = async ()=>{} // ESTO ES LO MISMO QUE LO DE ABAJO
// ASYNC AWAIT
// REGLAS:
// 1) estamos dentro de una funciuon nombrada, anonima o fat arrow
// 2) Agregar la palabra 'ASYNC' antes de la declaracion de la funcion
// 3) Agregar 'AWAIT' dentro de un bloque TRY CATCH a nuestra promesa.
async function correrLogicaPromesas(){
    try {
        const respuestaLeerArchivo = await leerArchivoPromesa('./a.txt');
        console.log('1) Respuesta archivo', respuestaLeerArchivo);
        await leerArchivoPromesa('./a.txt');
        console.log('2) Respuesta archivo', respuestaLeerArchivo);
    } catch (error) {
        console.log('2) ERROR', error);   
    }
}
correrLogicaPromesas().then().catch(); // async await transforma a la funcion en una PROMESA.