var nome  = document.getElementById("nome_txt");
var email = document.getElementById("email_txt");
var confirmacao = document.getElementById("confirma-email_txt");
var senha = document.getElementById("senha_txt");
var confirma_senha = document.getElementById("confirma-senha_txt");
var telefone = document.getElementById("telefone_txt");
var mensagem = document.getElementById("mensagem_txt");
var marca = document.getElementById("marca_txt");
var botao = document.getElementById("validar_campos")

function validando_dados(){
    
    if(nome.value.length < 3){
        alert("O nome precisa termais de três caracteres!");
        return false;
    }
    if(email.value.length <= 0){
        alert("O preenchimento do campo E-mail é obrigatorio!");
        return false;
    }
    if(email.value != confirmacao.value){
        alert("E-mails não coinciden!");
        return false;
    }
    if(senha.value.length <= 8){
        alert("A senha deve possuir oito ou mais caracteres!");
        return false;
    }
    if(senha.value != confirma_senha.value){
        alert("As senhas não coinciden!");
        return false;
    }
    if(telefone.value.length != 11){
        alert("O telefone deve possuir 11 caracteres!");
        return false;
    }
    if(marca.value.length < 6){
        alert("O conteúdo precisa conter mais de seis caracteres!");
        return false;
    }
    if(mensagem.value.length < 20){
        alert("Mensagem deve conter mais de vinte caracteres!");
        return false;
    }

    
    exibeDados()
    return true;
}


function gravar_banco_dados(){
    if(validando_dados() == true){
        alert("Agradecemos seu cadastro!");
        limparDados();
    }
}


function exibeDados(){
    console.log("Nome " + nome.value);
    console.log("E-mail: " + email.value);
    console.log("Telefone: " + telefone.value);
    console.log("Assunto: " + marca.value);
    console.log("Modelo e Ano: " + mensagem.value);
}

function limparDados(){
    nome.value = "";
    email.value = "";
    confirmacao.value = "";
    senha.value = "";
    confirma_senha.value = "";
    telefone.value = "";
    botao.value = "";
    mensagem.value = "";
    marca.value = "";
}
botao.onclick = gravar_banco_dados; 
