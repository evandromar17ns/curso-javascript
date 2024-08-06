//RECURSIVIDADE

function fatorial(n){
    if(n == 1){
        return 1
    }else{ 
        return n * fatorial(n-1)}
 }
 console.log(fatorial(11))


 /* O fatorial de  um número  é ele vezes o fatorial de um número menor 
 5! = 5 x 4!

 n! = n x (n-1)

  ---------------------//------------------------

 Diferente de 1 , por que 1x1=1
 1! = 1

 
 
 */