function adicionarContato() {
    // Obtém os valores do nome e número dos campos de entrada
    var nome = document.getElementById("nome").value;
    var numero = document.getElementById("numero").value;

    // Cria um novo elemento <li> com o nome e número do contato
    var novoContato = document.createElement("li");
    var textoContato = document.createTextNode("Nome: " + nome + " --- " + "Telefone: " + numero);
    novoContato.appendChild(textoContato);

    // Adiciona o novo contato à lista de contatos
    var listaContatos = document.getElementById("lista-contatos");
    listaContatos.appendChild(novoContato);

    // Limpa os campos de entrada
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
}