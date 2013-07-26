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
</style>


<?php require('header_bs.php'); ?>



<!-- <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700' rel='stylesheet' type='text/css' /> -->


<!-- 	<link rel="stylesheet" href="css/calc_edit.css" />
 -->




	<div id="form_output" class="container">
		
	<div class="row">
		
	
	<div class="span3 bs-docs-sidebar " id="nav_menu">
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
		  TOTAL : Rs <span id="tot_fix">56</span> per week
		  
		  <br>
		  <br>
		  
		  (Basic Rs 56 per week)
		  
		  </b>
		  		  			  				</div>
		  
		  		  			</li>


		<li onclick="hover_admin()">		  		<div style="width:258px; text-align:center; margin-top:30px">	  											  
		  		  
		  		  			<b class="element select large">
<button class="btn btn-primary btn-large" onclick="get_and_send_choices()">Save</button>
		  		
		  					</b>
		  		  		</div></li>
		</ul>
		
		

	</div>


		<div class="teachForm  span9 " id="resultview">

			<section id="teaching">
				
				<h2 class="description" for="element_1">Breakfast</h2><p id="li_1">

		<table  id="courses" width="90%" align="middle" class="result"><tbody><tr><td >Day</td><td>Meal 1</td><td>Meal 2</td><td>Meal 3</td><td>Meal 4</td></tr>
		</tbody><tbody>
	
	<?php 
	

		include('current_meal.php');


		do_table("b");
	
	?>	

		</tbody></table>

	<br><h4 class="total text-success">TOTAL : Rs <span id="totteach">0</span> per week (<span id="perteach"></span>%)</h4>
</p>
</section>

<hr>

	<section id="supervision">
		<h2 class="description" for="element_3">Lunch</h2><p id="li_2">

	



<table id="superv" width="40%" align="middle" class="result"><tbody><tr><td >Day</td><td>Meal 1</td><td>Meal 2</td><td>Meal 3</td><td>Meal 4</td></tr></tbody><tbody>

	<?php 
		
	
		do_table("l");
	
	?>


		</tbody></table>

		
	
	<br><h4 class="total text-success">TOTAL : Rs <span id="totsuper">0</span> per week (<span id="persuper"></span>%)</h4>

</p>

<hr>	
</section>

<section id="research">
	
<h2 class="description" for="element_4">Snacks</h2>

<br>




	

<p id="li_3">
	
	<table id="researchtb" width="40%" align="middle" class="result"><tbody><tr><td >Day</td><td>Meal 1</td><td>Meal 2</td><td>Meal 3</td><td>Meal 4</td></tr></tbody><tbody>

	<?php 


		do_table("s");

	?>


		</tbody></table>

	<br><h4 class="total text-success">TOTAL : Rs <span id="totresearch">0</span> per week (<span id="perresearch"></span>%)</h4>

</p>




<hr> 
</section>
<section id="admin">
	<h2 class="description" for="element_5">Dinner</h2>
<br>

<!-- 	<input type="checkbox" id="acheck" onchange="a_form.onchangee()" /><label for="acheck" id="ac" class="editbut">Edit</label>
 -->


<p id="li_4"><table id="admintb" width="40%" align="middle" class="result"><tbody><tr><td >Day</td><td>Meal 1</td><td>Meal 2</td><td>Meal 3</td><td>Meal 4</td></tr></tbody><tbody>

<?php 


	do_table("d");

?>


	</tbody></table>

		
	<br><h4 class="total text-success">TOTAL : Rs <span id="totadmin">0</span> per week (<span id="peradmin"></span>%)</h4>
</p>



<hr>
</section>

	<br>
	
	<div id="sumdiv">
	

<h3 class="description" style="color : red">Total Weekly Bill : Rs <span id="totgrand"></span></h3>

<hr>

</div>

<div id="chart_div" style="width: 900px; height: 400px;"></div>


</div>

</div>

</div>


<script src="assets/js/jquery.js"></script>
 <script src="js/jquery-ui.js"></script>
 <script src="js/jquery.cookie.js"></script>
 <script type="text/javascript" src="js/jsapi.js"></script>


<script>
	
	

	
	//console.log("GOOGLE LOAD GERE");
	console.log(google.load("visualization", "1", {packages:["corechart"]}));
	
	


</script>
<!--  <script src="js/formula_calc_edit.js"></script>		
 --> 
 <script src="js/mess_edit.js"></script>
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
		text-align: center;
	}
	</style>
	
	<script>
	
		$('table').addClass('table');
		$('table').addClass('table-striped');
		$('table').addClass('');
		$('table').addClass('table-bordered');
		$('td').addClass('text-center');
		

	
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