//7. Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. 
// Verde - 10%
// Amarelo - 20%
// Azul - 30 %
// Vermelho 40% 


let preco = Number(prompt('Digite o preço do produto: '))
let cor = prompt('Digite a acor da etiqueta do produto: ')
switch (cor) {
  case 'Verde':
    preco -= (preco * 0.10);
    alert(`Preço final com desconto: R$${preco.toFixed(2)}`)
    break;
  case 'Amarelo':
    preco -= (preco * 0,20);
    alert(`Preço final com desconto: R$${preco.toFixed(2)}`)
    break;
  case 'Azul':
    preco -= (preco * 0.30);
    alert(`Preço final com desconto: R$${preco.toFixed(2)}`)
    break;
  case 'Vermelho':
    preco -= (preco * 0.40)
    alert(`Preço final com desconto: R$${preco.toFixed(2)}`)
    break;
  default:
    alert('Opção inválida, tente novamente.');
    
}


