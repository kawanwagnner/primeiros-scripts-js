function carregar() {
    var agr = new Date()
    var hora = agr.getHours()
    var msg = document.querySelector('#msg')
    var imagem = document.querySelector('#imagem')

    if (hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas, Bom Dia!`
        imagem.scr = 'img/manha.webp'
        document.body.style.background = '#dba774'
    } else if (hora <= 18) {
        msg.innerHTML = `Agora são ${hora} horas, Boa Tarde!`
        imagem.src = 'img/tarde.jpg'
        document.body.style.background = '#a99e9f'
    } else {
        msg.innerHTML = `Agora são ${hora} horas, Boa Noite!`
        imagem.src = 'img/noite.jpg'
        document.body.style.background = '#666'
    }
}