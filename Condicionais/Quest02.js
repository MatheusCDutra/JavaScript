//2. Escreva um algoritmo que leia três valores. A, B, C. E informe se a soma de A + B é maior que C.

let a = Number(prompt('Digite um número: '))
let b = Number(prompt('Digite um número: '))
let c = Number(prompt('Digite um número: '))

if (a + b > c) {
  console.log(`A soma de ${a} e ${b} resulta em um número maior que ${c}.`)
}
else if (a + b < c) {
  console.log(`A soma de ${a} e ${b} resulta em um número menor que ${c}.`)
}
else {
  console.log(`A soma de ${a} e ${b} resulta no mesmo valor de ${c}.`)
}