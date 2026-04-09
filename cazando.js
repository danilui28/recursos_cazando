let canvas = document.getElementById("juego");
let ctx = canvas.getContext("2d");
let btnArriba = document.getElementById("btnArriba");
let btnAbajo = document.getElementById("btnAbajo");
let btnDerecha = document.getElementById("btnDerecha");
let btnIzquierda = document.getElementById("btnIzquierda");
const VELOCIDAD = 15;
let gatoX = 0;
let gatoY = 0;
const anchoGato = 50;
const altoGato = 50;

let ratonX = 0;
let ratonY = 0;
const anchoRaton = 30;
const altoRaton = 30;

function graficar(x, y, alto, ancho, color){
    ctx.fillStyle = color
    ctx.fillRect(x,y,ancho,alto)
}

function graficarGato(){
    graficar(gatoX,gatoY,anchoGato,altoGato,"black")
}

function graficarRaton(){
    graficar(ratonX,ratonY,anchoRaton,altoRaton,"yellow")
}

function iniciarJuego(){
    gatoX = (canvas.width / 2) - (anchoGato / 2);
    gatoY = (canvas.height / 2) - (altoGato / 2);

    graficarGato()
    graficarRaton()
}

function mover(direccion) {
if (direccion === "arriba") gatoY -= VELOCIDAD;
if (direccion === "abajo") gatoY += VELOCIDAD;
if (direccion === "izquierda") gatoX -= VELOCIDAD;
if (direccion === "derecha") gatoX += VELOCIDAD;
graficarGato()
}

document.getElementById("btnArriba").onclick = () => mover("arriba");
document.getElementById("btnAbajo").onclick = () => mover("abajo");
document.getElementById("btnIzquierda").onclick = () => mover("izquierda");
document.getElementById("btnDerecha").onclick = () => mover("derecha");


iniciarJuego();