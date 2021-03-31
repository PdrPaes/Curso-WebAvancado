/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/
let vetorXparametro1 = (a, b) => {
    produto = []
    for (i=0; i<a.length; i++){
        produto[i] = a[i] * b
    }
    return 'Função 1 = '+ produto
}
var a = [1, 2, 3, 4, 5, 6, 7]
console.log(vetorXparametro1(a, 9))

let vetorXparametro2 = (c, d) => {
    produto = []
    for (i=0; i<c.length; i++){
        produto[i] = c[i] * d
    }
    if (d>5){
        return 'Função 2 = '+ produto
    } else {
        return 'Parâmetro menor que 5!'
    }  
}
var c = [1, 2, 3, 4, 5, 6, 7]
console.log(vetorXparametro2(c, 9))
console.log(vetorXparametro2(c, 4))