function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var titulo = document.getElementById('titulo')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 0 && hora < 12) {
        titulo.innerHTML = `Bom dia!`
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#5E9A0C'
    }
    else if (hora >= 12 && hora <=17) {
        titulo.innerHTML = `Boa tarde!`
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#8B441C'
    }
    else{
        titulo.innerHTML = `Boa noite!`
        img.src =  'fotonoite.png'
        document.body.style.backgroundColor = '#1E2824'
    }
}