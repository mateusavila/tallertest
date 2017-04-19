<?php 
define('MAIN_INCLUDED', 1);
if(isset($_GET['link'])){
	if(filter_var($_GET['link'], FILTER_VALIDATE_URL)){
		$slug = 'loginform';
	}
}else{
	$slug = 'loginform';
}

require_once $slug.".php";
?>