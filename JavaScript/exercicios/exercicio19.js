/*19) O cardápio de uma lanchonete é o seguinte:
Código     Descrição do Produto      Preço
 100         Cachorro Quente         R$ 3,00
 200       Hambúrguer Simples        R$ 4,00
 300          Cheeseburguer          R$ 5,50
 400              Bauru              R$ 7,50
 500          Refrigerante           R$ 3,50
 600              Suco               R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/
let pedido = function(a, b){
    switch(a){
        case 100:
            a = 3 * b;
            break;
        
        case 200:
            a = 4 * b;
            break;

        case 300:
            a = 5.5 * b;
            break;

        case 400:
            a = 7.5 * b;
            break;

        case 500:
            a = 3.5 * b;
            break;

        case 600:
            a = 2.8 * b;
            break;

        default:
            a = 'Código Inválido!'
    }
    return a
}
console.log(pedido(400, 2))
console.log(pedido(700, 1))
console.log(pedido(300, 10))