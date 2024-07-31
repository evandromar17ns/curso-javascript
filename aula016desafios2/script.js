function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltabu')

    if (num.value.length == 0) {
        window.alert('Por Favor , digite algum número')

    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        for (let c = 1; c <= 10; c += 1) {

            //CRIA a variável da tag option dentro do  JavaScript usando createElement()  --Elemento = PAI
            let item = document.createElement('option')

            item.text = `${n}X${c}= ${n * c}`

            //Elemento = FILHO - será movido para o final da lista 
            tab.appendChild(item)


        }

    }


}