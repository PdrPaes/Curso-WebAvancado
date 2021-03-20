let comparacao = function(a, b, c) {
    if (a == b == c) {
        return 'Triângulo Equilátero'
    } else if (a == b || a == c || b == c) {
        return 'Triângulo Isósceles'
    } else {
        return 'Triângulo Escaleno'
    }
}
console.log(comparacao(5,5,5))
console.log(comparacao(1,2,3))
console.log(comparacao(5,5,4))