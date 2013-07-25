<?php
/*
 * DATABASE CONNECTION
 */

// DATABASE: Connection variables
$db_host		= "127.0.0.1";
$db_name		= "pat_mess";
$db_username	= "root";
$db_password	= "root";



$month = date('n');
$year = date('y');

$db_name = $db_name.'_'.$month.'_'.$year ;


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
	
	
	
		mysql_query("CREATE TABLE `w_superv` (
		  `staff_ID` varchar(5) NOT NULL,
		  `sprv_level` varchar(2) NOT NULL,
		  `sprv_role` varchar(2) NOT NULL,
		  `sprv_num` int(2) NOT NULL,
		  PRIMARY KEY (`staff_ID`,`sprv_level`,`sprv_role`)
		) ENGINE=MyISAM DEFAULT CHARSET=latin1;"); 
	
	
		mysql_query("CREATE TABLE `w_admin` (
		  `staff_ID` varchar(5) NOT NULL,
		  `adm_pos` decimal(5,2) DEFAULT NULL,
		  `posName` varchar(120) NOT NULL,
		  `adm_others` decimal(5,2) DEFAULT NULL,
		  `otherLists` varchar(250) NOT NULL,
		  `adm_ConsComm` decimal(5,2) DEFAULT NULL,
		  PRIMARY KEY (`staff_ID`)
		) ENGINE=MyISAM DEFAULT CHARSET=latin1;");
	
	
		mysql_query("CREATE TABLE `w_resrc` (
		  `projSeq` int(5) NOT NULL AUTO_INCREMENT,
		  `staff_ID` varchar(5) NOT NULL,
		  `projName` text NOT NULL,
		  `res_size` varchar(2) DEFAULT '0',
		  `res_type` varchar(2) DEFAULT '0',
		  `res_load` decimal(5,2) DEFAULT NULL,
		  PRIMARY KEY (`projSeq`,`staff_ID`)
		) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=376 ;");
	
		mysql_query("CREATE TABLE `w_teach` (
		  `staff_ID` varchar(5) NOT NULL,
		  `course_code` varchar(7) NOT NULL DEFAULT '',
		  `num_stds` int(2) DEFAULT NULL,
		  `lect_hrs` decimal(5,2) DEFAULT NULL,
		  `lect_num_wks` int(2) DEFAULT NULL,
		  `tuts_num_perWk` decimal(5,2) DEFAULT NULL,
		  `labs_num_perWk` decimal(5,2) DEFAULT NULL,
		  `lec_burden_frac` decimal(5,2) DEFAULT NULL,
		  `sem` varchar(12) NOT NULL,
		  PRIMARY KEY (`staff_ID`,`course_code`,`sem`)
		) ENGINE=MyISAM DEFAULT CHARSET=latin1;");
		
		
		
		// mysql_query("INSERT into $db_name.w_resrc (SELECT * FROM wewaic_S1_12_13.w_resrc)") ;
		// mysql_query("INSERT into $db_name.w_admin (SELECT * FROM wewaic_S1_12_13.w_admin)") ;
		// mysql_query("INSERT into $db_name.w_superv (SELECT * FROM wewaic_S1_12_13.w_superv)") ;
	
	
	}
	
	





?>