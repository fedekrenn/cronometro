let segundos = 0;
let minutos = 0;
let imprimirSegundos;
let imprimirMinutos;

function actualizarContador() {
    segundos++;

    if (segundos > 59) {
        segundos = 00;
        minutos++
    }
    imprimirMinutos = minutos;
    imprimirSegundos = segundos;

    if (segundos < 10) {
        imprimirSegundos = "0" + segundos;
    }

    if (minutos < 10) {
        imprimirMinutos = "0" + minutos;
    }

    document.getElementById("minutos").innerText = imprimirMinutos;
    document.getElementById("segundos").innerText = imprimirSegundos;

}



setInterval(actualizarContador, 1000)