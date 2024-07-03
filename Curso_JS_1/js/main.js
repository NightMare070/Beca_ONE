function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];

    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function (){
        playSonido(idAudio);
    };
    contador++;
}