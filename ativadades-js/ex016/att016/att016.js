var btn = document.querySelector('#verificar')
btn.addEventListener('click', () => {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector('#nasc')
    var res = document.querySelector('#res')
    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert('[ERRO!] Preencha os dados corretamente.')
    } else {
        var sex = document.getElementsByTagName('radiosex').checked = true;
        var idade = ano - Number(nasc.value)
        let genero = 'Homem'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0], genero = 'Homem') {
            if (idade >= 0 && idade < 12) {
                //Criança
                img.getAttribute('src', 'img-att016/masc-crianca.jpg')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
                res.appendChild(img)
            } else if (idade < 21) {
                //Jovem
                img.getAttribute('src', 'img-att016/jovem-m.jpg')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
                res.appendChild(img)
            } else if (idade < 50) {
                //Adulto
                img.getAttribute('src', 'img-att016/jovem-m.jpg')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
                res.appendChild(img)
            } else {
                //idoso
                img.getAttribute('src', 'img-att016/idoso.jpg')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
                res.appendChild(img)
            }
        } else if (sex[1], genero = 'Mulher') {
            if (idade >= 0 && idade < 12) {
                //Criança
                img.getAttribute('src', 'img-att016/fem-crianca.jpg')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
                res.appendChild(img)
            } else if (idade < 21) {
                //Jovem
                img.getAttribute('src', 'img-att016/jovem-f.jpg')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
                res.appendChild(img)
            } else if (idade < 50) {
                //Adulta
                img.getAttribute('src', 'img-att016/jovem-f.jpg')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
                res.appendChild(img)
            } else {
                //idosa
                img.getAttribute('src', 'img-att016/idosa.jpg')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
                res.appendChild(img)
            }
        }
    }
})


