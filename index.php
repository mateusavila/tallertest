<?php 
define('MAIN_INCLUDED', 1);
$slug = isset($_GET['link']) ? $_GET['link'] : 'loginform';
require_once $slug.".php";
?>