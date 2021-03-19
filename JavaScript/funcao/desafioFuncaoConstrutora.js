/*  class Pessoa {
*      constructor(nome) {
*          this.nome = nome
*       }
*   
*      falar() {
*          console.log(`Meu nome é ${this.nome}`)
*      }
*   }
*   const p1 = new Pessoa('João')
*   p1.falar()
*/

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
}
const p1 = new Pessoa('Pedro','Paes')
p1.falar()