let nome = document.getElementById("nome_txt");
let email = document.getElementById("email_txt");
let confirmacao = document.getElementById("confirma-email_txt");
let telefone = document.getElementById("telefone_txt");
let senha = document.getElementById("senha_txt");
let confirmacao_senha = document.getElementById("confirma_senha_txt");
let botao = document.getElementById("enviar_btn");
let mensagem = document.getElementById("mansagem_txt");
let marca = document.getElementById("marca_txt");
let r_sim = document.getElementById("resposta_sim");
let r_nao = document.getElementById("resposta_nao");

function enviar_dados(){
    if(nome.value.length <= 0){
        alert("O preenchimento do campo Nome é obrigatorio");
        return false;
    }
    if(nome.value.length < 3){
    alert("O nome precisa termais de três caracteres");
    return false;
    }
    if(email.value <= 20){
        alert("O preenchimento do campo E-mail é obrigatorio");
        return false;
    }
    if(email.value != confirmacao.value){
        alert("E-mails não coinciden");
        return false;
    }
    if(email.value <= 20){
        alert("O preenchimento do campo E-mail é obrigatorio");
        return false;
    }
    if(email.value != confirmacao.value){
        alert("E-mails não coinciden");
        return false;
    }
    if(senha.value <= 8){
        alert("O preenchimento do campo Senha é obrigatorio");
        return false;
    }
    if(senha.value != confirmacao_senha.value){
        alert("Senhas não coinciden");
        return false;
    }
    if(telefone.value.length < 10){
        alert("O preenchimento do campo Telefone está incorreto");
        return false;
    }
    if(marca.value.length < 0){
        alert("Campo Marca é obrigatório");
        return false;
    }
    if(mensagem.value.length >= 10){
        alert("Especifique o modelo do carro");
        return false;
    }
    
    return true;
}
   

function gravar_banco_dados(){
    if(enviar_dados() == true){
        alert ("Cadastro feito com sucesso!");
    }
}
botao.onclick = enviar_dados;
