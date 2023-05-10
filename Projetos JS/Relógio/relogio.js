function mostrarTempo() {
  var date = new Date(); // método para coletar a data e horário do computador

  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  

  h = (h < 10) ? '0' + h : h; // condição ? → h < 10 ? se true '0' + h : se false h | para mostrar 09 e não 012
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;


  
  var tempo = h + ':' + m + ':' + s;

  document.getElementById('relogio').innerText = tempo;

  setTimeout(mostrarTempo, 1000)
}
mostrarTempo()