/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/
let diaUtil = function(a){
    switch (a){
        case 1:
            console.log('Domingo, dia não útil');
            break;
        
        case 2:
            console.log('Segunda-Feira, dia útil');
            break;

        case 3:
            console.log('Terça-Feira, dia útil');
            break;
        
        case 4:
            console.log('Quarta-Feira, dia útil');
            break;
        
        case 5:
            console.log('Quinta-Feira, dia útil');
            break;
        
        case 6:
            console.log('Sexta-Feira, dia útil');
            break;
        
        case 7:
            console.log('Sábado, dia não útil');
            break;
        
        default:
            console.log('Dia Inválido');
            break;     
    }
    return ' '
}
console.log(diaUtil(5))