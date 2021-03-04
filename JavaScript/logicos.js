/*   e ---> Todos precisam ser verdadeiros para ser verdadeiro (Absoluto)
 * v e f -> f
 * v e v -> v
 * f e ? -> f
 * 
 *   ou ---> Se um for verdadeiro, resultado é verdadeiro (Parcial)
 * v ou ? -> v
 * f ou v -> v
 * f ou f -> f
 * 
 *   xor
 * v xor v -> f
 * v xor f -> v
 * f xor v -> v
 * f xor f -> f
 * 
 *    ! ---> Contraria a opção informada (Negação)
 * !v -> f
 * !f -> v
*/

function compras( trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))