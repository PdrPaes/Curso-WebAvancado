// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preço = 220

console.log(produto)

delete produto.preço
delete produto['Marca do produto']

console.log(produto)

const carro = {
    valor: 89000,
    proprietario:{
        nome: 'Pedro',
        idade: 25,
        endereco: {
            logradouro: 'Rua x',
            numero: 123
        }
    },    
    condutores: [{
        nome: "Junior",
        idade: 19
    },{
    nome: "Ana",
    idade: 20
    }],

    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Beco Treze'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
