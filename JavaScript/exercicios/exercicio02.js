/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/
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