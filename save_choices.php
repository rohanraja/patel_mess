<?php

	include('mysqlconnect.php');


$student_id = $_GET['sid'];

$c1 = $_GET['c1'];
$c2 = $_GET['c2'];
$c3 = $_GET['c3'];
$c4 = $_GET['c4'];



mysql_query("DELETE FROM choices WHERE s_id = '".$student_id."';");

mysql_query("INSERT INTO choices (`s_id`, `choices_b`, `choices_l`, `choices_s`, `choices_d`) VALUES ('$student_id','$c1','$c2','$c3','$c4');");

?>