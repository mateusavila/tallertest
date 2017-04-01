<?php 
session_cache_expire(25);
session_start();
$token = md5(time());
global $token; 
$_SESSION['token'] = $token;
require_once "header.php";
?>
<main>
	<div class="container">	
		<div class="login">
			<img src="img/logo.png" alt="">
			<form action="#" name="contato" autocomplete="off" novalidate ng-submit="loginsubmit($event, 'login.php')"  ng-init="form.token = '<?php echo $token; ?>'">
				<h2>Faça login para acessar</h2>
				<input type="text" name="login" ng-model="form.login" placeholder="Digite seu login" ng-required="true">
				<input type="password" name="password" ng-model="form.password" placeholder="Digite sua senha" ng-required="true">
				<button class="submit" type="submit" ng-disabled="contato.$invalid">Enviar</button>
				<p>{{result}}</p>
			</form>
			<div class="login-error-area" ng-class="{'active': error.class == true}">
				<h2>{{error.title}}</h2>
				<p>{{error.text}}</p>
				<button class="btn cancel" ng-click="error.class = false">
					<span class="btn-text">fechar</span>
				</button>
			</div>
		</div>
		
	</div>
</main>
<?php require_once "footer.php"; ?>