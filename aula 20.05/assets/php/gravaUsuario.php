<?php
include_once "conexao.php";
try{
if($_SERVER['REQUEST_METHOD']=='POST'){
    $email =$_POST['email'];
    $usuario =$_POST['usuario'];
    $senha =trim($_POST['senha']);
    //criptografando senha
    $hash=trim(password_hash($senha, PASSWORD_DEFAULT));

    $insert=$con->prepare('INSERT INTO usuarios(email,nome,senha) VALUES (:email, :nome, :senha)');

    //executar
    if($insert->execute()){
        header('location:index.html')
    }
    else {
        header('location:index.html');
    }
}
}
catch(PDOException $e){
    echo "Erro de gravação. Consulte o administrador do sistema" .$e->getMessage()
}
?>
