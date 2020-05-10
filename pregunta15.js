let respuestaCorrecta = 2;
let array = document.querySelectorAll('#respuesta');
array.forEach((a, index) => {
    a.addEventListener('click', () => {
        console.log(a);
        console.log(index);
        if (index === respuestaCorrecta) {
            $('#correcta').modal('show')
        } else {
            $('#incorrecta').modal('show')
        }
    })
})