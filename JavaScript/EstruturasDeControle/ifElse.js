const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}
imprimirResultado(10)
imprimirResultado(3)
imprimirResultado('Epa!') // cuidado! nota é um valor numérico, não uma string!