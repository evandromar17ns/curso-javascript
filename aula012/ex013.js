/*Para o javascript os dias da semana se comportam assim :
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta 
6 = sábado
*/

var data = new Date()
var dias = data.getDay()

switch (dias) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda - Feira')
        break
    case 2:
        console.log('Terça - Feira')
        break
    case 3:
        console.log('Quarta - Feira')
        break
    case 4:
        console.log('Quinta - Feira')
        break
    case 5:
        console.log('Sexta - Feira')
        break
    case 6 : 
    console.log('Sábado')
    break


}