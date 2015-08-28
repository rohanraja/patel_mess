<?php

	include('mysqlconnect.php');
	
	include('calc_month.php');


$student_id = $_GET['sid'];

$c1 = $_GET['c1'];
$c2 = $_GET['c2'];
$c3 = $_GET['c3'];
$c4 = $_GET['c4'];



mysql_query("DELETE FROM choices WHERE s_id = '".$student_id."';");


if($student_id)
	mysql_query("INSERT INTO choices (`s_id`, `choices_b`, `choices_l`, `choices_s`, `choices_d`) VALUES ('$student_id','$c1','$c2','$c3','$c4');");


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

$t1 = get_total_cpw($c1, 'b') ;
$t2 = get_total_cpw($c2, 'l') ;
$t3 = get_total_cpw($c3, 's') ;
$t4 = get_total_cpw($c4, 'd') ;


$grtotal = $t1 + $t2 + $t3 + $t4 ; 


mysql_query("UPDATE choices SET `cost_per_week_nobasic` = $grtotal WHERE s_id = '".$student_id."';");

$montharr = (createDateRangeArray(date("Y-m-d", mktime(0, 0, 0, $month, 1, $year)), date("Y-m-d", mktime(0, 0, 0, $month+1, 1, $year))));


$grtotal = 0;


foreach($montharr as $val)
{
	$grtotal = $grtotal + get_total_cpd($c1, 'b', $val);	
}

foreach($montharr as $val)
{
	$grtotal = $grtotal + get_total_cpd($c2, 'l', $val);	
}

foreach($montharr as $val)
{
	$grtotal = $grtotal + get_total_cpd($c3, 's', $val);	
}

foreach($montharr as $val)
{
	$grtotal = $grtotal + get_total_cpd($c4, 'd', $val);	
}




mysql_query("UPDATE choices SET `cost_month_nobasic` = $grtotal WHERE s_id = '".$student_id."';");



echo $grtotal;

?>