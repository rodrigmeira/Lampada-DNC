var lamp = window.document.getElementById('lampada')

function estaQuebrada() {
    return lamp.src.indexOf('broken') > -1
}

function Ligar() {
    if (!estaQuebrada()){
    lamp.src = './assets/SVG/ON.svg'}
}

function Desligar() {
    if(!estaQuebrada()){
    lamp.src = './assets/SVG/OFF.svg'}
}

lamp.addEventListener ('click', Quebrar)
function Quebrar() {
    lamp.src = './assets/SVG/broken.svg'
}