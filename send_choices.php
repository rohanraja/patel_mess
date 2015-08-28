<?php

	include('mysqlconnect.php');


$student_id = $_GET['sid'];

$result = mysql_query("SELECT * FROM choices WHERE s_id = '".$student_id."';");

if(mysql_num_rows($result))
	$row = mysql_fetch_row($result);
else
{
	$row = array();
	$row[] = '';
	$row[] = '0000000000000000000000000000';
	$row[] = '0000000000000000000000000000';
	$row[] = '0000000000000000000000000000';
	$row[] = '0000000000000000000000000000';	
	}


echo json_encode($row);
	

?>