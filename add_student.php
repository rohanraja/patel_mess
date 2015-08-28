<?php

include ('mysqlconnect.php');



$name = $_POST['name'];
$rollno = $_POST['rollno'];
$roomno = $_POST['roomno'];
$pass = $_POST['pass'];


$tbl="pat_mess.students"; // Table name


$result_names = mysql_query("SELECT * FROM $tbl WHERE staff_ID LIKE '$rollno' ;");

$count=mysql_num_rows($result_names);


if($count==0)
{	
	$qry = "INSERT INTO $tbl (staff_ID, room_no, name, password) VALUES ('$rollno','$roomno', '$name','$pass')";
	mysql_query($qry);

	echo 'REGISTRATION SUCCESSFULL ' ;
	header("Location: index.php");
die();
}
else
{
	
	echo 'ROLL NO ALREADY REGISTERED! ' ;
	
	
	
}




?>