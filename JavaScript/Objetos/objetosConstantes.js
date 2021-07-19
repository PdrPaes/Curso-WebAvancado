// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // .freeze trava alterações no objeto

pessoa.nome = 'Maria'
console.log(pessoa)

// Criar objeto para nunca ser variado
const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)