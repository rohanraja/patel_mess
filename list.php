<!DOCTYPE HTML>
<html lang="en">
	<link rel="stylesheet" type="text/css" href="css/calc_edit_final.css" media="all">
	<link rel="stylesheet" type="text/css" href="css/teach_formula.css" media="all">
	<link rel="stylesheet" type="text/css" href="css/super_formula.css" media="all">
	<link rel="stylesheet" type="text/css" href="css/research_formula.css" media="all">
	<link rel="stylesheet" type="text/css" href="css/admin_formula.css" media="all">


<style>

table td img.img-rounded {
	height: 25px;
	position: relative;
	float : right;
	top : 10px;
	right : 10px;

}

table td img.img-rounded {

	filter: grayscale(100%);
	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	filter: grayscale(100%);
	opacity: 0.4;
	content:url('css/img/Delete.png');
}

table td.active img.img-rounded {

	filter: grayscale(0%);
	-webkit-filter: grayscale(0%);
	-moz-filter: grayscale(0%);
	filter: grayscale(0%);
	opacity: 1;

	content:url('css/img/Check-icon.png');

}
table td.active
{

	background-color: #dff0d8 !important;


}


table td
{
	font-size: 16px;
}

table td img
{
	display: none;
}
</style>


<?php require('header_bs.php'); ?>



<!-- <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700' rel='stylesheet' type='text/css' /> -->


<!-- 	<link rel="stylesheet" href="css/calc_edit.css" />
 -->




	<div id="form_output" class="container">

	<div class="row">


	<div class="span3 bs-docs-sidebar " id="nav_menu" style="display:none">
	 	<ul class="nav nav-list bs-docs-sidenav affix-top" >

		  <li style="margin-bottom:20px">
		  		<div style="width:258px; text-align:center; margin-top:30px">	  											  

		  			<b class="element select large" id="cur_date" name="cur_date"
		  				onchange="oncheckchange()" style=
		  				"margin-top: 20px; text-align:center; width:220px; font-size:20px" value="S2 12/13">

		  				<?php
		  				$mydate=getdate(date("U"));
						echo "$mydate[month], $mydate[year]";
						?>

					</b>
		  		</div>
			</li>

		<li onclick="hover_teach()"><a href="#teaching"><i class="icon-chevron-right"></i> Breakfast</a></li>
		<li onclick="hover_super()"><a href="#supervision"><i class="icon-chevron-right"></i> Lunch</a></li>
		<li onclick="hover_research()"><a href="#research"><i class="icon-chevron-right"></i> Snacks </a></li>
		<li onclick="hover_admin()"><a href="#admin"><i class="icon-chevron-right"></i> Dinner </a></li>


		  <li style="margin-bottom:20px">
		  		  				<div style="width:258px; text-align:center; margin-top:30px">



		  		  									<b class="element select large" id="cur_tot" name="cur_tot"
		  		  				onchange="oncheckchange()" style=
		  		  				"margin-top: 20px; text-align:center; width:220px; font-size:20px" value="S2 12/13">
		  TOTAL : Rs 120 per week

		  <br>
		  <br>

		  (Basic Rs 124 per week)

		  </b>
		  		  			  				</div>

		  		  			</li>

		</ul>



	</div>


		<div class="teachForm  span12 " id="resultview">

			<section id="teaching">

				<h2 class="description" for="element_1">Monthly Bill of All Students</h2><p id="li_1">

		<table  id="courses" width="90%" align="middle" class="result"><tbody><tr><td >S.No</td><td>Roll No</td><td>Name</td><td>Amount</td></tr>
		</tbody><tbody>

	<?php 


		include('mysqlconnect.php');


		$result_db = mysql_query("SELECT * FROM choices ORDER BY s_id ASC");
		
		$cnt2 = 1;
		
		while($row = mysql_fetch_array($result_db)) {
		
		
			 $sid = $row['s_id'];
			 $mpay = $row['cost_month_nobasic'] ;
			 
			 $result2 = mysql_query("SELECT name FROM pat_mess.students WHERE staff_ID LIKE '$sid'");
			 $row2 = mysql_fetch_array($result2);
			 
			 $namee = $row2[0] ;
			 
			 echo '<tr><td>'.$cnt2.'</td><td>'.$sid.'</td><td>'.$namee.'</td><td>Rs. '.$mpay.'</td></tr>';


			$cnt2 = $cnt2 + 1;
			
		
		
		}

	?>	

		</tbody></table>

	<br><h4 class="total text-success">TOTAL : Rs <span id="totteach">0</span> per week (<span id="perteach"></span>%)</h4>
</p>


</section>

	<br>

	<div id="sumdiv">



<hr>

</div>



</div>

</div>

</div>


<script src="assets/js/jquery.js"></script>
 <script src="js/jquery-ui.js"></script>
 <script src="js/jquery.cookie.js"></script>
 <script type="text/javascript" src="js/jsapi.js"></script>


<!--  <script src="js/formula_calc_edit.js"></script>		
 --> 
 <script src="js/list.js"></script>
  <script src="js/editing.js"></script>
 <!--  <script src="js/session_manager.js"></script>

	<!-- Le javascript
	================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
<!--  	<script src="assets/js/jquery.js"></script>
 -->	


 	<script src="assets/js/bootstrap-transition.js"></script>
	<script src="assets/js/bootstrap-alert.js"></script>
	<script src="assets/js/bootstrap-modal.js"></script>
	<script src="assets/js/bootstrap-dropdown.js"></script>
	<script src="assets/js/bootstrap-scrollspy.js"></script>
	<script src="assets/js/bootstrap-tab.js"></script>
	<script src="assets/js/bootstrap-tooltip.js"></script>
	<script src="assets/js/bootstrap-popover.js"></script>
	<script src="assets/js/bootstrap-button.js"></script>
	<script src="assets/js/bootstrap-collapse.js"></script>
	<script src="assets/js/bootstrap-carousel.js"></script>
	<script src="assets/js/bootstrap-typeahead.js"></script>
	<script src="assets/js/bootstrap-affix.js"></script>

	<script src="assets/js/holder/holder.js"></script>
	<script src="assets/js/google-code-prettify/prettify.js"></script>

	<script src="assets/js/application.js"></script>	
	<script>

	</script>


	<style>
	input
	{
		background-color: transparent;
	}

	td
	{
		text-align: center !important;
	}
	
	th
	{
		text-align: center !important;
	}
	</style>

	<script>

		$('table').addClass('table');
		$('table').addClass('table-striped');
		$('table').addClass('');
		$('table').addClass('table-bordered');
		$('td').addClass('text-center');


		$('.total').css('display','none');
		
	</script>

	<footer class="footer" style="z-index:100">
		<div class="container">
			<p>All contents are (c) Copyright 2013 - 2014, Patel Hall of Residence, Indian Institute of Technology, Kharagpur. All rights Reserved 

			<br>
			Created by : 
			<b>Rohan Raja : rohanraja9@gmail.com<br>
				Jot Sarup : jotsarup@gmail.com</b>

				</p>
		</div>
	</footer>

</body></html>