/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/
let progressãoAritmética = (n, a1, r) => {
    soma = ((a1 + (a1+(n-1)*r))*n)/2
    return soma
}
console.log(progressãoAritmética(5, 3, 4))

let progressãoGeométrica = (n, a1, r) => {
    soma = (a1*(Math.pow(r, n)- 1))/(r - 1)
    return soma
}
console.log(progressãoGeométrica(5, 3, 4))