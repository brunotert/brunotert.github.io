let tela;
let contexto;
let proximox = proximoy = 0;
let tamanhoCobraPadrao = 3;
let caminhoCobra = [];
let cobraX = cobraY = 10
let comidaX = comidaY = 15
let tamanhoCobra = tamanhoCobraPadrao;
let tamanhoTela = tamanhoCaminho = 20;
window.onload = function () {
    tela = document.getElementById("canvas");
    contexto = tela.getContext("2d");
    document.addEventListener("keydown", keyDownEvent);
    let fps = 7;

    setInterval(desenharJogo, 1000 / fps);

}
function keyDownEvent(event) {
    switch (event.keyCode) {
        case 37:
            proximox = -1;
            proximoy = 0;

            break;
        case 38:
            proximox = 0;
            proximoy = -1;
            break;
        case 39:
            proximox = 1;
            proximoy = 0;
            break;
        case 40:
            proximox = 0;
            proximoy = 1;
            break;
    }
}


function desenharJogo() {
    cobraY = proximoy + cobraY;
    cobraX = proximox + cobraX;
    if (cobraX < 0) {
        cobraX = tamanhoTela - 1;
    }
    if (cobraY < 0) {
        cobraY = tamanhoTela - 1;
    } 
    if (cobraX>tamanhoTela-1) {
        cobraX=0;
    }
    if (cobraY>tamanhoTela-1) {
        cobraY=0;
    }
    if (cobraX == comidaX && cobraY == comidaY) {
    tamanhoCobra++;
    comidaX=Math.floor(Math.random()*tamanhoTela)
    comidaY=Math.floor(Math.random()*tamanhoTela)
    }
    contexto.fillStyle = "#730b5e";
    contexto.fillRect(0, 0, tela.width, tela.height);
    contexto.fillStyle = "#28478a"
    for (let i = 0; i < caminhoCobra.length; i++) {
        contexto.fillRect(
            caminhoCobra[i].x * tamanhoCaminho,
            caminhoCobra[i].y * tamanhoCaminho,
            tamanhoCaminho,
            tamanhoCaminho
        );
        if (caminhoCobra[i].x == cobraX && caminhoCobra[i].y == cobraY) {
            tamanhoCobra = tamanhoCobraPadrao;
        }
    }
    contexto.fillStyle = "red"
    contexto.fillRect(
        comidaX * tamanhoCaminho,
        comidaY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho
    )
    caminhoCobra.push(
        {
            x: cobraX,
            y: cobraY
        }
    );
while (caminhoCobra.length>tamanhoCobra)
 {
    caminhoCobra.shift();
}




}