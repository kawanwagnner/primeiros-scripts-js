const btn = document.querySelector('#send')

btn.addEventListener('click', () => {
    let start = document.querySelector('#start')
    let end = document.querySelector('#end')
    let passos = document.querySelector('#passos')
    let result = document.querySelector('#res')

    if(start.value.length == 0 || end.value.length == 0) {
        alert('[ERRO!! número(s) inválidos válido]')
    } else {
        result.innerHTML = 'Contando:'
        let s = Number(start.value)
        let e = Number(end.value)
        let p = Number(passos.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (s < e) {
            //Contagem Crescente.
            for (let c = s; c <= e; c += p){
                result.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente.
            for (let c = s; c <= e; c -= p) {
                result.innerHTML += `${c} \u{1F449}`
            }
        }
        result.innerHTML += `🏁`
    }
})