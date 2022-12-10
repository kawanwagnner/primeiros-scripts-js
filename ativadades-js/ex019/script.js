const btn = document.querySelector('#send') 
btn.addEventListener('click', () => {
    let NumeroTabuada = document.querySelector('#numeroTabuada')
    const tabuada = document.querySelector('#container-tabuada')
    
    if (NumeroTabuada.value.length == 0) {
        alert('[ERRO]!! Digite um valor.')
    } else {
        let n = Number(NumeroTabuada.value)
        let c = 1
        tabuada.innerHTML = ''

        while(c <= 10) {
            let item = document.createElement('option')
            tabuada.appendChild(item) // Identificador de filiação da tag pai "tabuada".
            item.value = `tabuada${c}`
            item.text = `${n} x ${c} = ${n*c}`
            c++
        }
    }
})
