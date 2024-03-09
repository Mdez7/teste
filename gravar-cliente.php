<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$confirma_email = $_POST['confirma_email'];
$senha = $_POST['senha'];
$confirma_senha = $_POST['confirma_senha'];
$telefone = $_POST['telefone'];
$marca = $_POST['marca'];
$mensagem = $_POST['mensagem'];

$hostname = 'localhost';
$bancodedados = 'raphacar_cadastro';
$usuario_bd = 'root';
$senha_bd = '';

// Conectar ao banco de dados
$con = mysqli_connect($hostname, $usuario_bd, $senha_bd, $bancodedados);

// Verificar a conexão
if (!$con) {
    die("Conexão falhou: " . mysqli_connect_error());
}

// Preparar e executar a consulta SQL para inserir dados
$sql = "INSERT INTO clientes(nome, email, confirma_email, senha, confirma_senha, telefone, marca, mensagem) 
VALUES('$nome', '$email', '$confirma_email', '$senha', '$confirma_senha', '$telefone', '$marca', '$mensagem')";

if (mysqli_query($con, $sql)) {
    echo "Dados gravados com sucesso";
} else {
    echo "Ocorreu um erro ao gravar os dados: " . mysqli_error($con);
}

// Fechar a conexão com o banco de dados
mysqli_close($con);
?>
<a href="./index.html Voltar</a>