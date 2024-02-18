let titulo = document.querySelector('h1');   //Selecciona el primer elemento h1
titulo.innerHTML = 'Hora del Desafío';             //Modifica el contenido del elemento h1

function console(){   //Función que se ejecuta al pulsar el botón "Intentar"
    alert('El botón fue clicado');
}

function Prompt(){
    let nombre = prompt("Dime una ciudad de Brasil");
    alert(`Estuve en ${nombre} y me acorde de ti`);
}

function alerta(){
    alert('Yo amo JS');
}

function suma(){
    let num1 = prompt("Dime un número");
    let num2 = prompt("Dime otro número");
    let resultado = parseInt(num1) + parseInt(num2);
    alert(`El resultado es ${resultado}`);
}