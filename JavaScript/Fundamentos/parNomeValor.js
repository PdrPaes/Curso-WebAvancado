// par nome/valor
const saudacao ="Opa" // contexto léxico 1 (local no qual a variável é definida fisicamente no código)

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua XXXX',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente) 