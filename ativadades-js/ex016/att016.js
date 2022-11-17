var btn = document.querySelector('#verificar')
btn.addEventListener('click', () => {
    var masc = document.querySelector('#masc')
    var fem = document.querySelector('femi')
    var nasc = Number(document.querySelector('#nasc'))
    var res = document.querySelector('#res')

    if (nasc == masc <= 2004) 
    res.innerHTML = "Você é um Jovem"
    res.src = ''

})


