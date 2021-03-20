/* 06) Elabore duas funções que recebem três parâmetros: capital inicial=a, taxa de juros=b e tempo de aplicação=c. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */
let jurosSimples = function(a, b, c){
    jurSimp =  a + (a * b/100 * c) 
    return 'O Valor dos Juros Simples é: R$'+jurSimp.toFixed(2).replace('.',',')
}

let jurosCompostos = function(a, b, c){
    jurosComp = ((a*(1+b/100)**c) - a)
    return 'O Valor dos Juros Compostos é: R$'+jurosComp.toFixed(2).replace('.',',')
}

let montante = function(a, b, c){
    mont =  (a*(1+b/100)**c)
    return 'O Valor da Montante é: R$'+mont.toFixed(2).replace('.',',')
} // Na dúvida, fiz uma exclusiva para a montante, cabeçalho duvidoso

console.log(jurosSimples(100.00, 15, 12))
console.log(jurosCompostos(100.00, 15, 12))
console.log(montante(100.00, 15, 12))