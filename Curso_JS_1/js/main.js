function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];

    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function (){
        playSonido(idAudio);
    };

    tecla.onkeydown = function (event){
        if (event.key === 'Enter' || event.key === ' ') {
            tecla.classList.add('activa');
        }
    };

    tecla.onkeyup = function (){
        tecla.classList.remove('activa');
    }
}