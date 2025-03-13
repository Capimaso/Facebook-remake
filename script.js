// Entrada de valores
var input = document.getElementById("input");
var icon = document.querySelector(".icon");
var pesquisa = document.querySelector('.pesquisa');
var localpfp = document.getElementById('pfp');
var profile = document.querySelector('.profile');
const nome = localStorage.getItem('nome');
const email = localStorage.getItem('email');
const senha = localStorage.getItem('senha');
const pfp = localStorage.getItem('pfp');
localpfp.src = pfp;

document.writeln("<p id='nome'>Olá, " + nome + "</p>"); //Escreve o nome do usuário na página

icon.addEventListener('click', ()=>{ //Quando o ícone de pesquisa é clicado, ele inpande a barra de pesquisa
    pesquisa.style.width = "0px";
    input.style.width = "0px";
    setTimeout(() => { //Depois de 400ms, ele redireciona para a página de login
        window.location.href = 'index.html';
    }, 400);
});

if (input.value.length > 0) { //Se tiver algo escrito na barra de pesquisa, ele muda o tamanho dela para o tamanho do texto
    input.style.width = input.value.length + "ch";
}

input.addEventListener("keypress", function(event) { //Quando a tecla enter é pressionada, ele redireciona para a página de pesquisa
if (event.key === "Enter") {
    window.location.href = 'https://www.facebook.com/search/top/?q=' + input.value;
}
});