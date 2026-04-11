let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const VELOCIDAD = 15;
let gatoX = 0;
let gatoY = 0;
const anchoGato = 50;
const altoGato = 50;
const LIMITE_X = canvas.width - anchoGato;
const LIMITE_Y = canvas.height - altoGato;

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
    
    ComidaX = canvas.height - anchoComida;
    ComidaY = canvas.width - altoComida;

    graficarGato()
    graficarComida()
}

document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();

function moverIzquierda(){
    if (gatoX > 0) gatoX -= 10;
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
}

function moverDerecha(){
    if (gatoX < LIMITE_X) gatoX += 10;
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
}

function moverArriba(){
    if (gatoY > 0) gatoY -= 10;
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
}

function moverAbajo(){
    if (gatoY < LIMITE_Y) gatoY += 10;
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}


function detectarColision(){
        if (
        gatoX < ComidaX + anchoComida &&
        gatoX + anchoGato > ComidaX &&
        gatoY < ComidaY + altoComida &&
        gatoY + altoGato > ComidaY
    ) {
        ComidaX = generarAleatorio(0, canvas.width - anchoComida);
        ComidaY = generarAleatorio(0, canvas.height - altoComida);

        limpiarCanva();
        graficarGato();
        graficarComida();
    }
}