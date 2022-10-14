const voltaje = document.getElementById("voltaje")
const corriente = document.getElementById("corriente")
const resistencia = document.getElementById("resistencia")
const btnVoltaje = document.getElementById('btnVoltaje')
const btnCorriente = document.getElementById('btnCorriente')
const btnResistencia = document.getElementById('btnResistencia')

btnVoltaje.addEventListener('click', calculaVoltaje)
btnCorriente.addEventListener('click', calculaCorrirnte)
btnResistencia.addEventListener('click', claculaResistencia)

function calculaVoltaje(){    
    let corrienteIntro = corriente.value
    let resistenciaIntro = resistencia.value
    voltaje.value = (corrienteIntro * resistenciaIntro)
    alert('EL voltaje es: ' + voltaje.value + ' volts')
}

function calculaCorrirnte(){
    let voltajeIntro = voltaje.value
    let resistenciaIntro = resistencia.value
    corriente.value = (voltajeIntro / resistenciaIntro)
    alert('La corriente  es: ' + corriente.value + ' ampers')
}

function claculaResistencia(){
    let voltajeIntro = voltaje.value
    let corrienenciaIntro = corriente.value
    resistencia.value = (voltajeIntro / corrienenciaIntro)
    alert('La resistencia es: ' + resistencia.value + ' ohms')
}