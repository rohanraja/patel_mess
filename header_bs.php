<head>
	<meta charset="utf-8">
	<title>WeWaIC</title>

	<!-- Le styles -->
	<link href="assets/css/bootstrap.css" rel="stylesheet">
	<link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
	<link href="assets/css/docs.css" rel="stylesheet">
	<link href="assets/js/google-code-prettify/prettify.css" rel="stylesheet">
	
	<script src="js/common_bs.js"></script>
	
	<style>
	.container, .navbar, header

	{
		opacity: 0.3;
	}
	
	
	#top_main_nav li a
	{
		font-size: 15px;
		padding-top: 15px !important ;
	}
	</style>



<style>
table
{
	text-align: center;
}

.fixedcenter { 
	/* fixed position a zero-height full width container */
	position: fixed;

	height: 70px;
	text-align: center;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto; /* this requires a fixed size */
	z-index: 1;
}

.container > div {
	/* make the block inline */
	display: inline-block;
	/* reset container's center alignment */
	text-align: left;
}

</style>


	
		<title>Your Calculated WeWaIC Index</title>
	<!-- 	<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/jsapi.js"></script> -->
		<link rel="stylesheet" href="css/jquery-ui.css" />


</head>




<div class="fixedcenter">
	<img src="css/img/loading_home.gif" style="width:70px; height:70px">
	
	<h3>Loading Graphs</h3>
</div>


<body data-spy="scroll" data-target=".bs-docs-sidebar">

	<div class="navbar navbar-inverse navbar-fixed-top">

	  <div class="navbar-inner">

		<div class="container">

		  <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		  </button>
<!-- 		  <a class="brand" href="./index.html">FCSIT</a>
 -->		  
 
 		<div class="nav-collapse collapse" id="top_main_nav">
			<ul class="nav">
<!-- 			  <li class="">
				<a href="./index.html">Home</a>
			  </li> -->
<!-- 			  <li id="li_o">
				<a href="./onetime.php">One Time form</a>
			  </li> -->
			  <li id="li_v">
				<a href="./calc_edit_final.php">My Mess Options</a>
			  </li>
			  
			  <li id="li_v">
			  	<a href="./options_edit.php">Bubbe Ka Page</a>
			    </li>

			</ul>
		  </div>
		  
		  
		  
		  <div class="brand" style="cursor:hand;">
			
<!-- 		  	<a href="#" class="btn dropdown-toggle" data-toggle="dropdown">My Account</a>
			 <ul class="dropdown-menu">
		  	   <li><a href="#">Logout</a></li>

		  	 </ul> -->
		  	 
		  	 <div class="dropdown" id="accdropmenu">
		  	 <a class="dropdown-toggle" id="drop_acc" role="button" data-toggle="dropdown" href="#"></a>		  	

		  	 <ul id="menu1" class="dropdown-menu" role="menu" aria-labelledby="drop_acc" style="font-size:14px">
		  	   <li role="presentation"><a role="menuitem" tabindex="-1" href="./change_pass.php" onclick="on_changepass_click()">Change Password</a></li>
		  	   <li role="presentation" class="divider"></li>
		  	   <li role="presentation"><a role="menuitem" tabindex="-1" href="#" onclick="on_logout_click()" id="logout_a">Logout</a></li>
		  	 </ul>
		 </div>
		  	 
		  </div>
		  
		</div>
	  </div>
	</div>


	<header class="jumbotron subhead" id="overview">
	  <div class="container">

		<h3><a>Patel Hall of Residence : They dream we dare</a></h3>
		<h2>Mess Options</h2>

	  </div>
	</header>
	
	
	
	<a href="#myModal" role="button" class="btn" data-toggle="modal" id="loginmodaltog" style="display:none">Launch demo modal</a>
	
	<!-- Modal -->
	<div id="myModal" style="" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-header">
		<h3 id="myModalLabel">Login to your Account</h3>
	  </div>
	  <div class="modal-body">
		
		
		<form class="form-horizontal" style="margin-top:30px">
		<fieldset>
		
		<!-- Form Name -->

		
		<!-- Text input-->
		<div class="control-group" style=""> 
		  <label class="control-label" for="login_sid">Staff ID : </label>
		  <div class="controls">
			<input id="login_sid" name="login_sid" type="text" placeholder="Enter your ID" class="input-medium" required="" style="" onKeyPress="submitenter(this,event)">
		
		  </div>
		</div>
		
		<!-- Password input-->
		<div class="control-group">
		  <label class="control-label" for="login_pass">Password : </label>
		  <div class="controls">
			<input id="login_pass" name="login_pass" type="password" placeholder="Enter your Password" class="input-medium" required="" onKeyPress="submitenter(this,event)">
		
		  </div>
		</div>
		
		</fieldset>
		</form>



	  </div>
	  <div class="modal-footer">
		  <div class="alert alert-info" style="position : absolute">
		   Best viewed in Google Chrome
		  </div>
		<button class="btn btn-primary" onclick="on_login_click()">Login</button>
	  </div>
	</div>




