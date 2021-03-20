function tratarErroELancar(erro) {
    //throw new Error('Mensagem do suporte...')
    //throw 10
    //throw true
    //trow 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
    console.log(obj.name.toUpperCase()+'!!!')
    }catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
//const obj = { name: 'Roberto'} // correção
imprimirNomeGritado(obj)