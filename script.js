const reloj = document.getElementById("reloj");
const hora = document.getElementById("hora");
const mindecena = document.getElementById("mindecena");
const minunidad = document.getElementById("minunidad");
const efectos = document.getElementById("efectos");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");
const sonido = document.getElementById("sonido");
const lectura = document.getElementById("lectura");
const lecturatexto = document.getElementById("lecturatexto");

const digitos = [hora, mindecena, minunidad];

const lecturas = {
    1: "1:11.  Un nuevo comienzo se acerca a ti, confía en tu intuición, y di que sí a lo nuevo",
    2: "2:22.  Estás en el lugar y momento correcto. Toma las oportunidades que  se te aparezcan, incluso con esa personita de la que no estás segure",
    3: "3:33.  Es tu momento para pedir una señal. Si se te aparece tres veces, ten por seguro que tus guías espirituales te están mandando un mensaje",
    4: "4:44.  Estás más protegide de lo que crees. Sigue con ese proyecto, tus guías no van a dejar que falle. Confía en tu intuición",
    5: "5:55.  Algo nuevo está en camino. Identifica lo que no te sirve y déjalo ir. Es época de cambios, no les temas",

};

const listadigitos = [
    "assets/img/0.png", "assets/img/1.png", "assets/img/2.png", "assets/img/3.png", "assets/img/4.png", "assets/img/5.png", "assets/img/6.png", "assets/img/7.png", "assets/img/8.png", "assets/img/9.png",
];

listadigitos.forEach((ruta) => {new Image().src = ruta;});

let horaaleatoria = 0;
let decenaaleatoria = 0;
let unidadaleatoria = 0;

let girando = false;
let audio = null;

const PROBABILIDAD_COINCIDENCIA = 0.15;

function numeroaleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function ponerdigito(elemento, numero) {
  elemento.src = listadigitos[numero];
  elemento.alt = numero;
}

function generarhora() {
  if (Math.random() < PROBABILIDAD_COINCIDENCIA) {
    const repetida = numeroaleatorio(1, 6);
    horaaleatoria = repetida;
    decenaaleatoria = repetida;
    unidadaleatoria = repetida; 
  } else  {
    horaaleatoria = numeroaleatorio(1, 10); //supuestamente de 1 a 9
    const minutos = numeroaleatorio(0, 60); // a ver si es 0 a 59
    decenaaleatoria = Math.floor(minutos / 10);
    unidadaleatoria = minutos % 10;
  }
  return [horaaleatoria, decenaaleatoria, unidadaleatoria];
}

function contextoaudio() {
    if (!audio) {
        audio = new (window.AudioContext || window.webkitAudioContext)();)
    }
    if  (audio.state === "suspended") {
        audio.resume();
    }
    return audio;
}
function nota(frecuencia, inicio, duracion, tipo = "triangle", volumen = 0.2) {
  const ctx = contextoAudio();
  const osc = ctx.createOscillator();
  const ganancia = ctx.createGain();
  const t = ctx.currentTime + inicio;

  osc.type = tipo;
  osc.frequency.value = frecuencia;
  ganancia.gain.setValueAtTime(0.0001, t);
  ganancia.gain.exponentialRampToValueAtTime(volumen, t + 0.02);
  ganancia.gain.exponentialRampToValueAtTime(0.0001, t + duracion);

  osc.connect(ganancia);
  ganancia.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + duracion + 0.05);
}
function sonidoTic(posicion) {
  if (!sonido.checked) return;
  try {
    nota(300 + posicion * 120, 0, 0.06, "square", 0.05);
  } catch (e) {}
}