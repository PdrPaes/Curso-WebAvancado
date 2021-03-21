/*10) Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true
ou false.*/
let div3 = function(a){
    divisao = Math.floor(a / 3)
    resto = (a - (divisao * 3))
    if(resto == 0){
        return 'true'
    } else if ( resto !=0 ){
        return 'false'
    }
}
console.log(div3(6))