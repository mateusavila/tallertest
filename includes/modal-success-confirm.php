<div class="window small" ng-class="{'active': closeticket.confirm}">
	<div class="window-content">
		<h2>Atenção!</h2>
		<p>Esta ação é permanente. Confirme caso tenha certeza absoluta desta decisão.</p>
		<div class="button-area choose">
			<a href="#" ng-click="closeticket.confirm = false" class="btn gray big">Cancelar</a>
			<a href="#" ng-click="closeticket.send($event)" class="btn success big">Confirmar fechamento</a>
		</div>
	</div>
</div>