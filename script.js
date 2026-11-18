// =========================================================
// MENU HAMBÚRGUER 
// =========================================================

// 1. Seleciona os elementos que vamos usar
const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".nav");

// 2. Escuta o evento de clique no botão
botaoMenu.addEventListener("click", function () {
    // 3. Alterna (liga/desliga) a classe "ativo" no menu
    menu.classList.toggle("ativo");
});


// =========================================================
// FECHAR O MENU AO CLICAR EM UM LINK (NOVO)
// No celular, depois de tocar em "Sobre", por exemplo, a página
// rola até a seção, mas o menu continuaria aberto na frente.
// Aqui fazemos o menu fechar sozinho.
// =========================================================

// 1. querySelectorAll pega TODOS os links do menu (e não só o primeiro,
//    como faz o querySelector). O resultado é uma lista de links.
const linksDoMenu = document.querySelectorAll(".nav a");

// 2. forEach = "para cada link da lista, faça isso:"
linksDoMenu.forEach(function (link) {

    // 3. Quando ESTE link for clicado...
    link.addEventListener("click", function () {
        // 4. ...remove a classe "ativo", e o menu fecha
        menu.classList.remove("ativo");
    });
});


// =========================================================
// FORMULÁRIO DE CONTATO (NOVO)
// Ainda não temos backend (Node.js), então a mensagem não é
// enviada de verdade. Por enquanto, só mostramos um aviso.
// =========================================================

// 1. Seleciona o formulário e o parágrafo do aviso
const formContato = document.querySelector("#form-contato");
const avisoForm = document.querySelector("#form-aviso");

// 2. "submit" acontece quando o usuário clica em "Enviar mensagem"
//    (só depois que todos os campos "required" estiverem preenchidos)
formContato.addEventListener("submit", function (evento) {

    // 3. Por padrão, o navegador RECARREGA a página ao enviar um formulário.
    //    preventDefault() cancela esse comportamento padrão
    evento.preventDefault();

    // 4. .value pega o que o usuário digitou no campo "nome"
    const nome = document.querySelector("#nome").value;

    // 5. Escreve o aviso. As crases (`) permitem colocar a variável
    //    dentro do texto usando ${ }
    avisoForm.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;

    // 6. Limpa todos os campos do formulário
    formContato.reset();
});


// =========================================================
// ANO AUTOMÁTICO NO RODAPÉ
// =========================================================

// 1. Seleciona o <span id="ano"> do rodapé
const campoAno = document.querySelector("#ano");

// 2. new Date() pega a data de hoje; getFullYear() pega só o ano (ex.: 2026)
const anoAtual = new Date().getFullYear();

// 3. Escreve o ano dentro do <span>. Assim o rodapé nunca fica desatualizado
campoAno.textContent = anoAtual;