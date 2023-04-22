//3.Faça um algoritmo que leia um número e informe se ele é par ou ímpar

let num = Number(prompt('Digite um número: '))

if (num % 2 == 0){
  console.log(`${num} é um número par`)
}
else {
  console.log(`${num} é um número impar`)
}