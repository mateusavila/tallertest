<?php $active = $_GET['link']; ?>
			<nav>
				<a href="<?php echo MAINURL ?>dashboard" class="<?php echo ($active == 'dashboard') ? 'active' : '' ?>">Dashboard</a>
				<a href="<?php echo MAINURL ?>model/logoff" class="logoff">Logoff</a>
			</nav>
	
