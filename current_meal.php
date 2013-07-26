<?php

	include('connection_manager.php');

function create_item_td($f_name, $f_price)
{
	
	if(!$f_price)
		return '<td onclick="" class="no_entry" style=""><b class="">None'.'</b><a href="#" ><img src="css/img/Check-icon.png" class="img-rounded"></a><br>Rs <span class="i_price">0'.'</span></td>';
		
	return '<td onclick="on_td_click(this)" class="" style=""><b class="">'.$f_name.'</b><a href="#" ><img src="css/img/Check-icon.png" class="img-rounded"></a><br>Rs <span class="i_price">'.$f_price.'</span></td>';


}

function create_item_tr($dayy, $meal, $i)
{
	$out = '<tr><td>'.$dayy.'</td>';
		
	$tmp = create_item_td($meal[4*$i][0], $meal[4*$i][1]);
	$out = $out.$tmp;	

	$tmp = create_item_td($meal[4*$i+1][0], $meal[4*$i+1][1]);
	$out = $out.$tmp;	

	$tmp = create_item_td($meal[4*$i+2][0], $meal[4*$i+2][1]);
	$out = $out.$tmp;
	
	$tmp = create_item_td($meal[4*$i+3][0], $meal[4*$i+3][1]);
	$out = $out.$tmp;
							
	$out = $out.'</tr>';	
	return $out ;
}


function do_table($type)
{
	$day  = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
	
	$tbbname = "meals_".$type ;
	
			$result_db = mysql_query("SELECT * FROM $tbbname ORDER BY idx ASC");
	
			while ($row = mysql_fetch_array($result_db)) {
	
	  			$tmparr = array();
	
	  			array_push($tmparr, $row['name']);
	  			array_push($tmparr, $row['price']);
	
	  			$meals_b[] = $tmparr ;
	
		  	}
			  
			  
			  
			  	for($i=0; $i<7;$i++){
	
					echo create_item_tr($day[$i], $meals_b,$i);
				}
}


?>