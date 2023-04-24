//5. Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação.

let num = Number(prompt('Digite um númro: '));

if (num % 2 == 0) {
  console.log(`${num + 5}`);
}
else {
  console.log(`${num + 8}`)
}
