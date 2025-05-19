
    let botao = document.getElementById('botao');
    let mensagem = document.getElementById('mensagem');
   

    botao.addEventListener('click', function () {
        mensagem.textContent = 'Olá! Seja bem vindo a minha página!';
    });