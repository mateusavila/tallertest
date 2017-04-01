	
	<script src="<?php echo MAINURL ?>js/angular.js"></script>
	<script src="<?php echo MAINURL ?>js/app.js"></script>
<?php 
	$whitelist = array('127.0.0.1','::1'); 
	if(in_array($_SERVER['REMOTE_ADDR'], $whitelist)){ ?>
	<script type="text/javascript" src="http://localhost:35729/livereload.js?snipver=1"></script>
<?php } ?>
</body>
</html>