<?php

	include('mysqlconnect.php');



function get_total_cpw($carr, $type)
{
	
	$c1 = str_split($carr);
		
	$table_name = "meals_".$type ;
	
	$result_db = mysql_query("SELECT * FROM $table_name ORDER BY idx ASC");
	
	
	
	$total = 0;
	
	foreach($c1 as $val) {
	
	
		$row = mysql_fetch_array($result_db);
		
		
	
		 $total = $total + $val*$row['price'];
		
	
	
	}
	
	return $total;
	
}
			  	
?>