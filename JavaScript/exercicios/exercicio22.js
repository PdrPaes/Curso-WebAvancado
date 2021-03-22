/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/
anuidade = (a,b) => {
    if (a != 12){
        a = a % 12
        c = a - 1
    } else {
        c = a - 1
    } 
    b = (b*(1+(5/100))**c)
    return b
}
console.log(anuidade(5,1000).toFixed(2))