function concluirTarefa(span) {
  span.classList.toggle("concluida");
  const lista = document.getElementById("lista");
  const contadorConcluidas = document.getElementById("contador-concluidas");
  const totalConcluidas = lista.querySelectorAll("span.concluida").length;
  contadorConcluidas.textContent = totalConcluidas;
  salvanoLocalStorage();
}
