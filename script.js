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
]