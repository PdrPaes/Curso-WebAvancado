//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.
let calculadora1 = function(a, b){
    soma = a + b
    console.log(soma)
     
     subtracao = a - b
     console.log(subtracao)

     produto = a * b
     console.log(produto)

     divisao = a / b
     console.log(divisao)
     
}
let calculadora2 = function(a, b){
    soma = a + b
    subtracao = a - b
    produto = a * b
    divisao = a / b
    console.log(soma, subtracao, produto, divisao)
}
calculadora1(3, 4)
calculadora2(3, 4)