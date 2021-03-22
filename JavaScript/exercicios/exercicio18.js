/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/
let extenso = function(a){
    switch (a){
        case 1:
            console.log('Um!');
            break;
        
        case 2:
            console.log('Dois!');
            break;

        case 3:
            console.log('Três!');
            break;
        
        case 4:
            console.log('Quatro!');
            break;

        case 5:
            console.log('Cinco!');
            break;
        
        case 6:
            console.log('Seis!');
            break;

        case 7:
            console.log('Sete!');
            break;

        case 8:
            console.log('Oito!');
            break;

        case 9:
            console.log('Nove!');
            break;

        case 10:
            console.log('Dez!');
            break;
        
        case 0:
            console.log('Zero!')
            break;

        default:
            console.log('Valor Fora da Amostra!')
            break;
    }
    return ' '
}
console.log(extenso(1))
console.log(extenso(2))
console.log(extenso(10))
console.log(extenso(11))