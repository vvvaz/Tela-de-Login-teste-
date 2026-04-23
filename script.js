const btnLogin = document.getElementById("btnLogin");
const btnCadastro = document.getElementById("btnCadastro");

const formLogin = document.querySelector(".login");
const formCadastro = document.querySelector(".cadastro");

const tabs = document.querySelector(".tabs");

tabs.style.setProperty("--pos", "0%");

btnLogin.onclick = () => {
    formLogin.classList.add("active");
    formCadastro.classList.remove("active");

    btnLogin.classList.add("active");
    btnCadastro.classList.remove("active");

    tabs.style.setProperty("--pos", "0%");
};

btnCadastro.onclick = () => {
    formCadastro.classList.add("active");
    formLogin.classList.remove("active");

    btnCadastro.classList.add("active");
    btnLogin.classList.remove("active");

    tabs.style.setProperty("--pos", "100%");
};
