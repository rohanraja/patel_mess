<?php

include ('../mysqlconnect.php');



$q=$_GET['q']; 

$tbl="pat_mess.w_staff"; // Table name


$result_names = mysql_query("SELECT * FROM $tbl WHERE staff_ID = '$q';");

$f = mysql_fetch_array($result_names);

print $f['staff_Name'];



?>