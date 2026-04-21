let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let puntaje = 0;
let tiempo = 15;
let intervalo;

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
    graficarRectangulo(gatoX,gatoY,anchoGato,altoGato,"blue")
}

function graficarComida(){
    graficarRectangulo(ComidaX,ComidaY,anchoComida,altoComida,"red")
}

function iniciarJuego(){
    gatoX = (canvas.width / 2) - (anchoGato / 2);
    gatoY = (canvas.height / 2) - (altoGato / 2);
    
    ComidaX = canvas.height - anchoComida;
    ComidaY = canvas.width - altoComida;

    graficarGato();
    graficarComida();
    intervalo = setInterval(restarTiempo, 1000);
}

document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();
document.getElementById("btnReiniciar").onclick = () => reiniciar();

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
        sistemaPuntos();

        ComidaX = generarAleatorio(0, canvas.width - anchoComida);
        ComidaY = generarAleatorio(0, canvas.height - altoComida);

        tiempo = 15

        limpiarCanva();
        graficarGato();
        graficarComida();
        
        
    }
}

function sistemaPuntos(){
        puntaje = puntaje +1;
        mostrarEnSpan("puntos",puntaje);

        if (puntaje === 6){
        alert("Ganaste");
        clearInterval(intervalo);
    }

}

function restarTiempo(){
    if (tiempo > 0){
        tiempo=tiempo-1;
        mostrarEnSpan("tiempo", tiempo);
    } else {
        alert("Juego Terminado");
        clearInterval(intervalo);
    }
}

function reiniciar(){
    clearInterval(intervalo);
    intervalo = setInterval(restarTiempo, 1000);

    puntaje = 0;
    tiempo = 15;

    gatoX = (canvas.width / 2) - (anchoGato / 2);
    gatoY = (canvas.height / 2) - (altoGato / 2);

    ComidaX = generarAleatorio(0, canvas.width - anchoComida);
    ComidaY = generarAleatorio(0, canvas.height - altoComida);

    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);

    limpiarCanva();
    graficarGato();
    graficarComida();
}

