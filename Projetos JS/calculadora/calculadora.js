//inserir números e operadores na tela da calculadora
function insert(num) {
  var numero = document.getElementById('resultado').innerHTML //atribui à variável 'numero' o que foi digitado na tela
  document.getElementById('resultado').innerHTML = numero + num //o novo número ou operador é adicionado ao valor atual na tela da calculadora. 
}

//atribuir ao conteúdo do elemento HTML com o ID "resultado", tela da calculadora, uma string vazia '' (p/ limpar a tela)
function clean() {
  document.getElementById('resultado').innerHTML = '' 
}

//excluir o último caractere do conteúdo exibido na tela da calculadora
function back() {
  var resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
  //método substring nativo → .substring(índice do primeiro caractere da subcadeia, índice do último caractere da subcadeia (opcional).)
}

function calcular() {
  var resultado = document.getElementById('resultado').innerHTML
  // o método nativo eval faz os calculos matemáticos
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
  } else {
    document.getElementById('resultado') = 'ERRO'
  }
}