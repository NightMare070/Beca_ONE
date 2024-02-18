let contador = 0;

while (contador < 10){
    contador++;

    alert(`El primer contador es ${contador}`);
}

while (contador >= 0){
    alert(`El segundo contador es ${contador}`);

    contador--;
}

let numero = prompt('Ingresa un número');
contador = -1;

while (contador != numero){
    contador++;

    console.log(contador);
}

numero = prompt('Ingresa un número');
contador = numero;

while (contador >= 0){
    console.log(contador);

    contador--;
}