let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

function mostrarLenguajes(){
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

mostrarLenguajes();

function mostrarLenguajesInverso(){
    for (let i = lenguajesDeProgramacion.length-1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

mostrarLenguajesInverso();

let numeros = [1, 2, 3, 4, 5];

function promedio(numeros) {
    return numeros.reduce((a, b) => a + b) / numeros.length;
}

console.log(promedio(numeros));

function mostrarMayorMenor(numeros) {
    console.log(`El número mayor es: ${Math.max(...numeros)}`);
    console.log(`El número menor es: ${Math.min(...numeros)}`);
}

console.log(mostrarMayorMenor(numeros));

function suma(numeros) {
    return numeros.reduce((a, b) => a + b);
}

console.log(suma(numeros));

let numero = prompt('Ingrese un número');
function posicionNumero(numeros, numero) {
    return numeros.indexOf(numero);
}

console.log(posicionNumero(numeros, numero));

numeros2 = [6, 7, 8, 9, 10];
function concatenar(numeros, numeros2) {
    return numeros.concat(numeros2);
}
console.log(concatenar(numeros, numeros2));

function cuadrado(numeros) {
    return numeros.map(x => x * x);
}
console.log(cuadrado(numeros));