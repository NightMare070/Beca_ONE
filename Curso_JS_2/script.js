const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const botonIniciarPausar = document.querySelector('#start-pause');
const play = new Audio('./sonidos/play.wav');
const pause = new Audio('./sonidos/pause.mp3');
const beep = new Audio('./sonidos/beep.mp3');

let tiempoTranscurridoEnSegundos = 5;
let idIntervalo = null;

musica.loop = true;

inputEnfoqueMusica.addEventListener('change', () => {
    if (inputEnfoqueMusica.checked) {
        musica.play();
    } else {
        musica.pause();
    }
});

botonCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto');
    botonCorto.classList.add('active');
});

botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque');
    botonEnfoque.classList.add('active');
});

botonLargo.addEventListener('click', () => {
    cambiarContexto('descanso-largo');
    botonLargo.classList.add('active');
});

function cambiarContexto(contexto) {

    botones.forEach(function(contexto){
        contexto.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagenes/${contexto}.png`);

    switch (contexto) {
        case 'descanso-corto':
            titulo.innerHTML = `¿Qué tal tomar un respiro?<br>
                <strong class="app__title-strong">¡Haz una pausa corta!</strong>`;
            break;
        case 'enfoque':
            titulo.innerHTML = `Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>`;
            break;
        case 'descanso-largo':
            titulo.innerHTML = `Hora de volver a la superficie<br>
                <strong class="app__title-strong">¡Haz una pausa larga!</strong>`;
            break;
        default:
            break;
    }
}

const cuentaRegresiva = () => {
    if (tiempoTranscurridoEnSegundos <= 0) {
        reiniciar();
        beep.play();
        alert('¡Temporizador finalizado!');
        return;
    }
    tiempoTranscurridoEnSegundos--;
    console.log(tiempoTranscurridoEnSegundos);
}

botonIniciarPausar.addEventListener('click', iniciarPausar);

function iniciarPausar() {
    if (idIntervalo) {
        reiniciar();
        pause.play();
        return;
    } 
    idIntervalo = setInterval(cuentaRegresiva, 1000);
    play.play();
}

function reiniciar() {
    clearInterval(idIntervalo);
    idIntervalo = null;
}