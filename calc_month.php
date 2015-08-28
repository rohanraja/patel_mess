<?php

	include('mysqlconnect.php');


function createDateRangeArray($strDateFrom,$strDateTo)
{
	// takes two dates formatted as YYYY-MM-DD and creates an
	// inclusive array of the dates between the from and to dates.

	// could test validity of dates here but I'm already doing
	// that in the main script

	$aryRange=array();

	$iDateFrom=mktime(1,0,0,substr($strDateFrom,5,2),     substr($strDateFrom,8,2),substr($strDateFrom,0,4));
	$iDateTo=mktime(1,0,0,substr($strDateTo,5,2),     substr($strDateTo,8,2),substr($strDateTo,0,4));

	if ($iDateTo>=$iDateFrom)
	{
		array_push($aryRange,date('N',$iDateFrom) - 1); // first entry
		while ($iDateFrom<$iDateTo)
		{
			$iDateFrom+=86400; // add 24 hours
			array_push($aryRange,date('N',$iDateFrom) - 1);
		}
	}
	
	array_pop($aryRange);
	
	return $aryRange;
}




function get_total_cpd($carr, $type, $dayno)
{

	$c1 = str_split($carr);

	$table_name = "meals_".$type ;

	$result_db = mysql_query("SELECT * FROM $table_name ORDER BY idx ASC");



	$total = 0;
	$cnt = 0;
	
	foreach($c1 as $val) {


		$row = mysql_fetch_array($result_db);


		 if($cnt>= 4*$dayno && $cnt< (4*$dayno + 4))
		 $total = $total + $val*$row['price'];

		$cnt = $cnt + 1;

	}

	return $total;

}

function get_total_cpd_db($carr, $type, $dayno, $dbnme)
{

	$c1 = str_split($carr);

	$table_name = $dbnme.".meals_".$type ;

	$result_db = mysql_query("SELECT * FROM $table_name ORDER BY idx ASC");



	$total = 0;
	$cnt = 0;
	
	foreach($c1 as $val) {


		$row = mysql_fetch_array($result_db);


		 if($cnt>= 4*$dayno && $cnt< (4*$dayno + 4))
		 $total = $total + $val*$row['price'];

		$cnt = $cnt + 1;

	}

	return $total;

}



?>
