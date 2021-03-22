/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/
let resposta = 0
let aumento = function(a, b){
    switch (a){
        case 'A':
            resposta = b + (b/10);
            break;
        
        case 'B':
            resposta = b + (b*15/100);
            break;

        case 'C':
            resposta = b + (b/5);
            break;

        default:
            console.log('Plano Inválido!')
            break;
    }
    return resposta
}
console.log(aumento('A',1000))
console.log(aumento('B',1000))
console.log(aumento('C',1000))
console.log(aumento('D',1000))