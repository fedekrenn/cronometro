// Obtengo los botones del DOM
const botonInicio = document.getElementById("inicio")
const botonParar = document.getElementById("stop")
const botonReinicio = document.getElementById("delete")

// Evento para iniciar el contador
botonInicio.addEventListener("click", iniciar)


console.log('Salida para la cosola');


// Se inicializan variables
let cronometro;
let segundos = 0;
let minutos = 0;
let imprimirSegundos;
let imprimirMinutos;


// Función para iniciar el cronómetro
function iniciar(){

    // Despliegue de la actualización, con intervalo de 1 segundo
    cronometro = setInterval(actualizarReloj, 1000)
    
    // escucha de botón parar para lanzar la función que rompe el intervalo
    botonParar.addEventListener("click", parar)
    botonReinicio.addEventListener("click", reseteo)

    function parar(){
        clearInterval(cronometro)

        botonInicio.disabled = false;
        botonInicio.classList.toggle("disabled")
    }

    function reseteo(){

        parar()

        document.getElementById("minutos").innerText = "00";
        document.getElementById("segundos").innerText = "00";
        segundos = 0;
        minutos = 0;

        botonInicio.disabled = false;
        botonInicio.classList.remove("disabled")
    }

    botonInicio.disabled = true;
    botonInicio.classList.toggle("disabled")
}



function actualizarReloj() {
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



