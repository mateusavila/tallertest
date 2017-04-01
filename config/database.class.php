<?php 
include "conf.php";
	class Database{

		private $database;
		private $user;
		private $password;
		private $server;
		function __construct() {
			$this->database = DATABASE;
			$this->server = SERVERDB;
			$this->user = USERNAME;
			$this->password = PASSWORD;
			$this->connection = mysqli_connect($this->server, $this->user, $this->password) or die(mysqli_error());
			if($this->connection){
				mysqli_select_db($this->connection, $this->database);
				mysqli_set_charset($this->connection, 'utf8');
				mysqli_query( $this->connection, "SET NAMES 'utf8'");
				mysqli_query( $this->connection, "SET character_set_connection=utf8");
				mysqli_query( $this->connection, "SET character_set_client=utf8");
				mysqli_query( $this->connection, "SET character_set_results=utf8");
			}else{
				mysqli_error(mysqli_errno());
			}
		}
		public function getConnection(){
			return $this->connection;
		}
		public function disconnect(){
			// mysqli_free_result($ressource);
			mysqli_close($this->connection);
		}
		public function select($sql){
			$select = mysqli_query($this->connection, $sql) or die (mysqli_error($this->connection));
			return $select;
		}
		public function fetch_array($result_set){
			return mysqli_fetch_array($result_set, MYSQLI_BOTH);
		}
		public function fetch_obj($result_set){
			return mysqli_fetch_object($result_set);
		}
		public function count($database){
			$select = $this->select($database);
			$quantidade = mysqli_num_rows( $select);
			return $quantidade;
		}
		public function convertDateToString($date){
			$d = explode("-", $date);
			$newdata = "$d[2]/$d[1]/$d[0]";
			return $newdata;
		}
		public function convertStringToDate($date){
			$d = explode("/", $date);
			$newdata = "$d[2]-$d[1]-$d[0]";
			return $newdata;
		}
		public function is_ajax(){
			if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
				return true;
			}else{
				return false;
			}
		}
		public function validateDate($date){
			$d = DateTime::createFromFormat('Y-m-d', $date);
			return $d && $d->format('Y-m-d') == $date;
		}

		// deletar imagem
		
		public function returnObject($query, $arr = array()){
			$query = $this->select($query);
			$ob = array();
			while($obj = $this->fetch_obj($query)){
				foreach ($arr as $k) {
					$ob[$k] = $obj->$k;
				}
			}
			return $ob;
		}
		public function returnObjectArray($query, $arr = array()){
			$query = $this->select($query);
			$ob = array();
			$num = 0;
			while($obj = $this->fetch_obj($query)){
				foreach ($arr as $k) {
					$ob[$num][$k] = $obj->$k;
				}
				$num++;
			}
			return $ob;
		}
		public function get_last_id(){
			return mysqli_insert_id($this->getConnection());
		}
		public function clear($str){
			return mysqli_real_escape_string($this->connection, $str);
		}
		public function upload($file){
			if($file['size'] > 0 && $file['error'] == 0){
				$file_basename = substr($file['name'], 0, strripos($file['name'], '.'));
				$file_ext = substr($file['name'], strripos($file['name'], '.'));
				$rename = uniqid()."_".date('ymdHisu')."_".mt_rand(1, 99999)."".$file_ext;
				move_uploaded_file($file['tmp_name'], "images/".$rename);
			}else{
				$rename = "";
			}
			return $rename;
		}
	}