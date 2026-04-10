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

document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();

function moverIzquierda(){
    gatoX -= 10;
    limpiarCanva()
    graficarGato()
    graficarComida()
}

function moverDerecha(){
    gatoX += 10;
    limpiarCanva()
    graficarGato()
    graficarComida()
}

function moverArriba(){
    gatoY -= 10;
    limpiarCanva()
    graficarGato()
    graficarComida()
}

function moverAbajo(){
    gatoY += 10;
    limpiarCanva()
    graficarGato()
    graficarComida()
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}


iniciarJuego();