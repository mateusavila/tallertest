<?php 
// include "config/database.class.php";
class Pagedata extends Database{
	public function getCategories(){
		// pega as categorias do banco
		$query = parent::select("SELECT `categories`.`id`, `categories`.`name` FROM `categories` ORDER BY `categories`.`name` ASC");
		$n = 0;
		$ob = array();
		while($obj = parent::fetch_obj($query)){
			$ob['categories'][$n] = $obj;
			$n++;
		}
		return $ob;
	}

	public function getProducts(){
		// pega produto do banco
		$query = parent::select("SELECT `products`.`id`, `products`.`name` FROM `products` ORDER BY `products`.`name` ASC");
		$n = 0;
		$ob = array();
		while($obj = parent::fetch_obj($query)){
			$ob['products'][$n] = $obj;
			$n++;
		}
		return $ob;
	}

	public function haveTicket($index){
		$count = parent::count("SELECT `tickets`.`id` FROM `tickets` WHERE `tickets`.`id` = '".parent::clear($index)."'");
		return ($count === 1) ? true : false;
	}

	public function getTicket($index){
		// pega as categorias do banco
		$query = parent::select("
			SELECT 
				`tickets`.`id`, 
				`tickets`.`category`, 
				`tickets`.`product`, 
				`tickets`.`topic`, DATE_FORMAT(`tickets`.`created`, '%d/%m/%Y às %H:%i:%s') as `datecreated`, 
				`tickets`.`person`, DATE_FORMAT(`tickets`.`updated`, '%d/%m/%Y às %H:%i:%s') as `dateupdated`, 
				`tickets`.`status`, 
				`categories`.`id` as `categoryID`, 
				`categories`.`name` as `categoryName`, 
				`products`.`id` as `productID`, 
				`products`.`name` as `productName`, 
				`users`.`name` as `personName` 
			FROM `tickets` 
				INNER JOIN `categories` ON `categories`.`id` = `tickets`.`category` 
				INNER JOIN `products` ON `products`.`id` = `tickets`.`product` 
				INNER JOIN `users` ON `users`.`id` = `tickets`.`users_id` 
			WHERE `tickets`.`id`='".parent::clear($index)."'");
		$ob = array();
		while($obj = parent::fetch_obj($query)){
			$ob['ticket'] = $obj;
			$ob['ticket']->idPretty = str_pad($ob['ticket']->id, 10, "0", STR_PAD_LEFT);
			switch ($ob['ticket']->status) {
				case 0:
				$ob['ticket']->statusPretty = 'Fechado';
				break;
				case 1:
				$ob['ticket']->statusPretty = 'Aguardando';
				break;
				case 2:
				$ob['ticket']->statusPretty = 'Aberto';
				break;
			}
		}
		// busca pelas respostas
		$answers = parent::select("
			SELECT 
				`answers`.`id`, 
				`answers`.`content`, DATE_FORMAT(`answers`.`date`, '%d/%m/%Y às %H:%i:%s') as `datepretty`, 
				`answers`.`file`, 
				`users`.`name` as `personName`, 
				`users`.`status` as `status` 
			FROM `answers` 
				INNER JOIN `users` ON `answers`.`users_id` = `users`.`id` 
			WHERE `answers`.`ticket_id` = '".parent::clear($index)."' ORDER BY `answers`.`id` ASC");
		$n = 0;
		while($obj = parent::fetch_obj($answers)){
			$ob['answers'][$n] = $obj;
			$n++;
		}
		$ob['total_answers'] = $n;
		return $ob;
	}
}