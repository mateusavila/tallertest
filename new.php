<?php require_once "model/verify.php";?>
<?php require_once "header.php";?>
<?php 
require_once "model/pagedata.php";
$pagedata = new Pagedata();
?>
<?php include "includes/header.php"; ?>
<?php include "includes/userbox.php"; ?>
<main ng-init="send.action='add'; send.model='tickets'">
	<div class="container">
		<h1>Bem vindo ao suporte da Taller</h1>
		<p>Adicione seu ticket. Logo responderemos a sua solicitação.</p>
		<div class="create-ticket">
			<div class="ticket-loading" ng-class="{'active': form.loading}">
				<img src="img/loading.svg" alt="">
			</div>
			<form action="#" method="post" name="ticketform" ng-submit="save($event)" id="form-save" enctype="multipart/form-data" novalidate ng-init="form.data.url='<?php echo MAINURL; ?>'">
				<fieldset>
					<legend>Crie seu ticket</legend>
					<div class="create-ticket-box">
						<label for="category">Categoria:</label>
						<select name="category" id="category" ng-model="form.data.category" ng-required="true">
							<option value="">Escolha a Categoria</option>
							<?php 
							$cat = $pagedata->getCategories();
							$size = sizeof($cat['categories']);
							for ($i=0; $i < $size; $i++) { 
								echo "<option value=\"".$cat['categories'][$i]->id."\">".$cat['categories'][$i]->name."</option>";
							}
							?>
						</select>
					</div>
					<div class="create-ticket-box">
						<label for="product">Produto:</label>
						<select name="product" id="product" ng-model="form.data.product" ng-required="true">
							<option value="">Escolha o Produto</option>
							<?php 
							$product = $pagedata->getProducts();
							$size = sizeof($product['products']);
							for ($i=0; $i < $size; $i++) { 
								echo "<option value=\"".$product['products'][$i]->id."\">".$product['products'][$i]->name."</option>";
							}
							?>
						</select>
					</div>	
					<div class="create-ticket-box">
						<label for="topic">Título do tópico</label>
						<input type="text" name="topic" ng-model="form.data.topic" placeholder="Ex: Pedido de Suporte" ng-required="true">
					</div>
					<div class="create-ticket-box">
						<wysiwyg-edit content="form.data.content" config="editorConfig"></wysiwyg-edit>
					</div>
					<div class="create-ticket-box create-ticket-box-upload">
						<label for="upload">Adicione um arquivo</label>
						<input type="file" accept="image/*" name="file" id="file" ng-model="form.data.file">
					</div>
					<div class="create-ticket-box tar">
						<button class="btn success big" type="submit" ng-disabled="ticketform.$invalid">Enviar Ticket</button>
					</div>
				</fieldset>
			</form>
		</div>
	</div>
</main>
<?php include "includes/footer.php"; ?>
<?php include "includes/mask.php"; ?>
<?php include "includes/modal-success.php"; ?>
<?php require_once "footer.php"; ?>