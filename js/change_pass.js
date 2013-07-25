


$(document).ready(function() {


	
	onloading_complete();
	
	chksession2();
	



});





function after_login_functions()
{

	
	$('header .container').remove();

	
	
	common_onready();
	
	
	
	

}



function on_change_confirm()
{
	
	
	$.get('php/changep.php?id='+ $.cookie("staffid") + '&pass=' + $('#old_login_pass').val() + '&newpass=' + $('#new_login_pass').val() , function(rett) {
	
	
	   		if(rett==1)
	   		{
				alert("Password Changed Sucessfully");
				window.location = "./calc_edit_final.php" ;
			}
			
			else
			{
				alert("Incorrect Old Password, Try Again!");
			}
				 			
	
	  });
}


