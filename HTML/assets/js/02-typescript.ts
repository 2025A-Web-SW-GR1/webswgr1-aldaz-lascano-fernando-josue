console.log("Hola Typescript");

// var nombre = "algo"; // NO VAMOS A USAR VAR NUNCA

let nombres = "Adrian";
nombres = "A";
nombres = 'C';
// nombres = 1;
let nombreTS: string="";
console.log(typeof nombres, "nombres")
let numeros = 1;
let numerosTS: number = 1;
console.log(typeof numeros, "numeros")
numeros = 1.1; //decimales
console.log(typeof numeros, "numeros decimales");
let booleanos = true;
let booleanosTS: boolean = false;
booleanos = false;
console.log(typeof booleanos, "booleanos")

let nulos = null;
let nulosTS: null = null;
console.log(typeof nulos, "nulos");

let arreglos = [];
let arreglosTS: number[] = [];
let arreglosTS2: Array<number> = [];
console.log(typeof arreglos, "arreglos");

let objetos = {};
let objetosTS: object = {};
console.log(typeof objetos, "objetos");

let undefineds = undefined;
let undefinedsTS: undefined = undefined;
console.log(typeof undefineds, "undefineds")

// Truty and Falsy
let trutyFalsy:any;
trutyFalsy = "";
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("Falsy")
}
trutyFalsy = "a";
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("Falsy")
}
trutyFalsy = -1;
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("Falsy")
}
trutyFalsy = 0;
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("Falsy")
}
trutyFalsy = 1;
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("Falsy")
}
trutyFalsy = null;
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("Falsy")
}
trutyFalsy = {};
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("Falsy")
}
trutyFalsy = [];
if(trutyFalsy){
    console.log("Truty");
}else{
    console.log("Falsy")
}

const adrian:any = {
    "nombre" : "Adrian",
    'apellido' : 'Eguez',
    edad: 36,
    hijos: 1,
    casado: true,
    zapatos: undefined,
    ropa: {
        color: "plomo",
        talla: 40
    },
    mascotas: ['Cache','Peque','Pandi']
};
console.log(adrian);
// Acceder a las propiedades
adrian.nombre // "Adrian"
adrian["apellido"] // "Eguez"
// Modificar (reasginar)
adrian.nombre = "Vicente";
adrian["nombre"] = "Vicente";
//adrian = {}; ERROR
// Crear atributos
adrian.sueldo = 1.2;
adrian["gastos"] = 0.8;
// Eliminar propiedades
adrian.nombre = undefined;
delete adrian.nombre;

// Variables por valor o por referencia

//Variables por valor
//primitivas: number string boolean
let edadAdrian = 33;
let edadVicente = edadAdrian; // clonando
console.log(edadAdrian); //33
console.log(edadVicente); //33
edadAdrian=edadAdrian+1;
console.log(edadAdrian); // 34
console.log(edadVicente); // 33

//Variables por referencia
// object: {} []
let notas = {
    total: 10,
};
let notas2doBim = notas; // Referencia
notas2doBim.total = notas2doBim.total+1;
console.log(notas); // {total: 11}
console.log(notas2doBim); // {total: 11}
// Como clonar
let notasClonadaUno = Object.assign({}, notas); // obj
let arregloACopiar= [1,2,3];
let arregloClonado = Object.assign([], arregloACopiar); // arr
notasClonadaUno.total=notasClonadaUno.total + 1;
console.log(notas); // {total: 11}
console.log(notas2doBim); // {total: 11}
console.log(notasClonadaUno); // {total: 12}

// Arreglos
const arregloEjemplo = [1,2,3,4,5];
//for of (obtenemos el VALOR)
for (let valorDelArreglo of arregloEjemplo){
    console.log('Valor:', valorDelArreglo);
}
// for in (obtenemos el indice)
for (let indiceDelArreglo of arregloEjemplo) {
    console.log('Indice: ', indiceDelArreglo);
    console.log('Valor:', arregloEjemplo[indiceDelArreglo]);
}
// Añadir al final un elemento
arregloEjemplo.push(6); //[1,2,3,4,5,6]
// Eliminar el ultimo elemento
arregloEjemplo.pop(); // [1,2,3,4,5]
// Añadir al principio del arreglo
arregloEjemplo.unshift(0); // [0,1,2,3,4,5]
// Eliminar y agregar elementos
// splice  -indice donde empezar
//         -numero elementos a eliminar
//         - elemento a añadir
arregloEjemplo.splice(
    0, // empezamos en el indice 0
    3, // eliminamos 3 elementos
    3,4,5
); 
// [0,1,2,3,4,5] -> Arreglo original
// [1,2,3] -> eliminados
// [3,4,5,3,4,5]; Arreglo final

// Operadores
// find
//findIndex
// foreach
// map
// filter
// some
// every
// reduce

// funciones
function soloNumeros(a,b,c){
    return a-b+c;
}

function soloNumerosTs(a:number,b:number,c:number): number{
    return a-b+c;
}


function soloImprimir(texto:string):void{
    console.log(texto);
}
function soloImprimir2(texto:string):undefined{
    console.log(texto);
}
// Funcion nombrada
function nombreDeMiFuncion(){}
// Funciones anonimas
const funcionSinNombre = function(){};
nombreDeMiFuncion();
funcionSinNombre();
[].forEach(function(){});

// Fat Arrow function
const funcionFatArrow = ( a:number, b:number):number => a+b;

const funcionFatArrowSinParametros = ()=>{
    console.log('Sin parametros');
};
const funcionFAOmitirReturm= (a,b) => a+b;
const unSoloParametroSinParentesis = a => a*a;
// Parametros infinitos
function sumarNumeros(...todosNumeros:number[]): number{
    let total = 0;
    for(let valorNumero of todosNumeros){
        total = total + valorNumero;
    }
    return total;
}

sumarNumeros(1,2,3,4,5,2,1,2,3,4,5);

// Destructuracion

// Desructuracion de objetos
const adrianDest = {
    nombre : "Adrian",
};
const carolinaDest = {
    nombre: "Carolina",
    apellido : "Eguez",
};
// merge de las dos variables (orden importa)
const adrianCarolinadest = {
    ...adrianDest,
    ...carolinaDest,
};
// { nombre: "Carolina", apellido " Eguez"}
const carolinaAdrianDest= {
    ...carolinaDest,
    ...adrianDest,
};
// { nombre: "Adrian", apellido: "Eguez"}
const overrideDest = {
    ...carolinaAdrianDest,
    ...adrianDest,
    nombre : 'Vicente',
};

// Destructuracion de arreglos
const arreglosDestUno = [1,2,3];
const arregloDestDos = [4,5,6];
// Merge
const arregloUnoDosDest = [
    ...arreglosDestUno,
    ...arregloDestDos,
]// [1,2,3,4,5,6]
const arregloDosUnosDest = [
    ...arregloDestDos,
    ...arreglosDestUno,
] // [4,5,6,1,2,3]
// La destructuracion es una forma de clonacion
const objetoACopiar = {a:1};
const objetoCopiadoA = {...objetoACopiar};