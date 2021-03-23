/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/
let mediaAritmetica = (vetor) =>{
    soma = 0
    for (i=0; i<vetor.length; i++){
        soma = vetor[i] + soma
    }
    media = soma/vetor.length
    return 'A média aritmética destes valores é '+media
}
var vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mediaAritmetica(vetor))