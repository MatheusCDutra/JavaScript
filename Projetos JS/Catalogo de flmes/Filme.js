// Entrar no site da API OMDBa para obter a apiKey https://www.omdbapi.com/ 


const apiKey = '8fa8be48' // variavel para receber a apikey
//pegando a tag form
const frmPesquisa = document.querySelector('form');

frmPesquisa.onsubmit = (e) => {
  e.preventDeFault() // resetar a ações padrões que atualizaria a página.
  //(e) tudo o que está dentro do formulário Pesquisa
  // target - uma propriedade do objeto evento
  const pesquisa = e.target.pesquisa.value;
  // 'e' é o objeto de evento. Ao usar 'e.target', estamos nos referindo ao elemento HTML no qual o evento ocorreu. A partir desse elemento HTML, o código está acessando a propriedade 'pesquisa.value'.

  if (pesquisa == '') {
    alert('Preencha o campo de pesquisa.')
    return
  }

  fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
  /*É usado o comando fetch "buscar" para fazer uma requisição HTTP GET para a URL da API do OMDB. A URL inclui o valor da pesquisa e a chave de API.*/
    .then(result => result.json())
    // O resultado da requisição é convertido em formato JSON. - arrow function: result (parametro) => função
      .then(json => carregaLista(json))
      /*O JSON retornado é passado para a função carregaLista(), que será responsável por processar os dados e exibir os resultados na página. */

      /*fetch localiza a api
        .then - trabalha dentro do fetch - coletar os arquivos .json da api com uma arrow function
        .then trabalha dentro do .then - carrega o json dentro de 'carregaLista' a partir de outra arrow function
        */
}

// criando um arrow function nomeada
const carregaLista = (json) => {
  const lista = document.querySelector('div.lista');
  //O conteúdo HTML dentro da <div> de classe "lista" é limpo, removendo qualquer conteúdo anterior.
  lista.innerHTML = '';

  //arquivo json dentro da API
  /*É feito um loop nos elementos do array Search do objeto JSON retornado pela API do OMDB. Para cada elemento no array, o código dentro do bloco de código será executado. */
  json.Search.forEach(element => {
    let item = document.createElement('div');
    item.classList.add('item');

    item.innerHTML = `<img src="${element.Poster}"> <h4>${element.Title}</img>`
    /*O conteúdo HTML é definido para o elemento <div>. É criada uma imagem <img>com o atributo src definido para o valor da propriedade Poster do elemento atual do loop. Além disso, é adicionado um título<h4>com o valor da propriedade Title` do elemento atual. */

    lista.appendChild(item);
    /*O elemento <div> criado é adicionado como um filho do elemento <div class="lista">. Isso é feito usando o método appendChild do elemento lista. */
  })
}



// const apiKey = '8fa8be48'

// const frmPesquisa = document.querySelector('form');

// frmPesquisa.onsubmit = (e) => {
//     e.preventDefault() // resetar as ações padrões
//     //(e) tudo o que está dentro do fomulario pesquisa
//     // target - um propriedade do objeto evento
//     const pesquisa = e.target.pesquisa.value;

//     if (pesquisa == '') {
//         alert ('Preencha o campo de pesquisa.')
//         return
//     }
//     //apiKey é a chave de acesso à api
//     fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
//         .then(result => result.json())
//             .then(json => carregaLista(json))
//         // arrow function: result (parametro) => função
//         /*fetch localiza a api
//         .then - trabalha dentro do fetch - coletar os arquivos .json da api com uma arrow function
//         .then trabalha dentro do .then - carrega o json dentro de 'carregaLista' a partir de outra arrow function
//         */

//     }
//     // cria uma arrow function nomeada
//     const carregaLista = (json) => {
//         const lista = document.querySelector('div.lista');
//         lista.innerHTML = '';

//         // arquivo json dentro da API
//         json.Search.forEach(element => {

//             let item = document.createElement('div');
//             item.classList.add('item')

//             item.innerHTML = `<img src="${element.Poster}"> <h4>${element.Title}</img>`

//             lista.appendChild(item)
//         })
//     }