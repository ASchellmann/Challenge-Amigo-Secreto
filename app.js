//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
/*
Funcionalidades:
    Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
    Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
    Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
    Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.
*/

let amigos = [];

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function adicionarAmigo() {
    const regexValidNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/;
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome === "") {
        alert("Por favor, digite um nome valido.");
        return;
    }
    if (!regexValidNome.test(nome)) {
        alert("Por favor, digite um nome valido (somente letras e espaços, minimo de 2 caracteres).");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione no minimo um nome antes do sorteio.");
        return;
    }
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado foi: <strong>${sorteado}</strong></li>`;
}