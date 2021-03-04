// Função sem Retorno em JavaScript
function imprimirSoma(a, b){
console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 13, 4, 5)
imprimirSoma()

// Função com Retorno em JS
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())