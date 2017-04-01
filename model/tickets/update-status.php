<?php 
include "model/verify.php";
$get = file_get_contents('php://input');
$g = json_decode($get, true);
$sql = new Database();

$select = "
	UPDATE `tickets` 
	SET 
		`tickets`.`status`='0' 
	WHERE 
		`tickets`.`id`='".$sql->clear($g['id'])."'";
$sql->select($select);

$ob = array();
$ob['result'] = "Ticket fechado com sucesso!";
$ob['status'] = 1;
$ob['select'] = $select;
echo json_encode($ob);
$sql->disconnect();