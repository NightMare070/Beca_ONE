//1.
console.log("Bienvenido usuario");

//2.
let nombre = "Giovanni";
console.log(`Hola ${nombre}`);

//3.
//let nombre = "Giovanni";
alert(`Hola ${nombre}`);

//4.
let lenguaje = prompt("¿Cuál es tu lenguaje de programación favorito?");
console.log(`Tu lenguaje favorito es ${lenguaje}`);

//5.
let valor1 = 5;
let valor2 = 10;
let resultado = parseInt(valor1) + parseInt(valor2);
console.log(`La suma de ${valor1} y ${valor2} es ${resultado}`);

//6.
//let valor1 = 5;
//let valor2 = 10;
resultado = parseInt(valor1) - parseInt(valor2);
console.log(`La resta de ${valor1} y ${valor2} es ${resultado}`);

//7.
let edad = parseInt(prompt("¿Cuál es tu edad?"));
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
if (edad < 18){
    console.log("Eres menor de edad");
}

//8.
let numero = parseInt(prompt("Ingresa un número"));
if (numero == 0){
    console.log("El número es cero");
}else{
    if (numero < 0){
        console.log("El número es negativo");
    }else{
        console.log("El número es positivo");
    }
}

//9.
let contador = 10;
while (contador >= 1){
    console.log(contador);
    contador--;
}

//10.
let nota = 9;
if (nota >= 7){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

//11.
console.log(Math.random())

//12.
console.log(Math.floor(Math.random() * 10)+1);

//13.
console.log(Math.floor(Math.random() * 1000)+1);