
function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const lista = document.getElementById("lista");
  const contador = document.getElementById("contador");
  const texto = input.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = texto;

  const btnConcluir = document.createElement("button");
  btnConcluir.textContent = "Concluido";
  btnConcluir.onclick = function () {
    concluirTarefa(span);
  };

  const btnRemover = document.createElement("button");
  btnRemover.textContent = "Remover";
  btnRemover.onclick = function () {
    removerTarefa(li, contador, lista);
    salvanoLocalStorage();
  };
  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.onclick = function () {
    const novoTexto = prompt("Editar tarefa:", span.textContent);
    if (novoTexto !== null && novoTexto.trim() !== "") {
      span.textContent = novoTexto;
      salvanoLocalStorage();
    }
  };

  li.appendChild(span);
  li.appendChild(btnConcluir);
  li.appendChild(btnRemover);
  li.appendChild(btnEditar);
  lista.appendChild(li);
  input.value = "";
  contador.textContent = lista.children.length;
  salvanoLocalStorage();
}

document.getElementById("tarefa").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});