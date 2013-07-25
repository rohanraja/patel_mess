function set_table(courses)
{
	
	
		
	$(courses).each(function(i, val) {
		
		
		
	$("#maintb tbody").append('<tr><td><a href="viewstaffindex.php?sID='+val[7]+'"><img id="view" src="images/view.png" alt="View" width="16" height="16" align="left"></a></td><td>'+val[0]+'</td><td>'+val[1]+'</td><td>'+val[2]+'</td><td>'+val[3]+'</td><td>'+val[4]+'</td><td>'+val[5]+'</td><td>'+val[6]+'</td></tr>');

	 });


}


$(document).ready(function() {


//	set_table([[1,2,3,4,5,"sdd",7,8]]);

// check();
// alert("sd");
// uncheck();




  $.tablesorter.addWidget({
  	// give the widget an id
  	id: "sortPersist",
  	// format is called when the on init and when a
  	// sorting has finished
  	format: function(table) {
	  	
	  	$('#tchk').click(function() { return false; });

	  	$('#schk').click(function() { return false; });

	  	$('#rchk').click(function() { return false; });

	  	$('#achk').click(function() { return false; });

	  	console.log("inside table function");
	  	
  
  	  // Cookie info
  	  var cookieName = 'MY_SORT_COOKIE';
  	  var cookie = $.cookie(cookieName);
  	  var options = {path: '/'};
  
  	  var data = {};
  	  var sortList = table.config.sortList;
  	  var tableId = $(table).attr('id');
  	  var cookieExists = (typeof(cookie) != "undefined"
  		  && cookie != null);
  		  
  		var xxx = JSON.stringify(sortList);
  		  
  		 console.log("Fresh sortlist : " + xxx + ":" + xxx[4] );
  		 
  		 console.log(sortList);
  		
  		if(sortList.length > 0) 
  			sort_display(parseInt(sortList[0][0]), parseInt(sortList[0][1]));
  		 
  
  	  // If the existing sortList isn't empty, set it into the cookie
  	  // and get out  	  
  	  if (sortList.length > 0) {
  		if (cookieExists) {
  		 
  		  data = (cookie);
  		  console.log(data);

  		}
  		
  		if(xxx[4] != 'n')
	    {	
		    $.cookie(cookieName, JSON.stringify(sortList), options);
	  		console.log("Adding cookie : " + JSON.stringify(sortList));
	  	}
  	  }
  
  	  // Otherwise...
  	  else {
  		if (cookieExists) { 
  
  		  // Get the cookie data
  		  var data = ($.cookie(cookieName));
  		  data = JSON.parse(data);
  		  console.log("data in cookie is : " + data);
  

  			sortList = [[]];
  			
  			sortList[0][0] = parseInt(data[0][0]) ;
 
  				sortList[0][1] = parseInt(data[0][1]) ;
  				console.log('data.2 = ' + parseInt(data[0][0]));
  			
  			if (sortList.length > 0) {
	  			console.log('triggering ' + sortList)
  			  $(table).trigger("sorton", [sortList]);
  			  sort_display(sortList[0][0], sortList[0][1]);
  			}
  		  
  		}
  	  }
  	}
    });
	$("#maintb").tablesorter({widgets: ['sortPersist']}); 
	
	$('#filter').focus();
	
$("#filter").keyup(function(event){
	if(event.keyCode == 13){
		oncheckchange();
	}
});
	





});




function oncheckchange()
{
//	alert(x);
	
	val = (document.getElementById("tchk").checked);
	tchk = process_bool(val);
	
	val = (document.getElementById("schk").checked);
	schk = process_bool(val);
	
	val = (document.getElementById("rchk").checked);
	rchk = process_bool(val);
	
	val = (document.getElementById("achk").checked);
	achk = process_bool(val);
	
	val = (document.getElementById("pchk").checked);
	pchk = process_bool(val);
	
	currsem = $('#sem').attr('value');
	
	filter_value = $('#filter').attr('value');
		
	newlocation ='masterlist.php?a='+ tchk;
	newlocation += '&b='+ schk;
	newlocation += '&c='+ rchk;
	newlocation += '&d='+ achk;
	newlocation += '&per='+ pchk;
	newlocation += '&sem='+ currsem;
	newlocation += '&filter='+ filter_value;
	
	window.location = (newlocation);
	

}

function process_bool(val)
{
	if(val)
		return 1;
	else
		return 0;
}


function onloading()
{
	$('body').animate({
		opacity: 0.2
	  }, 500)
}

function onloading_done()
{
	$('body').animate({
		opacity: 1
	  }, 100)
}

function onreset()
{
	alert('reset');
}

function sort_display(cat, ardir)
{
	var up_arr = "&#8593;";

	var down_arr = "&#8595;";
	
	var arrow_array = [" .ardown", " .arup"]; 
	
	
	
	catarr = [0,'#ssch','#nch', '#tch','#sch','#rch','#ach', '#ttch'] ;
	
	$(".ardown").css('display', 'none');
	$(".arup").css('display', 'none');
	

			
	$(catarr[cat] + arrow_array[ardir]).css('display', 'block');
}


