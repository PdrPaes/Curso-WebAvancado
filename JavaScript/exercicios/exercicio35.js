/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.*/
let strings = (a,b) =>{
    var stringA = a
    var stringB = b
    var vetorA = stringA.split('')
    var vetorB = stringB.split('')
    var vetorC = []
        for (let i = 0; i < vetorA.length; i++) {
            vetorC[i] = vetorA[i] 
        }
        for (let j = 0; j < vetorB.length; j++) {
            vetorC[(j+vetorA.length)] = vetorB[j]
        }
    return vetorC  
}

console.log(strings('12345','6789'))