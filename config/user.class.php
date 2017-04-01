<?php 
require_once "database.class.php";
class User extends Database{
	public function user_exists($login){
		$login = $this->clear($login);
		$count = $this->count("SELECT `users`.`login` FROM `users` WHERE `login`='$login'");
		if($count > 0){
			return true;
		}else{
			return false;
		}
	}
	public function verify_pass($login, $password){
		$login = $this->clear($login);
		$password = $this->clear($password);
		$count = parent::count("SELECT `users`.`login`, `users`.`password` FROM `users` WHERE `login`='$login' AND `password` ='$password' ");
		if($count == 1){
			return true;
		}else{
			return false;
		}
	}
	public function getUserData($login, $password){
		$user = array();
		$login = $this->clear($login);
		$password = $this->clear($password);
		$sql = parent::select("SELECT `users`.`id`, `users`.`name`, `users`.`login`, `users`.`status` FROM `users` WHERE `users`.`login`='$login'");
		while($row = parent::fetch_array($sql)){
			$user['id'] = $row['id'];
			$user['name'] = $row['name'];
			$user['login'] = $row['login'];
			$user['status'] = $row['status'];
		}
		return $user;
	}

	public function verify_login($login, $password){
		$user = array();
		if(!($this->verify_pass($login, $password))){
			unset($login);
			unset($password);
			$this->disconnect();
			ob_end_flush();
			header('Location: index.php');
		}

	}
	public function message($status){
		$ob = array();
		switch ($status) {
			case 0:
				$ob['title'] = "Login executado com sucesso!"; 
				$ob['text'] = "Você será transferido logo."; 
			break;
			case 1:
				$ob['title'] = "Login rejeitado!"; 
				$ob['text'] = "Este login não está cadastrado no sistema."; 
			break;
			case 2:
				$ob['title'] = "Login inválido!"; 
				$ob['text'] = "O login e a password não são compatíveis."; 
			break;
			case 3:
				$ob['title'] = "Login rejeitado!"; 
				$ob['text'] = "Esse é um filtro automático que evita a sobrecarga do sistema."; 
			break;
		}
		return $ob;
	}
}
