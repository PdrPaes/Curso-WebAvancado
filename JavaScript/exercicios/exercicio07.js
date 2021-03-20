/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: x² - 5x + 12 os3 valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/
let bhaskara = function(a, b, c){
    vetor = [0,0]
    delta = b**2 - 4 * a * c
    if (delta <0){
        return 'Delta é negativo.'
    } else {
    vetor[0] = (-b + Math.sqrt(delta))/2*a
    vetor[1] = (-b - Math.sqrt(delta))/2*a
    }
        return 'As raízes dessa equação são ' + vetor[0] + ' e ' + vetor[1]
}
console.log(bhaskara(1,5,4))