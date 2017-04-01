<?php require_once "model/verify.php";?>

<?php 
require_once "model/pagedata.php";
$pagedata = new Pagedata();
$id = (int) $_GET['id'];

if(!$pagedata->haveTicket($id)){
	header("Location: ".MAINURL."ticket-error");
}else{ 
	require_once "header.php";
	$ticket = $pagedata->getTicket($id);
	?>
<?php include "includes/header.php"; ?>
<?php include "includes/userbox.php"; ?>
<main ng-init="send.action='answer'; send.model='tickets'">
	<div class="container tickets-content">
		<h1>Ticket <?php echo $ticket['ticket']->idPretty; ?></h1>
		<h2><?php echo $ticket['ticket']->topic; ?></h2>
		<h3>Categoria: <strong><?php echo $ticket['ticket']->categoryName; ?></strong></h3>
		<h3>Produto: <strong><?php echo $ticket['ticket']->productName; ?></strong></h3>
		<h3>Data: <strong><?php echo $ticket['ticket']->datecreated; ?></strong></h3>
		<h3>Status: <strong class="status-<?php echo $ticket['ticket']->status ?>"><?php echo $ticket['ticket']->statusPretty ?></strong></h3>
		<!-- loop -->
		<div class="tickets-answers">
			<?php 
			$size = sizeof($ticket['answers']);
			$tickets_tmp = ""; 
			for ($i=0; $i < $size; $i++) { 
				$tickets_tmp .= "<div class=\"tickets-answers-item user-".$ticket['answers'][$i]->status."\">";
				$tickets_tmp .= "<div class=\"tickets-answers-header\">";
				$tickets_tmp .= $ticket['answers'][$i]->datepretty." - por ".$ticket['answers'][$i]->personName;
				$tickets_tmp .= "</div>";
				$tickets_tmp .= "<div class=\"tickets-answers-content\">";
				$tickets_tmp .= $ticket['answers'][$i]->content;
				$tickets_tmp .= "</div>";

				if(!(empty($ticket['answers'][$i]->file))){
					$tickets_tmp .= "<div class=\"tickets-answers-files\">Arquivo: <a target=\"_blank\" href=\"".MAINURL."images/".$ticket['answers'][$i]->file."\">".$ticket['answers'][$i]->file."</a></div>";
				}
				$tickets_tmp .= "</div>";
			}
			echo $tickets_tmp;
			?>
		</div>
		<?php if($ticket['ticket']->status == 1 || $ticket['ticket']->status == 2){ ?>
		<div class="create-ticket">
			<div class="ticket-loading" ng-class="{'active': form.loading}">
				<img src="<?php echo MAINURL; ?>img/loading.svg" alt="">
			</div>
			<form action="#" method="post" name="ticketform" ng-submit="save($event)" id="form-save" enctype="multipart/form-data" novalidate ng-init="form.data.id='<?php echo $id; ?>'; form.data.url='<?php echo MAINURL; ?>'">
				<fieldset>
					<legend>Responda este tópico</legend>
					<div class="create-ticket-box">
						<wysiwyg-edit content="form.data.content" config="editorConfig"></wysiwyg-edit>
					</div>
					<div class="create-ticket-box">
						<label for="upload">Adicione um arquivo</label>
						<input type="file" accept="image/*" name="file" id="file" ng-model="form.data.file">
					</div>
					<div class="create-ticket-box tar">
						<button class="btn success big" type="submit" ng-disabled="ticketform.$invalid">Responder</button>
					</div>
				</fieldset>
			</form>
		</div>
		<?php } ?>
		<div class="tickets-close">
			<a class="btn success" href="<?php echo MAINURL ?>dashboard">Voltar para Dashboard</a>
			<?php if(!($ticket['ticket']->status == 0)){ ?>
				<span class="btn warning" ng-click="closeticket.open('<?php echo $id; ?>')">Fechar este tópico</span>
			<?php } ?>
		</div>
	</div>
</main>
<?php include "includes/mask.php"; ?>
<?php include "includes/modal-success-ticket.php"; ?>
<?php include "includes/modal-success-confirm.php"; ?>
<?php include "includes/footer.php"; ?>
<?php require_once "footer.php"; ?>
<?php } ?>