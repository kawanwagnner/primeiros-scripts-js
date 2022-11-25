const tempo = document.querySelectorAll('.tempo')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const clock = setInterval(function time() {
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let s = date.getSeconds()

    if (hr < 10) {hr = '0' + hr}
    if (min < 10) {min = '0' + min}
    if (s < 10) {s = '0' + s}

    tempo[0].innerHTML = hr
    tempo[1].innerHTML = min
    tempo[2].innerHTML = s
})
