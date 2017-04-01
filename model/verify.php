<?php 
session_start();
require_once "config/conf.php";
require_once "config/database.class.php";
global $loginStatus;
$sql = new Database;
$loginStatus = false;
// verificar se ele está logado
if(isset($_SESSION['login'])){
	// uma consulta pra ver se a password é valida
	$result = $sql->count("SELECT `users`.`login`, `users`.`password` FROM `users` WHERE `users`.`login`='".$_SESSION['login']."' AND `users`.`password`='".$_SESSION['password']."'");
	if($result > 0){
		$loginStatus = true;
	}else{
		$loginStatus = false;
	}
}else{
	$loginStatus = false;
}
if(!$loginStatus){
	header("Location: ".MAINURL);
}
?>