<?php

include ('../mysqlconnect.php');



$id=$_GET['id'];


$tbl="pat_mess.students"; // Table name


$result_names = mysql_query("SELECT * FROM $tbl WHERE staff_ID LIKE '$id';");

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