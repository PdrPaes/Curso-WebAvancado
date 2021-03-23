/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/
let vetorMaiorMenor = () =>{
    let menorNumero = vetor[0]
    let maiorNumero = vetor[0]
    for (i=0; i<vetor.length; i++){
        if(vetor[i]>maiorNumero){
            maiorNumero = vetor[i]
        } else if(vetor[i]<menorNumero){
            menorNumero = vetor[i]
        }
    }
    return 'O maior numero do Vetor é :'+maiorNumero+' e o menor é:'+menorNumero
}
var vetor = [1,2,3,4,5,6,7,8,9,12,14,15,16]
console.log(vetorMaiorMenor(vetor))