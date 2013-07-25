function set_table(courses)
{



	$(courses).each(function(i, val) {



	$("#maintb tbody").append('<tr><td><a href="viewstaffindex.php?sID='+val[7]+'"><img id="view" src="images/view.png" alt="View" width="16" height="16" align="left"></a></td><td>'+val[0]+'</td><td>'+val[1]+'</td><td>'+val[2]+'</td><td>'+val[3]+'</td><td>'+val[4]+'</td><td>'+val[5]+'</td><td>'+val[6]+'</td></tr>');

	 });


}


function check_fix_scroll()
{
	if($(window).scrollTop()>190)
	{
		$('.fixedchart').animate({'top': '90px'},1000);
		$('.fixedchart').addClass('fixee');
		
	}
	
	else
	{
		$('.fixedchart').removeClass('fixee');
	}
	
}


function check_single_name()
{
	if($('#maintb tbody tr').length == 1)
	{
		$('#maintb tfoot').remove();
		
		$('#maintb tbody tr td').addClass('singleName');
		
		 hover_effect_normal($('#maintb tbody tr'));
		 
	//	 on_loading(1);
		 

		$.cookie('staffidforcheck', $('#maintb tbody tr td').eq(1).html());
		
		
		$('body').after('<div id="tmpbox" style="display:none"></div>');
		$('#tmpbox').load('calc_edit_final_ajax.php', function(){
			
			$('#resultview').append('<div id="one_view" style=""></div>');
			
		//	if($('#resultview section').length)
		//		$('#resultview section').remove();
			
			$('#one_view').html($('#tmpbox').find('section'));
			
	//		onloading_complete();
			
			//$('#one_view').slideDown(600);
		});
		
				
		
		
	}
	
}

function hover_effect_normal(therow)
{
//	$(therow).effect("highlight", {}, 1500);

	$(therow).find('td').effect("highlight", {}, 1000);
}



$(document).ready(function() {


//	loadjs();

	loadjs();
	
	
	$('#drop_acc').click(function(){
		
		if($('#drop_acc').parent().hasClass('open'))	
			$('#drop_acc').parent().removeClass('open');
		else
			$('#drop_acc').parent().addClass('open');
		
		
	});
	
	$('#logout_a').attr('href', './calc_edit_final.php')
	onloading_complete();
	
	ress = chksession2();
	if(ress)
		window.location =  './calc_edit_final.php';




});





function after_login_functions()
{
	$(window).scroll( function(){
	
		check_fix_scroll();
	
	});
	
	check_admin();
	
	onsem_init();
	
	
	
	
	common_onready();
	
	
	
	
		$('.data_field').css('font-size', '20px');
		$('.data_field').css('height', '25px');
	
		$('.icon-remove').click(function(){
	
			$('#filter').val('');
			oncheckchange();
		});
	
		set_data('1','1','1','1','0','S1 12/13','ALL','prof');
	
		load_params();
		//oncheckchange();
	
	
	  $.tablesorter.addWidget({
	  	// give the widget an id
	  	id: "sortPersist",
	  	// format is called when the on init and when a
	  	// sorting has finished
	  	format: function(table) {
	
	
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
	
	
	
		//$("#maintb").tablesorter({widgets: ['sortPersist'], cancelSelection: false});
	
	
		$('#filter').focus();
	
	$("#filter").keyup(function(event){
		if(event.keyCode == 13){
			oncheckchange();
		}
	});
	
	
			$('table').addClass('table');
			$('table').addClass('table-striped');
			$('table').addClass('');
			$('table').addClass('table-bordered');
	
	
	
	// drawChart(20,30,10,10);
	
	oncheckchange();

}



function oncheckchange(e)
{


	if($(e).attr('id')!="filter")
	{
		on_loading(1);
		// if(e!="se")
		// 	$('#filter').val('');
		
	}
	

	
	val = (document.getElementById("tchk").checked);
	tchk = process_bool_int(val);
	$.cookie('teachbool' , val);

	val = (document.getElementById("schk").checked);
	schk = process_bool_int(val);
	$.cookie('superbool' , val );

	val = (document.getElementById("rchk").checked);
	rchk = process_bool_int(val);
	$.cookie('researchbool' , val );

	val = (document.getElementById("achk").checked);
	achk = process_bool_int(val);
	$.cookie('adminbool' , val );

	val = (document.getElementById("pchk").checked);
	pchk = process_bool_int(val);
	$.cookie('perbool' , val );

	currsem = $('#sem').attr('value');
	$.cookie('sembool' , currsem );

	currdept = $('#dept').attr('value');
	$.cookie('deptbool' , currdept );

	filter_value = $('#filter').attr('value');
	if(filter_value)
		$('span.icon_clear').fadeIn();
	else
		$('span.icon_clear').fadeOut();
		
	$.cookie('filtbool' , filter_value );


	set_data(tchk, schk, rchk, achk, pchk, currsem, currdept, filter_value);




}

 function onsemselect()
 {
 
 	semm = $('#sem').attr('value');
 	$.cookie("semester",semm);
 	
	oncheckchange("se");
 
 
 }
 
function load_params()
{


	$('#tchk').prop('checked', process_bool($.cookie('teachbool')));
	$('#schk').prop('checked', process_bool($.cookie('superbool')));
	$('#rchk').prop('checked', process_bool($.cookie('researchbool')));
	$('#achk').prop('checked', process_bool($.cookie('adminbool')));

	$('#pchk').prop('checked', process_bool($.cookie('perbool')));

//	$('#sem').val($.cookie('sembool'));

//	oncheckchange();




	//
////////////////$("table").trigger("update"); 

}
function process_bool(val)
{
	if(val=="true")
		return true;
	else
		return false;
}

function process_bool_int(val)
{
	if(val==true)
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

function drawChart(a,b,c,d)
{


try
  {
	
	var permulti = (100/(a+b+c+d)); 

	var data = google.visualization.arrayToDataTable([
	  ['Summary', 'Distribution'],
	  ['Teaching : ' + Math.round(a*permulti) + '%' ,    a],
	  ['Supervision : ' + Math.round(b*permulti) + '%' ,    b],
	  ['Research Projects : ' + Math.round(c*permulti) + '%',  c],
	  ['Administrative : ' + Math.round(d*permulti) + '%', d]
	]);

	}	


	catch(err)
	{
		console.log('Sorry.. No Internet hence No Pie Chart');
		console.log(err);
		$('#chart_div').remove();
		return false;
	}

	var options = {
	  title: 'Grand Total Weightage Distribution'
	};

	var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}


function set_data(a,b,c,d, p, sem, dept, filt)
{

	 $('#maintb').remove();


	 $.ajax({
	 	async: false,
	 		type: "GET",
	 		contentType: "html",
	 		dataType: "html",
	 		url: 'return_masterlist_ajax.php?a='+ a + '&b='+ b + '&c='+ c + '&d='+ d + '&per=' + p + '&filter=' + filt+ '&sem=' + sem + '&dept=' + dept,
	 		success: function(data) {
	 			$('#resultview').html(data);

	 			 drawChart(parseFloat($('#tgrtotal').html()),parseFloat($('#sgrtotal').html()),parseFloat($('#rgrtotal').html()),parseFloat($('#agrtotal').html()));

	 			//$("#maintb").trigger("update");

	 			$("#maintb").tablesorter({widgets: ['sortPersist']}); 

	 			load_params();
	 			
	 			onloading_complete();
	 			
	 			check_single_name();
	 			

	 		}
	 	});


}


function onViewClick(e)
{
	
	pname = ($(e).parent().parent().find('td').eq(1).html());
	
	$('#filter').val(pname);
	
	oncheckchange("se");
	
	
}