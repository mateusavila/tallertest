var app = angular.module('app', ['ngWYSIWYG']);
app.controller('appCtrl', ['$scope', '$timeout', '$http', '$location', function($scope, $timeout, $http, $location){

	// todas as variáveis que utilizamos neste projeto

	// em dashboard, utilizamos a variavel dados para printar os dados na tela.
	$scope.dados = [];


	// send fica responsável pelo processamento de requisições dentro do dashboard
	$scope.send = {};
	$scope.send.page = 0; // página atual
	$scope.send.model = ''; // qual model ele irá buscar. neste caso, é tickets
	$scope.send.pages = 0; // quantidade de páginas no total
	$scope.send.total = 0; // total de registros salvos no banco
	$scope.send.text = ""; // todas as consultas vão mandar o texto de busca
	$scope.send.loading = true;

	// form fica responsável pelo processamento das requisições de POST em new e na respostas dos tickets
	$scope.form = {};
	$scope.form.title = "";
	$scope.form.submit = "";
	$scope.form.open = false;
	$scope.form.id = 0;
	$scope.form.data = {};
	$scope.form.status = 0;
	$scope.form.loading = false;
	$scope.form.success = false;

	// mesmo enviando apenas 1 arquivo por vez, criamos um array vazio para o salvamento dos arquivos.
	$scope.files = [];

	// ordenamento do site. Ele inicia pela chave ID.
	$scope.order = 'id';
	$scope.reverse = true;

	// a variavel using filter entra em ação a partir do momento que o usuário processa a filtragem. A filtragem é realizada por ajax.
	$scope.usingfilter = false;

	// a variavel error executa apenas no login, retornando os erros de acesso
	$scope.error = [];

	// filtragem dos resultados
	$scope.filtersubmit = function($event){
		$event.preventDefault();
		if(!($scope.send.category) && !($scope.send.product)){
			var url = 'model/'+$scope.send.model+'/get';
			$scope.usingfilter = false;
		}else{

			var url = 'model/'+$scope.send.model+'/filter';
			$scope.usingfilter = true;
		}
		$scope.processfilter(url);
	};

	// limpando a consulta
	$scope.filterclear = function(){
		$scope.send.category = "";
		$scope.send.product = "";
		var url = 'model/'+$scope.send.model+'/get';
		$scope.usingfilter = false;
		$scope.processfilter(url);
	};

	// executando a função de filtragem
	$scope.processfilter = function(url, push){
		$scope.send.page = 0;
		$http.post(url, $scope.send).then(function success(response){
			$scope.send.loading = false;
			if(push){
				// $scope.dados.push(response.data.data);
				var size = response.data.data.length;
				for (var i = 0; i < size; i++) {
					$scope.dados.push(response.data.data[i]);
				}
			}else{
				$scope.dados = response.data.data;
			}
			$scope.send.pages = response.data.pages;
			$scope.send.total = response.data.total;
		});
	}

	// executando a paginação de resultados
	$scope.page = function(model){
		$scope.send.page = $scope.send.page + 1;
		if($scope.usingfilter){
			$scope.processfilter('model/'+$scope.send.model+'/filter', true);
		}else{
			$scope.getdados($scope.send.page);
		}
	};

	// executando o login
	
	$scope.loginsubmit = function($event){
		$event.preventDefault();
		$http.post('model/login', $scope.form).then(function success(response){
			if(parseInt(response.data.data.status, 10) === 0){
				window.location.href = "dashboard";
			}else{
				$scope.error.title = response.data.data.title;
				$scope.error.text = response.data.data.text;
				$scope.error.class = true;
			}	
		});
	};

	// aplicando o editor ngWysiwyg
	$scope.editorConfig = {
		sanitize: false,
		toolbar: [
			{ name: 'basicStyling', items: ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '-', 'leftAlign', 'centerAlign', 'rightAlign', 'blockJustify', '-'] },
			{ name: 'paragraph', items: ['orderedList', 'unorderedList', 'outdent', 'indent', '-'] },
			{ name: 'doers', items: ['removeFormatting', 'undo', 'redo', '-'] },
			{ name: 'links', items: ['link', 'unlink']}
		]
	};

	// limpa o input de arquivo após o download
	$scope.resetfile = function(){
		if(document.getElementById('file')){
			document.getElementById('file').value = "";
		}
	};

	// realiza a busca dos dados no banco
	$scope.getdados = function(page, refresh){
		$scope.send.loading = true;
		$scope.send.page = page;
		$http.post('model/'+$scope.send.model+'/get', $scope.send).then(function success(response){
			if(response.data.total > 0){
				$timeout(function(){
					if(refresh){
						$scope.dados = response.data.data;
					}else{
						var qtd = response.data.data.length;
						for (var i = 0; i < qtd; i++) {
							$scope.dados.push(response.data.data[i]);
						}
					}
					
					$scope.send.pages = response.data.pages;
					$scope.send.total = response.data.total;
					$scope.send.loading = false;
				}, 500);
			}else{
				$scope.send.pages = response.data.pages;
				$scope.send.total = response.data.total;
				$scope.send.loading = false;
			}
		});
	};

	// salvar os formulários no banco
	$scope.save = function($event){
		$event.preventDefault();
		$scope.form.loading = true;
		var _url = "";
		if($scope.send.action == 'add'){
			_url = $scope.form.data.url+'model/'+$scope.send.model+'/save';
		}else{
			_url = $scope.form.data.url+'model/'+$scope.send.model+'/update';
		}
		$http({
			method: 'POST',
			url: _url,
			withCredentials: true,
			transformRequest: angular.identity,
			headers: {
				'Content-type': undefined
			},
			transformRequest: function(data){
				var formId = document.getElementById('form-save');
				var formData = new FormData(formId);
				formData.append('form', angular.toJson(data.form));
				if($scope.form.data.file){
					formData.append('file', $scope.form.data.file);
				}
				return formData;
			},
			data: { form: $scope.form, files: $scope.files }
		}).then(function success(response){
			if(response.data.status === 1){
				$scope.form.status = 1;
				if($scope.form.id === 0){
					$scope.form.data = {};
					$scope.ticketform.$setPristine();
					$scope.ticketform.$setUntouched();
					$scope.resetfile();
				}
				$scope.form.success = true;
				$scope.form.loading = false;
			}
		});
	};

	// recarrega a página
	$scope.reloadpage = function($event){
		$event.preventDefault();
		window.location.reload();
	};

	// fechar ticket
	$scope.closeticket = {};
	$scope.closeticket.confirm = false;
	$scope.closeticket.id = 0;
	$scope.closeticket.open = function(id){
		$scope.closeticket.id = id;
		$scope.closeticket.confirm = true;
	};
	$scope.closeticket.send = function($event){
		$http.post($scope.form.data.url+'model/'+$scope.send.model+'/update-status', {id: $scope.closeticket.id}).then(function success(response){
			console.log(response);
			window.location.reload();
		});
	};
}]);

