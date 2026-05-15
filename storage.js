function  salvanoLocalStorage(){
    const lista = document.getElementById('lista');
    const tarefas = []
    const span = lista.querySelector("span");
    if (span){
    lista.querySelector("span");
    tarefas.push({texto:span.textContent,
        concluida:span.classList.contains("concluida")
    })
}
localStorage.setItem("minhastarefas",JSON.stringify(tarefas));
}
window.addEventListener("load",() => {
    const dados = localStorage.getItem('minhastarefas');
    if (dados) {
        const tarefasSalvas = JSON.parse(dados);
        tarefasSalvas.forEach(tarefas => {
            const li = document.createElement("li")
            const span = document.createElement("span")
            span.textContent = tarefas.texto;
            if (tarefas.concluida){
                span.classList.add('concluida');
            }
            li.appendChild(span);
            document.getElementById("lista").appendChild(li);
        });
}
});