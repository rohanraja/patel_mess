<?php

include ('../mysqlconnect.php');



$id=$_GET['id'];
$pass = $_GET['pass'];
$passnew = $_GET['newpass'];


$tbl="pat_mess.students"; // Table name


$result_names = mysql_query("SELECT * FROM $tbl WHERE staff_ID LIKE '$id' AND password LIKE '$pass';");

$count=mysql_num_rows($result_names);



if($count==0)
	echo 0;


else
{

	mysql_query("UPDATE $tbl SET password = '$passnew' WHERE staff_ID LIKE '$id' ;");
	echo 1;
	
}




?>