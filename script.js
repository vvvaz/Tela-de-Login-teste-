const container = document.getElementById("container");
const botao = document.getElementById("trocar");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

let ativo = false;

botao.addEventListener("click", () => {
    ativo = !ativo;

    container.classList.toggle("active");

    if (ativo) {
        titulo.textContent = "Bem-vindo!";
        texto.textContent = "Já tem conta?";
        botao.textContent = "Entrar";
    } else {
        titulo.textContent = "Olá!";
        texto.textContent = "Não tem conta?";
        botao.textContent = "Cadastrar";
    }
});
