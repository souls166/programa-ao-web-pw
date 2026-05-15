function limpa() {
  const lista = document.getElementById("lista");
  const contador = document.getElementById("contador");
  const contadorConcluidas = document.getElementById("contador-concluidas");
    
  // remove todos os filhos da lista
  lista.innerHTML = "";

  // zera o contador
  contador.textContent = 0;
  contadorConcluidas.textContent = 0;
}
