/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/
let bissexto = function(ano){
    divisao4 = Math.floor(ano / 4)
    resto4 = (ano - (divisao4 * 4))

    divisao100 = Math.floor(ano /100)
    resto100 = (ano - (divisao100 * 100))

    divisao400 = Math.floor(ano / 400)
    resto400 = (ano - (divisao400 * 400))

        if ( resto4 == 0 && resto100 != 0 || resto400 == 0){
            return 'true'
        }else {
            return 'false'
        }
}
console.log(bissexto(400))
console.log(bissexto(500))
console.log(bissexto(504))
console.log(bissexto(507))