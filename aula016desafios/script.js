function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    //-SE-  a caixa de inicio a de fim e de passos estiverem vazias terá um alerta de [ERRO]//
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        res.innerHTML = `Impossível contar, preencha todos os campos ! `
        //  window.alert('[ERRO] Faltam dados!')
    }



    //-SE NÃO- terá as seguintes condições: 
    else {
        res.innerHTML = 'Contando... <br><br>'

        var ini2 = Number(inicio.value)
        var fim2 = Number(fim.value)
        var passo2 = Number(passo.value)
        
        if(passo2 <= 0){
            window.alert('Passo inválido ! Considerando PASSO valendo  1')
            passo2 = 1
        }


        //SE o valor dentro de ínicio for menor que o valor dentro de fim , as condições dentro de -FOR- serão executadas     
        if (ini2 < fim2) {


            //Para o valor dentro de ínicio , ENQUANTO ele for menor ou igual ao fim , receberá o valor dentro de ínicio somando com o valor dentro de passos até chegar ao valor dentro de fim
            for (let calc = ini2; calc <= fim2; calc += passo2) {
                res.innerHTML += `${calc} \u{1f449}  `
            }

            //SE NÃO - No caso, se dentro de ínicio for maior que o valor dentro de fim  
        } else {


            //Para o valor dentro de ínicio , ENQUANTO ele for MAIOR  ou igual ao fim , receberá o valor dentro de ínicio DIMINUINDO  com o valor dentro de passos até chegar ao valor dentro de fim
            for (let calc = ini2; calc >= fim2; calc -= passo2) {
                res.innerHTML += `${calc} \u{1f449}`
            }
        }

        res.innerHTML += `\u{1f3c1}`


    }


}











