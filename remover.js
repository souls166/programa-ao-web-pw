// Função para remover uma tarefa da lista
function removerTarefa(li) {
  // Pega a lista de tarefas
  const lista = document.getElementById("lista");
  // Pega o contador total de tarefas
  const contador = document.getElementById("contador");

  // Remove a tarefa do HTML (a exclui)
  li.remove();
  // Atualiza o contador total de tarefas
  contador.textContent = lista.children.length;
  
  // Pega o contador de tarefas concluídas
  const contadorConcluidas = document.getElementById("contador-concluidas");
  // Procura todas as tarefas que têm a classe 'concluida' e conta quantas são
  const totalConcluidas = lista.querySelectorAll("span.concluida").length;
  // Atualiza o contador de concluídas
  contadorConcluidas.textContent = totalConcluidas;
  salvanoLocalStorage();
}
