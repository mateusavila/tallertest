<?php require_once "model/verify.php";?>
<?php require_once "header.php";?>
<?php 
require_once "model/pagedata.php";
$pagedata = new Pagedata();
?>
<?php include "includes/header.php"; ?>
<?php include "includes/userbox.php"; ?>
	
	<main ng-init="send.model='tickets';getdados(0, false)">
		<div class="container">
			<h1>Bem-vindo ao suporte da Taller</h1>
			<?php 
			// Usuários podem solicitar tickets, administradores apenas respondem 
			if($_SESSION['status'] == 2){ ?>
			<div class="action-button">
				<a href="new" class="btn success">Novo Ticket</a>
			</div>
			<?php } ?>
			<div class="tickets-table">
				<h2>Histórico de Tickets</h2>
				<div class="tickets-action">
					<h4>Filtrar por: </h4>
					<form action="#" method="post" name="filterform" ng-submit="filtersubmit($event)" novalidate>
						<div class="ticket-action-item">
							<label for="category">Categoria:</label>
							<select name="category" id="category" ng-model="send.category">
								<option value="">Escolha a categoria</option>
								<?php 
								$cat = $pagedata->getCategories();
								$size = sizeof($cat['categories']);
								for ($i=0; $i < $size; $i++) { 
									echo "<option value=\"".$cat['categories'][$i]->id."\">".$cat['categories'][$i]->name."</option>";
								}
								?>
							</select>
						</div>
						<div class="ticket-action-item">
							<label for="produto">Produto:</label>
							<select name="product" id="product" ng-model="send.product">
								<option value="">Escolha o produto</option>
								<?php 
								$product = $pagedata->getProducts();
								$size = sizeof($product['products']);
								for ($i=0; $i < $size; $i++) { 
									echo "<option value=\"".$product['products'][$i]->id."\">".$product['products'][$i]->name."</option>";
								}
								?>
							</select>
						</div>
						<div class="ticket-action-item ticket-action-item-send">
							<button type="submit" class="btn success" ng-disabled="filterform.$invalid">Filtrar</button>
							<span class="btn gray" ng-click="filterclear()" ng-if="usingfilter">Limpar busca</span>
						</div>
					</form>
				</div>
				<div class="tickets-table">
					<div class="tickets-table-loading active" ng-class="{'active': send.loading}">
						<img src="img/loading.svg" alt="">
					</div>
					<table>
						<thead>
							<tr>
								<th ng-click="order = 'id'; reverse = !reverse" ng-class="{'reverse': reverse && order == 'id', 'active': order == 'id'}">Código do Ticket</th>
								<th ng-click="order = 'categoryName'; reverse = !reverse" ng-class="{'reverse': reverse && order == 'categoryName', 'active': order == 'categoryName'}">Categoria</th>
								<th ng-click="order = 'productName'; reverse = !reverse" ng-class="{'reverse': reverse && order == 'productName', 'active': order == 'productName'}">Produto</th>
								<th ng-click="order = 'datecreated'; reverse = !reverse" ng-class="{'reverse': reverse && order == 'datecreated', 'active': order == 'datecreated'}">Criado em:</th>
								<th ng-click="order = 'dateupdated'; reverse = !reverse" ng-class="{'reverse': reverse && order == 'dateupdated', 'active': order == 'dateupdated'}">Última atualização:</th>
								<th ng-click="order = 'person'; reverse = !reverse" ng-class="{'reverse': reverse && order == 'person', 'active': order == 'person'}">Atendido por:</th>
								<th ng-click="order = 'status'; reverse = !reverse" ng-class="{'reverse': reverse && order == 'status', 'active': order == 'status'}">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr ng-repeat="item in dados | orderBy:order:reverse" ng-if="dados.length > 0">
								<td class="tac"><a href="ticket/{{item.id}}">{{item.idPretty}}</a></td>
								<td>{{item.categoryName}}</td>
								<td>{{item.productName}}</td>
								<td class="tac">{{item.datecreated}}</td>
								<td class="tac">{{item.dateupdated}}</td>
								<td class="tac">{{item.personName}}</td>
								<td class="tac" ng-class="{'done': item.status == 'Fechado', 'open': item.status == 'Aberto', 'waiting': item.status == 'Aguardando'}">{{item.status}}</td>
							</tr>
							<tr ng-if="!dados.length">
								<td colspan="7">Infelizmente não existe resultados para esta busca.</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="tickets-paginate">
					<span class="btn success" ng-click="page('tickets')" ng-if="dados.length < send.total">Carregar mais tickets</span>
				</div>
			</div>
		</div>
	</main>
<?php include "includes/footer.php"; ?>
<?php require_once "footer.php"; ?>