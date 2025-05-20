<?php
try
{
    $con = new PDO("mysql:host=$host; 
    dbname=$db", $user, $password);
    echo "conexao ok"
}

catch(PDOException $e){
    echo "Erro ao conectar: ".$e->getMessage()
}
?>