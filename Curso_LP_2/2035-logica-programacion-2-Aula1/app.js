let numeroSecreto = 0; //Llamada a la función generarNumeroAleatorio()
let contador = 0;   //Variable que cuenta el número de intentos
let numeros = [];  //Array que almacena los números aleatorios
let numeroMaximo = 10;  //Variable que almacena el número máximo

function asignarTextoElemento(elemento, texto){    //Función que se ejecuta al pulsar el botón "Asignar texto"
    let elementoHTML = document.querySelector(elemento);   //Selecciona el primer elemento h1
    elementoHTML.innerHTML = texto;             //Modifica el contenido del elemento h1
    return;
}

function verificarIntento(){   //Función que se ejecuta al pulsar el botón "Intentar"
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); //Obtiene el valor del input
    contador++; //Incrementa el contador de intentos
    if(numeroUsuario == numeroSecreto){  //Si el número ingresado es igual al número secreto
        asignarTextoElemento('p', `Ganaste, lo lograste en ${contador} ${contador == 1 ? 'intento' : 'intentos'}`);  //Llamada a la función asignarTextoElemento() con template string
        document.getElementById('reiniciar').removeAttribute('disabled'); //Habilita el botón "Reiniciar"
    }else{  //Si el número ingresado es diferente al número secreto
        if(numeroUsuario > numeroSecreto){  //Si el número ingresado es mayor al número secreto
            asignarTextoElemento('p', 'El número es menor');  //Llamada a la función asignarTextoElemento()
        }else{  //Si el número ingresado es menor al número secreto
            asignarTextoElemento('p', 'El número es mayor');  //Llamada a la función asignarTextoElemento()
        }
        limpiar();  //Llamada a la función limpiar()
    }

    return;
}

function limpiar(){ //Función que se ejecuta al pulsar el botón "Limpiar"
    document.querySelector('#valorUsuario').value = ''; //Limpia el valor del input/igual que document.getElementById('valorUsuario')
}

function generarNumeroAleatorio(min, max){  //Función que se ejecuta al pulsar el botón "Generar número aleatorio"
    let numeroGenerado = Math.floor(Math.random()*(max - min)+min);   //Retornar un numero aleatorio entre un rango

    if (numeros.length == max) {  //Si el array de números tiene la misma longitud que el número máximo
        asignarTextoElemento('p', 'Ya no hay más números disponibles');  //Llamada a la función asignarTextoElemento()
    }else{
        if (numeros.includes(numeroGenerado)) { //Si el número generado ya se encuentra en el array
            return generarNumeroAleatorio(1, numeroMaximo);  //Llamada recursiva a la función generarNumeroAleatorio()
        } else {  //Si el número generado no se encuentra en el array
            numeros.push(numeroGenerado);  //Añade el número generado al array
            console.log(numeros); //Imprime en consola el array de números
            return numeroGenerado;  //Retorna el número generado
        }
    }
}

function condicionesIniciales(){  //Función que se ejecuta al pulsar el botón "Mensajes iniciales"
    asignarTextoElemento('h1', 'Juego del número secreto'); //Llamada a la función asignarTextoElemento()
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); //Llamada a la función asignarTextoElemento()
    numeroSecreto = generarNumeroAleatorio(1,numeroMaximo);  //Llamada a la función generarNumeroAleatorio()
    console.log(numeroSecreto); //Imprime en consola el número secreto
    contador = 0;
}

function reiniciarJuego(){   //Función que se ejecuta al pulsar el botón "Reiniciar"
    limpiar();   // limpiar caja

    //indicar mensaje de numeros
    //generar numero aleatorio
    //reiniciar contador
    condicionesIniciales();   

    //desactivar boton reiniciar
    document.getElementById('reiniciar').setAttribute('disabled',true); //Deshabilita el botón "Reiniciar"
}

condicionesIniciales();  //Llamada a la función condicionesIniciales()