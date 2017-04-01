<?php 
// session_start();
// include "config/database.class.php";
include "model/verify.php";
$sql = new Database();

$g = json_decode($_POST['form']);

// adicionando os tickets
$select = "
	INSERT INTO `tickets` (
		`users_id`, 
		`category`, 
		`product`, 
		`status`, 
		`created`, 
		`updated`, 
		`person`, 
		`topic`
	) VALUES (
		'".$sql->clear($_SESSION['id'])."', 
		'".$sql->clear($g->data->category)."', 
		'".$sql->clear($g->data->product)."', 
		'1', 
		NOW(), 
		NOW(), 
		'0', 
		'".$sql->clear($g->data->topic)."'
		)";
$sql->select($select);

// processando as requisições
$lastid = $sql->get_last_id();
$select_answers = "
	INSERT INTO `answers` (
		`ticket_id`, 
		`content`, 
		`date`, 
		`file`,
		`users_id`
	) VALUES (
		'".$lastid."', 
		'".$sql->clear($g->data->content)."', 
		NOW(), 
		'".$sql->upload($_FILES['file'])."',
		'".$sql->clear($_SESSION['id'])."'
	)";
$sql->select($select_answers);

$ob = array();

$ob['result'] = "Ticket salvo com sucesso!";
$ob['status'] = 1;

echo json_encode($ob);
$sql->disconnect();


