let dia = prompt("Introduce que dia de la semana es");

if (dia == "sabado" || dia == "domingo"){
    alert("Buen fin de semana");
}else{
    alert("Buena semana");
}

let numero = prompt("Introduce un numero");

if (numero < 0){
    alert("El numero es negativo");
}else {
    alert("El numero es positivo");
}

let puntuacion = 110

if (puntuacion >= 100){
    alert("Has ganado");
}else {
    alert("Has perdido");
}

let saldo = 1000
alert("Tu saldo es de $" + saldo);

nombre = prompt("Introduce tu nombre");
alert("Hola " + nombre + ", bienvenido");