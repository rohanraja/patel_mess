function chksession(){


	var result = $.cookie("staffid");

		if( result == "null" || result == null ){
		setTimeout( chksession, 500 );
	}
		else
			logginginn_already(result);


	


}

var isloggedin = 0;


function logginginn2(sidd) // TODO - add default semester to cookie
{
	
		staffid = sidd ;
	
		var result = null;
	
		var scriptUrl = "php/getname.php?q="+ staffid;
		
		$.ajax({
		   url: scriptUrl,
		   type: 'get',
		   dataType: 'html',
		   async: false,
		   success: function(data) {
	
				result = data;
	
				$('#teachFormID').fadeOut();
				$('#sendingMessage').fadeIn().delay(messageDelay).fadeOut();
				$('#form_container').delay(messageDelay+400).fadeTo( 'slow', 1 );
				
				$('.teachForm #sid').attr("value", staffid);
			 
				 $('.teachForm #sname').html(result).val().toUpperCase();
	
				$('#logout').css('display', 'block');
				
				$('#logout').click( function() { 
					on_logout();
				  } );  
						

				isloggedin = 1;
				
				$.cookie("name", data, {expires: 7 });

		   } 
		});
	
	
}

function logginginn_already(sidd)
{

		staffid = sidd ;

		var result = null;

		var scriptUrl = "php/getname.php?q="+ staffid;

		$.ajax({
		   url: scriptUrl,
		   type: 'get',
		   dataType: 'html',
		   async: false,
		   success: function(data) {

				result = data;

				$('#teachFormID').fadeOut();

				$('.teachForm #sid').attr("value", staffid);

				 $('.teachForm #sname').html(result).val().toUpperCase();

				$('#logout').css('display', 'block');

				$('#logout').click( function() { 
					on_logout();
				  } );  


				isloggedin = 1;

				$.cookie("name", data, {expires: 7 });

		   } 
		});


}

function on_logout()
{

	$.removeCookie('staffid');
	isloggedin = 0;
	
	$('.teachform #sid').attr("value", "");
	// 
	 $('.form_description #sname').html("");
	 
	 $('#teachFormID').addClass('positioned');
	 		 $('#form_container').fadeTo( 'slow', .2 ); 
	 		$('#teachFormID').fadeIn( 'slow', function() {
	 		  $('#staffID').focus();
	 		} )
	 
	   //  return false;
	 //  } );
	 
	   // When the "Cancel" button is clicked, close the form
	   $('#cancel').click( function() { 
	 	$('#teachFormID').fadeOut();
	 	$('#form_container').fadeTo( 'slow', 1 );
	   } );  
	 
	   // When the "Escape" key is pressed, close the form
	   $('#teachFormID').keydown( function( event ) {
	 	if ( event.which == 27 ) {
	 	  $('#teachFormID').fadeOut();
	 	  $('#form_container').fadeTo( 'slow', 1 );
	 	}
	});


	//alert("Sucessfully Logged out!");
}

function dologin()
{
	var staffid_forcookie =$('#teachFormID #staffID').val();
	  //alert(staffid_forcookie);
	
	
	  var passw = $('#teachFormID #password').val() ; 
	
	  $.get('php/login_check.php?id='+staffid_forcookie +'&pass=' + passw, function(rett) {
	
	
	   	if(rett==1)
	   	{
	   		$.cookie("staffid", staffid_forcookie, {expires: 7 });
	   		logginginn2(staffid_forcookie);
		}
	
		else
			alert("Incorrect Password/StaffID");
	
	  });
		
	return false;   
}


function submitenter(myfield,e)
    {
    	var keycode;
    	if (window.event) keycode = window.event.keyCode;
    	else if (e) keycode = e.which;
    	else return true;
    
    	if (keycode == 13)
    	{
    		dologin();
    	}
    	else
    		return true;
    }