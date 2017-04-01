<?php 
include "model/verify.php";
$get = file_get_contents('php://input');
$g = json_decode($get, true);
$sql = new Database();


$page = $sql->clear($g['page']);
$page = $page * LIMITDB;
$limit = LIMITDB;

$ob = array();
// verifica se foi enviado 1 item apenas
$product = isset($g['product']) ? $sql->clear($g['product']) : '';
$category = isset($g['category']) ? $sql->clear($g['category']) : '';

// gambiarra para retornar os códigos, para caso o usuário pense em consultar apenas 1 dos dois ítens. Sorry por não conseguir algo elegante.

if(!(empty($category)) && !(empty($product))){
	$operator = "AND";
}else{
	$operator = "OR";
}

$role = $_SESSION['status'];

if($role == 2){
	$query = "
		SELECT 
			`tickets`.`id`, 
			(SELECT `users`.`name` FROM `users` WHERE `users`.`id` = `tickets`.`person`) as `personName`,
			`tickets`.`category`, 
			`tickets`.`product`, 
			`tickets`.`topic`, 
			`tickets`.`person`,
			`tickets`.`status`, 
			`categories`.`id` as `categoryID`, 
			`categories`.`name` as `categoryName`, 
			`products`.`id` as `productID`, 
			`products`.`name` as `productName`, 
			DATE_FORMAT(`tickets`.`created`, '%d/%m/%Y às %H:%i:%s') as `datecreated`, 
			DATE_FORMAT(`tickets`.`updated`, '%d/%m/%Y às %H:%i:%s') as `dateupdated` 
			FROM `tickets` 
				INNER JOIN `categories` ON `categories`.`id` = `tickets`.`category` 
				INNER JOIN `products` ON `products`.`id` = `tickets`.`product`  
			WHERE (
				`tickets`.`users_id`='".$sql->clear($_SESSION['id'])."') 
				AND (
					`tickets`.`category` = '".$category."' 
					".$operator." 
					`tickets`.`product` = '".$product."') 
			ORDER BY `tickets`.`id` DESC 
			LIMIT $page, $limit";
	$querytotal = "
		SELECT 
			`tickets`.`category`, 
			`tickets`.`product`, 
			COUNT(*) as `total` 
			FROM `tickets`
				WHERE (
	 				`tickets`.`users_id`='".$sql->clear($_SESSION['id'])."') 
	 			AND(
					`tickets`.`category` = '".$category."' 
						".$operator." 
					`tickets`.`product` = '".$product."')
	";
}else{
	$query = "
		SELECT 
			`tickets`.`id`, 
			`tickets`.`category`, 
			`tickets`.`product`, 
			`tickets`.`topic`, 
			`tickets`.`person`,
			`tickets`.`status`, 
			(SELECT `users`.`name` FROM `users` WHERE `users`.`id` = `tickets`.`person`) as `personName`,
			`categories`.`id` as `categoryID`, 
			`categories`.`name` as `categoryName`, 
			`products`.`id` as `productID`, 
			`products`.`name` as `productName`, 
			DATE_FORMAT(`tickets`.`created`, '%d/%m/%Y às %H:%i:%s') as `datecreated`, 
			`tickets`.`person`, 
			DATE_FORMAT(`tickets`.`updated`, '%d/%m/%Y às %H:%i:%s') as `dateupdated` 
			FROM `tickets` 
				INNER JOIN `categories` ON `categories`.`id` = `tickets`.`category` 
				INNER JOIN `products` ON `products`.`id` = `tickets`.`product` 
			WHERE 
					`tickets`.`category` = '".$category."' 
					".$operator." 
					`tickets`.`product` = '".$product."' 
			ORDER BY `tickets`.`id` DESC 
			LIMIT $page, $limit";

	$querytotal = "
		SELECT 
			`tickets`.`category`, 
			`tickets`.`product`, 
			COUNT(*) as `total` 
			FROM `tickets`
				WHERE 
				`tickets`.`category` = '".$category."' 
	 			".$operator." 
	 			`tickets`.`product` = '".$product."'
	";
}


// retorna os dados do trabalho
$return = $sql->select($query);
$n = 0;
while($obj = $sql->fetch_obj($return)){
	$ob['data'][$n] = $obj;
	$ob['data'][$n]->idPretty = str_pad($ob['data'][$n]->id, 10, "0", STR_PAD_LEFT);
	switch ($ob['data'][$n]->status) {
		case 0:
		$ob['data'][$n]->status = 'Fechado';
		break;
		case 1:
		$ob['data'][$n]->status = 'Aguardando';
		break;
		case 2:
		$ob['data'][$n]->status = 'Aberto';
		break;
	}
	if(!(isset($ob['data'][$n]->personName))){
		// Se a subconsulta retorna vazio, ele bota esse valor
		$ob['data'][$n]->personName = '--';
	}
	$n++;
}

// retorna o total da requisição
$total = $sql->select($querytotal);
while($obj = $sql->fetch_obj($total)){
	$ob['total'] = $obj->total;
	$pages = ceil($ob['total'] / LIMITDB);
	$ob['pages'] = $pages;
}


// retorna a quantidade de cliques possíveis do paginador

// $ob['operator'] = $operator;

echo json_encode($ob);
$sql->disconnect();