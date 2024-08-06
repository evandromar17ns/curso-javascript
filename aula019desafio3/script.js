




let numero = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
let resu = document.querySelector('div#res')
let valores = []

function onumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function alista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }


}

function adicionar() {
    /*O valor dentro de número vai ser analisado para ver se é um número , e não vai adicionar se o número não estiver em lista*/


    if (onumero(numero.value) && !alista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resu.innerHTML = ''

    } else {
        window.alert(`Valor inválido ou já encontrado na lista `)
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {

        let total = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total

        resu.innerHTML = ''
        resu.innerHTML += `Temos ao todo ${total} números cadastrados `
        resu.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resu.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resu.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }

}










