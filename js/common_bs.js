var isLoadinggoing = 0;

function on_loading(x)
{
	
	if(!isLoadinggoing)
	{
		var isLoadinggoing = 1;
		
		$('.fixedcenter').fadeIn();
		
		if(!x)
		{
			$('.container, .navbar, header').animate({opacity: 0.3}, 800);
			
			
		}
		else
		{
			$('.fixedcenter h3').html('');
		}
	}



}

function onloading_complete()
{
	$('.container, .navbar, header').animate({opacity: 1}, 400);
	$('.fixedcenter').fadeOut('fast', function(){isLoadinggoing=0;});

}

function common_onready()
{
		
	onloading_complete();
	
}





function chksession2(){


	var result = $.cookie("staffid");

		if( result == "null" || result == null ){
			$('#loginmodaltog').click();
			return 1;
		}


		else
		{
			var scriptUrl = "php/getname.php?q="+ result;
			
			$.ajax({
			   url: scriptUrl,
			   type: 'get',
			   dataType: 'html',
			   async: false,
			   success: function(data) {
					
					$.cookie("name", data, {expires: 7 });
					$('#drop_acc').html(data + ' <img src="css/img/blank_profile.png" style="width:30px; " class="" style="">');
			
			   } 
			});
			
			
			if($.cookie("isAdmin")==0)
			{
				$('#li_comp').css('display','none');
				$('#li_tline').css('display','none');
				$('#li_tline_comp').css('display','none');

				$('#li_m').css('display','none');
				
			}
			else
			{
				$('#li_comp').css('display','list-item');
				$('#li_tline').css('display','list-item');
				$('#li_m').css('display','list-item');
			}
			
			after_login_functions();
			
		}


}

 var sfid ;
 var semm ;
 
 
 
 function on_login_click()
 {
	 
	 
	 	
	 	var staffid_forcookie = $('#login_sid').val();
	 	var passw = $('#login_pass').val() ; 
	 
	   $.get('php/login_check.php?id='+staffid_forcookie +'&pass=' + passw, function(rett) {
	 
	 
	    	if(rett==1)
	    	{
	    		$.cookie("staffid", staffid_forcookie, {expires: 7 });
	    		$('#loginmodaltog').click(); 
	    		$.cookie("isAdmin", "0");   		
	    		chksession2();
	 		}
	 		
	 		
	 		if(rett==2)
	 		{
	 		   		$.cookie("staffid", staffid_forcookie, {expires: 7 });
	 		   		$('#loginmodaltog').click();  
	 		   		$.cookie("isAdmin", "1");
	 		   		chksession2();
	 		}
	 		
	 
	 		if(rett==0)
	 			alert("Incorrect Password/StaffID");
	 
	   });
	   
	   

 }
 
 
 function on_logout_click()
 {

	$.removeCookie('staffid');	 
	$('#loginmodaltog').click(); 
 }
 
 function loadjs()
 {
	 
	 
 	$('body footer').before('<script src="assets/js/bootstrap-transition.js"></script><script src="assets/js/bootstrap-alert.js"></script><script src="assets/js/bootstrap-modal.js"></script><script src="assets/js/bootstrap-dropdown.js"></script><script src="assets/js/bootstrap-scrollspy.js"></script><script src="assets/js/bootstrap-tab.js"></script><script src="assets/js/bootstrap-tooltip.js"></script><script src="assets/js/bootstrap-popover.js"></script><script src="assets/js/bootstrap-button.js"></script><script src="assets/js/bootstrap-collapse.js"></script><script src="assets/js/bootstrap-carousel.js"></script><script src="assets/js/bootstrap-typeahead.js"></script><script src="assets/js/bootstrap-affix.js"></script><script src="assets/js/holder/holder.js"></script><script src="assets/js/google-code-prettify/prettify.js"></script><script src="assets/js/application.js"></script>');
 
 }

 
 function onsemnext(e)
 {
	 
	 
	 curvall = $(e).parent().find('b').attr('value');
	 parts = curvall.split(' ');
	 semno = parts[0][1];
	 
	 
	 nextyearparts = parts[1].split('/');
	 nextyearparts[0] = parseInt(nextyearparts[0]) + 1;
	 nextyearparts[1] = parseInt(nextyearparts[1]) + 1;	 
	 
	 nextyear = nextyearparts[0] + "/" + nextyearparts[1];
	 
	 if(semno=="1")
	 {
	 	newsem = "S2 " + parts[1] ;
	 	fullsem = "Sem 2, 20" + parts[1] ;
	}
	 	
	 else
	 {
	 	newsem = "S1 " + nextyear ;
	 	fullsem = "Sem 1, 20" + nextyear ;
	}
	 	
	 	
	 console.log(newsem);
	 $(e).parent().find('b').attr('value',newsem);
	 $(e).parent().find('b').html(fullsem+" ");
	 console.log(fullsem);

	$.cookie("semester", newsem);

	 onsemselect();
 }
 
 function onsemprev(e)
 {
  	curvall = $(e).parent().find('b').attr('value');
  	 parts = curvall.split(' ');
  	 semno = parts[0][1];
  	 
  	 
  	 nextyearparts = parts[1].split('/');
  	 nextyearparts[0] = parseInt(nextyearparts[0]) - 1;
  	 nextyearparts[1] = parseInt(nextyearparts[1]) - 1;	 
  	 
  	 nextyear = nextyearparts[0] + "/" + nextyearparts[1];
  	 
  	 if(semno=="1")
  	 {
  	 	newsem = "S2 " +  nextyear;
  	 	fullsem = "Sem 2, 20" + nextyear ;
  	}
  	 	
  	 else
  	 {
  	 	newsem = "S1 " + parts[1] ;
  	 	fullsem = "Sem 1, 20" + parts[1] ;
  	}
  	 	
  	 	
  	 console.log(newsem);
  	 $(e).parent().find('b').attr('value',newsem);
  	 $(e).parent().find('b').html(fullsem+" ");
  	 console.log(fullsem);
  	 
  	 $.cookie("semester", newsem);
  	 
  	 onsemselect();
 }
 
 
 function onsem_init()
 {
	 
	 $.ajax({
	  url: 'current_sem.php',
	  type: 'get',
	  dataType: 'html',
	  async: false,
	  success: function(data) {
		 
		 $('#sem').attr('value',data);
		 
		 
		 parts = data.split(' ');
		 semno = parts[0][1];
		 if(semno=="2")
		  {
		  	fullsem = "Sem 2, 20" + parts[1] ;
		 }
		  	
		  else
		  {
		  	fullsem = "Sem 1, 20" + parts[1] ;
		 }
		 
		$('#sem').html(fullsem+" ");
		
		
		$.cookie('semester', data);

		 
		 
	 }});
 }
 
 
 function check_admin()
 {
	 $.get('php/admin_check.php?id='+ $.cookie("staffid"), function(rett) {
	 
	 
	    	if(rett==1)
	    	{
 		
	    		$('body').remove();
	    		
	    		alert("Sorry! Only admin has Access to this page");
	 		}
	 		
	 		
	 		if(rett==2)
	 		{
	 		   		return 1;
	 		   		
	 		}
	 			 			
	 
	   });
	   

 }


function submitenter(myfield,e)
{
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;

	if (keycode == 13)
	{
		on_login_click();
	}
	else
		return true;
}

