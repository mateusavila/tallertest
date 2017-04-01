<?php 
include "model/verify.php";
// status
// 1 - ele está mostrando
// 0 - ele está escondido
// 2 - ele está excluído, mas não aparece pro usuário

$sql = new Database();
$sql->select("UPDATE `cities` SET `cities`.`status` = '2' WHERE `cities`.`id`='".$sql->clear($_GET['id'])."'");

$ob = array();
$ob['result'] = "Cidade removido com sucesso!";
$ob['status'] = 1;
echo json_encode($ob);
$sql->disconnect();