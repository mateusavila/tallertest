<?php require_once "model/verify.php";?>
<?php require_once "header.php";?>
<?php 
require_once "model/pagedata.php";
$pagedata = new Pagedata();
?>
<?php include "includes/header.php"; ?>
<?php include "includes/userbox.php"; ?>
<main ng-init="send.action='answer';">
	<div class="container">
		<h1>Bem-vindo ao suporte da Taller</h1>
		<h2>Infelizmente não é possível buscar o ticket. </h2>
		
		
	</div>
</main>
<?php include "includes/footer.php"; ?>
<?php require_once "footer.php"; ?>