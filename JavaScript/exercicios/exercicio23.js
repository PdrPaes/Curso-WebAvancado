/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/
media = (a, b, c, d) => {
        nota1 = b
        nota2 = c
        nota3 = d
        if (b > c && b > d){
            maiorNota = b
            b = 0
        } else if (c > b && c > d){
            maiorNota = c
            c = 0
        } else if ( d > b && d > c){
            maiorNota = d
            d = 0
        } 
        mediaPonderada = ((b*3)+(c*3)+(d*3)+(maiorNota*4))/10
        if(mediaPonderada >= 5){
            resultado = 'Aprovado.'
        } else {
            resultado = 'Reprovado.'
        }
    return 'O Aluno de código '+ a +' tirou como nota na Primeira Prova: '+ nota1 +' Pontos. Na Segunda: '+nota2+' Pontos. Na Terceira: '+nota3+' Pontos e obteve média '+mediaPonderada+ 'e por fim foi '+ resultado
}
console.log(media(102,2,3,4))
console.log(media(103,9.2,6,8.5))
console.log(media(105,6,6,6))
console.log(media(104,5,3,8))