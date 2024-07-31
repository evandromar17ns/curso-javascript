
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
   


    if (hora >= 0 && hora <= 12) {
        msg.innerHTML = `<p>Agora são ${hora}:${minutos}. </p>Bom dia Baiano levanta da rede`
        img.src = './img/fotomanha.png'
        document.body.style.background = '#55a9e5'
    

    }
    else if (hora > 12 && hora <= 18) {
        msg.innerHTML = `<p>Agora são ${hora}:${minutos}. </p>Boa tarde Baiano da cara de quenga.`
        img.src= './img/fototarde.png'
        document.body.style.background ='#dd7d38d6'


    }
    else {
        msg.innerHTML = `<p>Boa noite Baiano</p>Agora são ${hora}:${minutos}.`
        img.src = './img/fotonoite.png'
        document.body.style.background ='#042d7ece '
    }















}