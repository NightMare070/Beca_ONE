let numeroSecreto = 0; //Llamada a la función generarNumeroAleatorio()
let contador = 0;   //Variable que cuenta el número de intentos

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
    return Math.floor(Math.random() * (max - min)) + min;   //Retornar un numero aleatorio entre un rango
}

function condicionesIniciales(){  //Función que se ejecuta al pulsar el botón "Mensajes iniciales"
    asignarTextoElemento('h1', 'Juego del número secreto'); //Llamada a la función asignarTextoElemento()
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroAleatorio(1,10);
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