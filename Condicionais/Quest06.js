/*6. A fórmula do Índice de Massa Corpórea é IMC = peso / ( altura )2 
Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
 
IMC em adultos Condição 
Abaixo de 18,5 Abaixo do peso 
Entre 18,5 e 25 Peso normal 
Entre 25 e 30 Acima do peso 
Acima de 30 obeso*/

let peso = Number(prompt('Digite seu peso: '));
let altura = Number(prompt('Digite sua altura: '));

let imc = peso / (altura**2);

if (imc < 18.5){
  alert(`Seu IMC é ${imc.toFixed(2)}, você esta abaixo do peso ideal.`)
}
else if(imc >= 18.5 && imc < 25){
  alert(`Seu IMC é ${imc.toFixed(2)}, você esta com peso ideal, parabéns.`)
}
else if (imc >= 25 && imc < 30) {
  alert(`Seu IMC é ${imc.toFixed(2)}, você esta acima do peso ideal.`)
}
else {
  alert(`Seu IMC é ${imc.toFixed(2)}, você esta Obeso, cuidado.`)
}
