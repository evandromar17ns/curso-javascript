let valores = [9,5,4,8,7,3]

valores.sort()
console.log(valores)
valores.push(40)
for (let posi in valores){
    console.log(`A posição ${posi} tem o valor ${valores[posi]} `)
}

//console.log(`Tem ${valores.length} índices`)

/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}*/

