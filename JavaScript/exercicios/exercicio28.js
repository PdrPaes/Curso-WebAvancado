/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/
let inteiro = (vetor) =>{
    let pares = impares = 0
    for(let i=0; i<vetor.length; i++){
        if(vetor[i]%2==0){
            pares++
        } else {
            impares++
        }
    }
    return 'Existem '+pares+' números pares e '+impares+' números ímpares'
}
var vetor = [1,2,3,4,5,6,7,8,9,12,14,15,16]
console.log(inteiro(vetor))
