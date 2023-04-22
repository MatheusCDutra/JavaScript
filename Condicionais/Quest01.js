//1. Leia dois números e informe o maior deles.
let num1 = Number(prompt('Digite um número: '))
let num2 = Number(prompt('Digite outro número: '))

if (num1 > num2) {
  console.log(`O número ${num1} foi o maior número digitado.`)
} 
else if (num1 < num2) {
  console.log(`O número ${num2} foi o maior número digitado.`)
}
else {
  console.log(`O número ${num1} foi digitado duas vezes.`)
}
