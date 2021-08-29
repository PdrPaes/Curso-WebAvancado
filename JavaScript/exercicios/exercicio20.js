/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/
let cedulas = function(a){
    n100 = Math.floor(a / 100)
            resto100 = a % 100
    n50 = Math.floor(resto100 / 50)
            resto50 = resto100 % 50
    n10 = Math.floor(resto50 / 10)
            resto10 = resto50 % 10
    n5 = Math.floor(resto10 / 5)
            resto5 = resto10 % 5
    n1 = Math.floor(resto5 / 1)
            resto1 = resto5 % 1
    
    return 'O valor ' + a + ' corresponde a ' +n100 +' cédulas de R$100, '+ n50 + ' cédulas de R$50, '+ n10 +' cédulas de R$10, '+n5+' cédulas de R$5, '+n1+' cédulas de R$1'        
}
console.log(cedulas(166))  