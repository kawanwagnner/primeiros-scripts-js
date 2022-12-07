const btn = document.querySelector('#send')

btn.addEventListener('click', () => {
    let valueStart = document.querySelector('#start')
    let valueEnd = document.querySelector('#end')
    let valuePassos = document.querySelector('#passos')
    let result = document.querySelector('#res')

    let start = Number(valueStart.value)
    let end = Number(valueEnd.value)
    let passos = Number(valuePassos.value)

    for (start = start; start <= end; start + passos) {
        result.innerHTML = '👉🏿' + passos
    }
})