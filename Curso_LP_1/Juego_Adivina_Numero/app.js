function getRandomInt(min, max) {   //Declarar una función con parámetros
    return Math.floor(Math.random() * (max - min)) + min;   //Retornar un numero aleatorio entre un rango
}

let minimo = parseInt(prompt("Me indicas el número mínimo con el que deseas jugar:"));   //Asignar un valor a la variable y cambiar el tipo de dato a entero
let maximo = parseInt(prompt("Me indicas el número máximo con el que deseas jugar:"));   //Asignar un valor a la variable y cambiar el tipo de dato a entero
let numeroSecreto = getRandomInt(minimo, maximo);   //Declarar una variable con un valor
let numeroUsuario = -10;
let intentos = 0;
let maximoIntentos = 6;

console.log(numeroSecreto);   //Mostrar en consola el valor de la variable
console.log(typeof(numeroUsuario));   //Mostrar en consola el tipo de dato de la variable

while (numeroUsuario != numeroSecreto) {   //Comparar el valor de la variable con el valor de la variable
    intentos++;

    numeroUsuario = parseInt(prompt(`Me indicas un número del ${minimo}-${maximo} por favor:`));   //Asignar un valor a la variable y cambiar el tipo de dato a entero

    if (numeroUsuario == numeroSecreto) {   //Comparar el valor de la variable con el valor de la variable
        console.log(numeroUsuario == numeroSecreto);   //Mostrar en consola el valor de la comparación
        alert(`Acertaste, el número es  ${numeroSecreto}, lo lograste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);   //Operador ternario: condición ? valor si es verdadero : valor si es falso
    }else{
        console.log(intentos);
    
        if (numeroUsuario > numeroSecreto) {   //Comparar el valor de la variable con el valor de la variable
            alert('El número secreto es menor');
        }else{
            alert('El número secreto es mayor');
        }

        if (intentos >= maximoIntentos){
            alert(`Llegaste al número máximo de ${maximoIntentos} intentos, el número secreto era el: ${numeroSecreto}`);   //Template String
            break;
        }
    
        //Si el valor de la variable es diferente al valor de la variable
        //alert('Lo siento, no acertaste el número');
    }
}
