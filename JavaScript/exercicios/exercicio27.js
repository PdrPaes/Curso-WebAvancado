/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/
let crescimento = (a, b, c, d) => {
    if(a>b){
        criancaMaior = a
        criancaMenor = b
        taxaCriancaMaior = c
        taxaCriancaMenor = d
    } else {
        criancaMaior = b
        criancaMenor = a
        taxaCriancaMaior = d
        taxaCriancaMenor = c
    }
    for(tempo = 0; tempo<18; tempo++){
        alturaLongoPrazoMaior = criancaMaior + (taxaCriancaMaior*tempo)
        alturaLongoPrazoMenor = criancaMenor + (taxaCriancaMenor*tempo)
        if(alturaLongoPrazoMenor <= alturaLongoPrazoMaior){
            idade = tempo
        }
    }
    if(idade<17){
        resposta = 'A criança originalmente mais baixa ultrapassará a altura da outra com '+idade+' anos.'
    } else {
        resposta = 'A criança mais alta sempre vai ser mais alta.'
    }
    return resposta
}
console.log(crescimento(100, 90, 5, 3))