<?php 
include "model/verify.php";
$sql = new Database();
$g = json_decode($_POST['form']);

if($_SESSION['status'] == 1){
	// administradores podem sobrescrever o campo person
	$update_ticket = "
		UPDATE `tickets` 
		SET 
			`tickets`.`person`='".$sql->clear($_SESSION['id'])."', 
			`tickets`.`updated`= NOW(), 
			`tickets`.`status`= 2
		WHERE `tickets`.`id`='".$sql->clear($g->data->id)."'";
}else{
	// usuários comuns apenas atualizam o updated
	$update_ticket = "
		UPDATE `tickets` 
		SET  
			`tickets`.`updated`= NOW() 
		WHERE `tickets`.`id`='".$sql->clear($g->data->id)."'";
}

$insert_answer = "
	INSERT INTO `answers` (
		`ticket_id`,
		`content`,
		`date`,
		`file`,
		`users_id`
	) VALUES (
		'".$sql->clear($g->data->id)."',
		'".$sql->clear($g->data->content)."',
		NOW(),
		'".$sql->upload($_FILES['file'])."',
		'".$sql->clear($_SESSION['id'])."'
	)
";
$sql->select($update_ticket);
$sql->select($insert_answer);
$ob = array();

$ob['result'] = "Ticket atualizado com sucesso!";
$ob['status'] = 1;



echo json_encode($ob);
$sql->disconnect();