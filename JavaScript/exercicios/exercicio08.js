/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/

let jogo = "10, 20, 20, 8, 25, 3, 0, 30, 1"
let classificacao = function (jogo){
    let i = 0
    let pior = 0
    let recordes = 0
    let pontos = jogo.split(",")
    let maisPontos = pontos[0]
    let menosPontos = pontos[0]
        for(i = 0; i < pontos.length; i++){
            if(Number(pontos[i]) > maisPontos){
                maisPontos = pontos[i]
                recordes++
            } else if(Number(pontos[i]) < menosPontos) {
                menosPontos = pontos[i]
                pior = i + 1
            }
        } 
    return 'O pior jogo de Pedro foi o ' + pior + 'º. E ele quebrou seus Recordes ' + recordes + ' vezes!'
}

console.log(classificacao(jogo))