<?php
header('Access-Control-Allow-Origin: *');
session_start();
$get = file_get_contents('php://input');
$g = json_decode($get, true);
$ob = array();
include "config/conf.php";
include "config/user.class.php";
$user = new User();

// status possíveis
// 0 - login foi feito com sucesso
// 1 - usuário não existe no sistema
// 2 - password não confere
// 3 - filtro automático anti sobrecarga
if($g['token'] == $_SESSION['token']){
	$ob['data'] = array();

	$login = mysqli_real_escape_string($user->connection, $g['login']);
	$password = mysqli_real_escape_string($user->connection, $g['password']);
	$saltbefore = "d8jPXZb2LEbxVr8rIUhQ";
	$saltafter = "O10EL8z97Rs2qaOmduX7";
	$password = hash('sha512', $saltbefore.$password.$saltafter);
	if($user->user_exists($login)){ 
		if($user->verify_pass($login, $password)){
			$user_data = $user->getUserData($login, $password);
			$usuario = $login;
			$passcode = $password;
			$_SESSION['status'] = $user_data['status'];
			$_SESSION['login'] = $usuario;
			$_SESSION['password'] = $passcode;
			$_SESSION['id'] = $user_data['id'];
			$_SESSION['name'] = $user_data['name'];
			$status = 0;
			$ob['data']['login'] = $usuario;
		}else{
			$status = 2;
		}
	}else{
		$status = 1;
		
	}
}else{
	$status = 3;
}

$ob['data'] = $user->message($status);
$ob['data']['status'] = $status;
echo json_encode($ob);