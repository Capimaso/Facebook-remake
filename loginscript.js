var nome = document.getElementById("nome"); //Pega o nome do usuário
var email = document.getElementById("email"); //Pega o email do usuário
var senha = document.getElementById("senha"); //Pega a senha do usuário
var pfp = document.getElementById("pfp"); //Pega a imagem de perfil do usuário
var botao = document.getElementById("botao"); //Pega o botão de cadastro

function cadastrar(){
    localStorage.setItem('nome', nome.value); //Salva o nome do usuário
    localStorage.setItem('email', email.value); //Salva o email do usuário
    localStorage.setItem('senha', senha.value); //Salva a senha do usuário
    localStorage.setItem('pfp', pfp); //Salva a imagem de perfil do usuário
    alert("Cadastrado com sucesso!");
    window.location.href = 'home.html'; //Redireciona para a página da home
}
botao.addEventListener('mouseenter', ()=>{ //Quando o mouse entra no botão e nao tem nada escrito nos inputs, ele muda de lugar aleatoriamente
    if (email.value.length == 0 && senha.value.length == 0 && nome.value.length == 0){
    botao.style.top = String(Math.floor((Math.random() * 10)-5)+40) + "vh";
    botao.style.left = String(Math.floor((Math.random() * 25)-12.5)+50) + "vw";
    }
    else{ //Se tiver algo escrito nos inputs, ele muda de cor
        botao.style.backgroundColor = "rgb(255, 255, 255, 0.5);";
        botao.style.cursor = "pointer";
    }
});
botao.addEventListener('click', ()=>{ //Quando o botão é clicado, ele chama a função de cadastro
    cadastrar();
});