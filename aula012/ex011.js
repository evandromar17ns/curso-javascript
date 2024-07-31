var  idade = 18
console.log(`Você tem ${idade} anos de idade .`)

if(idade < 16){ console.log('Não Votante !')}
else if(idade < 18  || idade > 65){console.log('Seu voto é facultativo !')}
else if(idade >= 18  ){ console.log('Votante!')}
