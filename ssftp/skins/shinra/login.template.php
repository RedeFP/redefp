<<<<<<< HEAD
<?php defined("NET2FTP") or die("Direct access to this location is not allowed."); ?>
<!-- Template /skins/shinra/login.template.php begin -->
<?php 
if ($net2ftp_settings["net2ftpdotcom"] == "yes") {
	require_once($net2ftp_globals["application_skinsdir"] . "/" . $net2ftp_globals["skin"] . "/login_n2fcom.template.php"); 
}
else {
	require_once($net2ftp_globals["application_skinsdir"] . "/" . $net2ftp_globals["skin"] . "/login_other.template.php"); 
}
?>
<!-- Template /skins/shinra/login.template.php end -->
=======
<?php defined("NET2FTP") or die("Direct access to this location is not allowed."); ?>
<!-- Template /skins/shinra/login.template.php begin -->
<?php 
if ($net2ftp_settings["net2ftpdotcom"] == "yes") {
	require_once($net2ftp_globals["application_skinsdir"] . "/" . $net2ftp_globals["skin"] . "/login_n2fcom.template.php"); 
}
else {
	require_once($net2ftp_globals["application_skinsdir"] . "/" . $net2ftp_globals["skin"] . "/login_other.template.php"); 
}
?>
<!-- Template /skins/shinra/login.template.php end -->
>>>>>>> 6c5a0eae472b47947e37c523b6389aff713b93b4
