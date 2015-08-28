<?php


	include('mysqlconnect.php');
	
	$ardata = $_POST['ardata'];
	$data = json_decode($ardata);
	$type = $_POST['type'];

	$table_name = "meals_".$type ;


	mysql_query("DELETE FROM $table_name WHERE 1");
	
	$cnt = 0 ;
	
	foreach($data as $value)
	{
		$a = $value[0];
		$b = $value[1];
		$qry = "INSERT INTO $table_name (idx, name, price) VALUES ($cnt, '$a','$b')";
		mysql_query($qry);
		
		$cnt = $cnt + 1;
	}

?>