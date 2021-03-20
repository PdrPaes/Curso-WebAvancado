/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
let divResto = function(a, b){
    resposta = Math.floor(a / b)
    resto = a - (resposta * b)
    return 'O resultado da divisão é:' + resposta + ' E o Resto da mesma é:' + resto
}
console.log(divResto(294, 7))