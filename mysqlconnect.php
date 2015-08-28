<?php
/*
 * DATABASE CONNECTION
 */

// DATABASE: Connection variables
$db_host		= "127.0.0.1";
$db_name_head	= "pat_mess";
$db_username	= "root";
$db_password	= "root";



$month = date('n');
$year = date('y');
$curday = date('j');

if($curday>25)
	$month = $month + 1;

//$month = 9;
$db_name = $db_name_head.'_'.$month.'_'.$year ;

$prevmonth = $month - 1;

$prev_db = $db_name_head.'_'.$prevmonth.'_'.$year ;


// DATABASE: Try to connect
if (!$db_connect = mysql_connect($db_host, $db_username, $db_password))
	die('Unable to connect to MySQL.');


 

//if (!$db_select = mysql_select_db($db_name, $db_connect))
// 	die('Unable to select database');
// 	
// 	
	if (!$db_select = mysql_select_db($db_name, $db_connect))
		{
	
	
		mysql_query("CREATE DATABASE $db_name");
		$db_select = mysql_select_db($db_name, $db_connect);
	
	
	
		mysql_query("CREATE TABLE `choices` (
  `s_id` varchar(20) NOT NULL,
  `choices_b` varchar(50) NOT NULL,
  `choices_l` varchar(50) NOT NULL,
  `choices_s` varchar(50) NOT NULL,
  `choices_d` varchar(50) NOT NULL,
  `cost_per_week_nobasic` float NOT NULL,
  `cost_month_nobasic` float NOT NULL,
  `time_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;"); 
	
	
		mysql_query("CREATE TABLE `meals_b` (
  `idx` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;");

		mysql_query("CREATE TABLE `meals_l` (
		  `idx` int(10) NOT NULL,
		  `name` varchar(100) NOT NULL,
		  `price` double NOT NULL
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;");
		
		mysql_query("CREATE TABLE `meals_s` (
		  `idx` int(10) NOT NULL,
		  `name` varchar(100) NOT NULL,
		  `price` double NOT NULL
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;");
		
		mysql_query("CREATE TABLE `meals_d` (
		  `idx` int(10) NOT NULL,
		  `name` varchar(100) NOT NULL,
		  `price` double NOT NULL
		) ENGINE=InnoDB DEFAULT CHARSET=latin1;");
	
	
		mysql_query("INSERT INTO meals_b (SELECT * FROM $prev_db.meals_b)");
		mysql_query("INSERT INTO meals_l (SELECT * FROM $prev_db.meals_l)");
		mysql_query("INSERT INTO meals_s (SELECT * FROM $prev_db.meals_s)");
		mysql_query("INSERT INTO meals_d (SELECT * FROM $prev_db.meals_d)");
		mysql_query("INSERT INTO choices (SELECT * FROM $prev_db.choices)");
		
		
		// mysql_query("INSERT into $db_name.w_resrc (SELECT * FROM wewaic_S1_12_13.w_resrc)") ;
		// mysql_query("INSERT into $db_name.w_admin (SELECT * FROM wewaic_S1_12_13.w_admin)") ;
		// mysql_query("INSERT into $db_name.w_superv (SELECT * FROM wewaic_S1_12_13.w_superv)") ;
	
	
	}
	
	





?>
