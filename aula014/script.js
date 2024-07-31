function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var iano = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if (iano.value.length == 0 || Number(iano.value) > ano) {
        window.alert('[ERRO]  Verifique os dados e tente novamente !')

    }

    else {
        var isex = document.getElementsByName('sexo')
        var idade = ano - Number(iano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (isex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
                res.innerHTML = `<p>Detectamos um menino com ${idade} anos</p> `

            } else if (idade < 21) {
                img.setAttribute('src', 'ojovem.png')
                res.innerHTML = `<p>Detectamos um jovem com ${idade} anos</p> `
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto.png')
                res.innerHTML = `<p>Detectamos um adulto com ${idade} anos</p> `
            } else {
                img.setAttribute('src', 'idoso.png')
                res.innerHTML = `<p>Detectamos um senhor com ${idade} anos</p> `
            }



        } else if (isex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) { img.setAttribute('src', 'menina.png')
                 res.innerHTML = `<p>Detectamos uma menina com ${idade} anos</p> `
             }
            else if (idade < 21) {
                img.setAttribute('src', 'ajovem.png')
                 res.innerHTML = `<p>Detectamos uma jovem com ${idade} anos</p> `
            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.png')
                 res.innerHTML = `<p>Detectamos uma moça adulta com ${idade} anos</p> `
            } else {
                img.setAttribute('src', 'idosa.png')
                 res.innerHTML = `<p>Detectamos uma senhora com ${idade} anos</p> `
            }


        }

        res.style.textAlign = 'center'

        res.appendChild(img)




    }











}