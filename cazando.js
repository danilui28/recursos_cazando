let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const VELOCIDAD = 15;
let gatoX = 0;
let gatoY = 0;
const anchoGato = 50;
const altoGato = 50;

let ComidaX = 0;
let ComidaY = 0;
const anchoComida = 30;
const altoComida = 30;

function graficarRectangulo(x, y, alto, ancho, color){
    ctx.fillStyle = color
    ctx.fillRect(x,y,ancho,alto)
}

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,anchoGato,altoGato,"black")
}

function graficarComida(){
    graficarRectangulo(ComidaX,ComidaY,anchoComida,altoComida,"yellow")
}

function iniciarJuego(){
    gatoX = (canvas.width / 2) - (anchoGato / 2);
    gatoY = (canvas.height / 2) - (altoGato / 2);

    ComidaX = canvas.width - anchoComida;
    comidaY = canvas.height - altoComida;

    graficarGato()
    graficarComida()
}

function mover(direccion) {
if (direccion === "arriba") gatoY -= VELOCIDAD;
if (direccion === "abajo") gatoY += VELOCIDAD;
if (direccion === "izquierda") gatoX -= VELOCIDAD;
if (direccion === "derecha") gatoX += VELOCIDAD;
limpiarCanva()
graficarGato()
graficarComida()
}

document.getElementById("btnArriba").onclick = () => mover("arriba");
document.getElementById("btnAbajo").onclick = () => mover("abajo");
document.getElementById("btnIzquierda").onclick = () => mover("izquierda");
document.getElementById("btnDerecha").onclick = () => mover("derecha");

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function detectarColision(){

}

iniciarJuego();