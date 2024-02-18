function IMC(altura, peso) {
    return peso / (altura ** 2);
}

function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function conversion(dolares) {
    return dolares * 19.5;
}

function valoresRectangulo(alto, ancho) {
    return {
        area: alto * ancho,
        perimetro: 2 * (alto + ancho)
    };
}

function valoresCirculo(radio) {
    return {
        area: 3.14 * radio ** 2,
        perimetro: 2 * 3.14 * radio
    };
}

function tabla(multiplo) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${multiplo} x ${i} = ${multiplo * i}`);
    }
}

let altura = prompt('Ingrese su altura en metros');
let peso = prompt('Ingrese su peso en kilogramos');
console.log(`Su IMC es: ${IMC(altura, peso)}`);

let numero = prompt('Ingrese un número para calcular su factorial');
console.log(`El factorial de ${numero} es: ${factorial(numero)}`);

let dolares = prompt('Ingrese la cantidad de dólares a convertir');
console.log(`La cantidad de pesos es: ${conversion(dolares)}`);

let alto = prompt('Ingrese la altura del rectángulo');
let ancho = prompt('Ingrese el ancho del rectángulo');
console.log(valoresRectangulo(alto, ancho));

let radio = prompt('Ingrese el radio del círculo');
console.log(valoresCirculo(radio));

let multiplo = prompt('Ingrese el número para la tabla de multiplicar');
tabla(multiplo);