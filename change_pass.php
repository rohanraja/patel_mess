<!DOCTYPE html>
<html lang="en">

	<?php require('header_bs.php');?>
	<style type="text/css">
		thead:hover{
				curson : hand;
			}

			.clearable{
				position:relative;
				font-size : 20px;
			}
			.data_field{
				//padding-right:17px; /* add space for the 'x' icon*/
				text-align:center;
				font-size : 20px;
				margin-top : 10px; font-size : 20px;
			}
			span.icon_clear{
				position:absolute;
				right:10px;
				top : 6px;    
				display:none;

				/* now go with the styling */
				cursor:pointer;
				font: bold 1em sans-serif;
				color:#38468F;  
				}
				span.icon_clear:hover{
					color:#f52;
				}
	</style>
	
	<link href="css/masterlist.css" rel="stylesheet">
	<link href="css/masterlist_compare.css" rel="stylesheet">


<body id="main_body">
	
	<div class="container" id="form_output">
		<div class="teachForm row" style="">

			
			<div class="span8" id="resultview">

			<form class="form-horizontal" style="margin-top:30px" onsubmit="">
			<fieldset>
			
			<!-- Form Name -->
			
			<!-- Password input-->
			<div class="control-group">
			  <label class="control-label" for="old_login_pass">Old Password : </label>
			  <div class="controls">
				<input id="old_login_pass" name="old_login_pass" type="password" placeholder="Enter your Old Password" class="input-large" required="">
			
			  </div>
			</div>

			
			<!-- Password input-->
			<div class="control-group">
			  <label class="control-label" for="new_login_pass">New Password : </label>
			  <div class="controls">
				<input id="new_login_pass" name="new_login_pass" type="password" placeholder="Enter your New Password" class="input-large" required="">
			
			  </div>
			</div>
			
			
			

			
			
			</fieldset>
			</form>
			<!-- Button -->
			<div class="control-group" style="position:relative; margin-left:180px">
			  <label class="control-label" for="changeconfirm"></label>
			  <div class="controls">
				<button id="changeconfirm" name="changeconfirm" class="btn btn-primary" onclick="on_change_confirm()">Confirm</button>
			  </div>
			</div>
			
			</div>
		</div>

	</div>
</div>
	

	
	<script src="assets/js/jquery.js"></script> 
	<script src="js/jsapi.js" type="text/javascript"></script> 
	<script src="js/jquery-ui.js"></script>

	<script>
	
				$('#li_m').next().addClass('active');
				$('#overview h2').html('Masterlist : List of each Faculty Members\' Report ');
	
	
	</script>		
		
	
	
	<script src="js/jquery.cookie.js"></script>
	
	
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



	 <!-- Placed at the end of the document so the pages load faster -->
	 
	 
	 <script src="js/change_pass.js"></script> 
	 
	 
	 

</body>
</html>
	<footer class="footer" style="z-index:100">
		<div class="container">
			<p>All contents are (c) Copyright 2013 - 2014, Patel Hall of Residence, Indian Institute of Technology, Kharagpur. All rights Reserved 
			
			<br>
			Created by : 
			<a href="#roh_modal" role="button" class="" data-toggle="modal"><b>Rohan Raja : rohanraja9@gmail.com</a><br>
				<a href="#jot_modal" role="button" class="" data-toggle="modal">Jot Sarup : sarup.jot@gmail.com</a></b>
			
				</p>
		</div>
	</footer>