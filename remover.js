
function removerTarefa(li) {
  const lista = document.getElementById("lista");
  const contador = document.getElementById("contador");
  li.remove();
  contador.textContent = lista.children.length;
  
  const contadorConcluidas = document.getElementById("contador-concluidas");
  const totalConcluidas = lista.querySelectorAll("span.concluida").length;
  contadorConcluidas.textContent = totalConcluidas;
  salvanoLocalStorage();
}
