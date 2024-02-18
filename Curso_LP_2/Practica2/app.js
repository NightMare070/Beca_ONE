function holaMundo() {
    console.log("Hola Mundo");
}

function holaNombre(nombre) {
    console.log(`Hola ${nombre}`);
}

function doble(numero) {
    return numero * 2;
}

function promedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function mayor(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

function cuadrado(numero) {
    return numero * numero;
}

holaMundo();

nombre = prompt("Ingrese su nombre");
holaNombre(nombre);

numero = parseInt(prompt("Ingrese un numero"));
console.log(doble(numero));

n1 = parseInt(prompt("Ingrese el primer numero"));
n2 = parseInt(prompt("Ingrese el segundo numero"));
n3 = parseInt(prompt("Ingrese el tercer numero"));
console.log(promedio(n1, n2, n3));

n1 = parseInt(prompt("Ingrese el primer numero"));
n2 = parseInt(prompt("Ingrese el segundo numero"));
console.log(mayor(n1, n2));

numero = parseInt(prompt("Ingrese un numero"));
console.log(cuadrado(numero));