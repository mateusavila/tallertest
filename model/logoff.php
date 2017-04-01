<?php
include "config/conf.php";
session_start();
$_SESSION = array();
session_destroy();
ob_end_clean();
session_start();
header("Location: ".MAINURL);