<?php

include ('../mysqlconnect.php');



$id=$_GET['id'];
$pass = $_GET['pass'];


$tbl="pat_mess.w_staff"; // Table name


$result_names = mysql_query("SELECT * FROM $tbl WHERE staff_ID LIKE '$id' AND password LIKE '$pass';");

$count=mysql_num_rows($result_names);



if($count==0)
	echo 0;


else
{
	
	$row = mysql_fetch_row($result_names);
	
	if($row[4] == 1)
		echo 2;
	else
		echo 1;
	
	
}




?>