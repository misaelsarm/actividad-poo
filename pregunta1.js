let respuestaCorrecta = 2;
let array = document.querySelectorAll('#respuesta');
let i;
let resultadoRespuestas = [];
array.forEach((a, index) => {
    a.addEventListener('click', () => {
        obtenerRespuesta(a, index)
    });
})

function obtenerRespuesta(respuesta, index) {
    let datos = {};
    if (index === respuestaCorrecta) {
        $('#correcta').modal('show')
        datos = {
            respuesta: respuesta,
            index: index,
            correcta: true
        }
    } else {
        $('#incorrecta').modal('show')
        datos = {
            respuesta: respuesta,
            index: index,
            correcta: false
        }
    }
    resultadoRespuestas.push(datos);
    localStorage.setItem('Respuesta1', datos.index);
}
export {obtenerRespuesta, resultadoRespuestas}