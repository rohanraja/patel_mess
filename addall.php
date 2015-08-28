<?php

include("mysqlconnect.php");


$result1 = mysql_query("SELECT * FROM pat_mess.students");

while($row = mysql_fetch_object($result1))
{

		$sid = $row->staff_ID;

		$result = mysql_query("SELECT * FROM `choices` WHERE `s_id` LIKE '$sid'");

		if(!mysql_num_rows($result))
		{

			mysql_query("INSERT INTO `choices` (s_id) VALUES ('$sid') ;");
			echo $sid."<br>";
		}
		else
			echo '';
}

?>