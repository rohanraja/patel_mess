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



function hover_effect_normal(therow)
{
//	$(therow).effect("highlight", {}, 1500);

	$(therow).find('td').effect("highlight", {}, 1000);
}


var alltsems;


$(document).ready(function() {


//	loadjs();

//	loadjs();


	// $('#drop_acc').click(function(){
	// 	
	// 	if($('#drop_acc').parent().hasClass('open'))	
	// 		$('#drop_acc').parent().removeClass('open');
	// 	else
	// 		$('#drop_acc').parent().addClass('open');
	// 	
	// 	
	// });


	// 
	// $('#logout_a').attr('href', './calc_edit_final.php')


	onloading_complete();

	chksession2();




});





function after_login_functions()
{
	// $(window).scroll( function(){
	// 
	// 	check_fix_scroll();
	// 
	// });

	$('header .container').remove();


	onsem_init();

	check_admin();




	common_onready();




		$('.data_field').css('font-size', '20px');
		$('.data_field').css('height', '25px');

		$('.icon-remove').click(function(){

			$('#filter').val('');
			oncheckchange();
		});

		set_data('1','1','1','1','0','S1 12/13','ALL','prof');


		$('#filter').focus();

	$("#filter").keyup(function(event){
		if(event.keyCode == 13){
			oncheckchange_autosem();
		}
	});


			$('table').addClass('table');
			$('table').addClass('table-striped');
			$('table').addClass('');
			$('table').addClass('table-bordered');



	// drawChart(20,30,10,10);

	oncheckchange_autosem();


}



var tsems , ssems, rsems, asems, semmarray ;

function oncheckchange(e)
{


	//on_loading(1);

	currdept = $('#dept').val();
	filt =  $('#filter').val();



	tsems = [] ;	
	ssems = [] ;
	rsems = [] ;
	asems = [] ;
	totalsems = [];

	set_data(1, 1, 1, 1, 0, "S1 12/13", currdept, filt);

	tsems.push(parseFloat($('#tgrtotal').html()));
	ssems.push(parseFloat($('#sgrtotal').html()));
	rsems.push(parseFloat($('#rgrtotal').html()));
	asems.push(parseFloat($('#agrtotal').html()));
	totalsems.push(parseFloat($('#agrtotal').next().html()));

	set_data(1, 1, 1, 1, 0, "S2 12/13", currdept, filt);

	tsems.push(parseFloat($('#tgrtotal').html()));
	ssems.push(parseFloat($('#sgrtotal').html()));
	rsems.push(parseFloat($('#rgrtotal').html()));
	asems.push(parseFloat($('#agrtotal').html()));
	totalsems.push(parseFloat($('#agrtotal').next().html()));

	set_data(1, 1, 1, 1, 0, "S1 13/14", currdept, filt);

	tsems.push(parseFloat($('#tgrtotal').html()));
	ssems.push(parseFloat($('#sgrtotal').html()));
	rsems.push(parseFloat($('#rgrtotal').html()));
	asems.push(parseFloat($('#agrtotal').html()));
	totalsems.push(parseFloat($('#agrtotal').next().html()));



	drawChart_custom(totalsems, "Total Workload", "chart_div1", "black");
	drawChart_custom(tsems, "Teaching Workload", "chart_div2", "blue");
	drawChart_custom(ssems, "Supervision Workload", "chart_div3", "red");
	drawChart_custom(rsems, "Research Workload", "chart_div4", "grey");
	drawChart_custom(asems, "Administrative Workload", "chart_div5", "green");


//	drawChart_all(tsems,ssems,rsems,asems, "Total Workload", "chart_div1");

	onloading_complete();



}


var finaltsemsarray;

var staff_no_arr ;

function oncheckchange_autosem(e)
{
	
	
	
	
	$.ajax({
		async: false,
			type: "GET",
			contentType: "html",
			dataType: "json",
			url: 'get_staff_no.php',
			success: function(dataarr) {
				
				staff_no_arr = dataarr;
				
			}});
			
			
	if($(e).attr('id')!="filter")
	{
		on_loading(1);

	}


	on_loading(1);

	console.log("AUTOSEM");

	semmarray = [];
	finaltsemsarray = [];


	semmarray.push('S2 10/11');
	finaltsemsarray.push([0, "S2 10/11"]);


	$('#sem').val('S1 11/12');

	currdept = $('#dept').val();
	filt =  $('#filter').val();




	tsems = [] ;	
	ssems = [] ;
	rsems = [] ;
	asems = [] ;
	totalsems = [];


	
	alltsems = [];
	allssems = [];
	allrsems = [];
	allasems = [];
	alltotsems = [];

	condition = 1;
	
	
	finaltsems = [];	
	finalssems = [];
	finalrsems = [];
	finalasems = [];
	finaltotsems = [];

	while(condition)
	{
		semmm = $('#sem').val();

		set_data(1, 1, 1, 1, 0, semmm, "CSE", '');


		semmarray.push($('#sem').val());
		finaltsemsarray.push([finaltsemsarray.length, semmm]);

		if(parseFloat($('#agrtotal').next().html())==0)
		{
			condition = 0;
			break;
		}

		tmpar = [];
		tmpar[0] = finaltsems.length + 1;
		tmpar[1] = parseInt($('#tgrtotal').html()/staff_no_arr[0]) ; 

		finaltsems.push(tmpar);

		tmpar = [];
		tmpar[0] = finalssems.length + 1;
		tmpar[1] = parseInt($('#sgrtotal').html()/staff_no_arr[0]) ; 

		finalssems.push(tmpar);

		tmpar = [];
		tmpar[0] = finalrsems.length + 1;
		tmpar[1] = parseInt($('#rgrtotal').html()/staff_no_arr[0]) ; 

		finalrsems.push(tmpar);

		tmpar = [];
		tmpar[0] = finalasems.length + 1;
		tmpar[1] = parseInt($('#agrtotal').html()/staff_no_arr[0]) ; 

		finalasems.push(tmpar);

		tmpar = [];
		tmpar[0] = finaltotsems.length + 1;
		tmpar[1] = parseInt($('#agrtotal').next().html()/staff_no_arr[0]) ; 

		finaltotsems.push(tmpar);

		tsems.push(parseFloat($('#tgrtotal').html()));
		ssems.push(parseFloat($('#sgrtotal').html()));
		rsems.push(parseFloat($('#rgrtotal').html()));
		asems.push(parseFloat($('#agrtotal').html()));
		totalsems.push(parseFloat($('#agrtotal').next().html()));

		$('#sem').next().click();





	}


	alltsems.push(finaltsems);
	allrsems.push(finalrsems);
	allssems.push(finalssems);
	allasems.push(finalasems);
	alltotsems.push(finaltotsems);
	$('#sem').val('S1 11/12');
	
	
	
	condition = 1;
	
	
	finaltsems = [];	
	finalssems = [];
	finalrsems = [];
	finalasems = [];
	finaltotsems = [];
	
	while(condition)
	{
		semmm = $('#sem').val();
	
		set_data(1, 1, 1, 1, 0, semmm, "CSM", '');
		
		if(parseFloat($('#agrtotal').next().html())==0)
		{
			condition = 0;
			break;
		}
	
		tmpar = [];
		tmpar[0] = finaltsems.length + 1;
		tmpar[1] = parseInt($('#tgrtotal').html()/staff_no_arr[1]) ; 
	
		finaltsems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finalssems.length + 1;
		tmpar[1] = parseInt($('#sgrtotal').html()/staff_no_arr[1]) ; 
	
		finalssems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finalrsems.length + 1;
		tmpar[1] = parseInt($('#rgrtotal').html()/staff_no_arr[1]) ; 
	
		finalrsems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finalasems.length + 1;
		tmpar[1] = parseInt($('#agrtotal').html()/staff_no_arr[1]) ; 
	
		finalasems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finaltotsems.length + 1;
		tmpar[1] = parseInt($('#agrtotal').next().html()/staff_no_arr[1]) ; 
	
		finaltotsems.push(tmpar);
	
		tsems.push(parseFloat($('#tgrtotal').html()));
		ssems.push(parseFloat($('#sgrtotal').html()));
		rsems.push(parseFloat($('#rgrtotal').html()));
		asems.push(parseFloat($('#agrtotal').html()));
		totalsems.push(parseFloat($('#agrtotal').next().html()));
	
		$('#sem').next().click();
	
	
	
	
	
	}
	
	
	alltsems.push(finaltsems);
	allrsems.push(finalrsems);
	allssems.push(finalssems);
	allasems.push(finalasems);
	alltotsems.push(finaltotsems);
	$('#sem').val('S1 11/12');
	
	
	condition = 1;
	
	
	finaltsems = [];	
	finalssems = [];
	finalrsems = [];
	finalasems = [];
	finaltotsems = [];
	
	while(condition)
	{
		semmm = $('#sem').val();
	
		set_data(1, 1, 1, 1, 0, semmm, "CSCT", '');
		
		if(parseFloat($('#agrtotal').next().html())==0)
		{
			condition = 0;
			break;
		}
	
		tmpar = [];
		tmpar[0] = finaltsems.length + 1;
		tmpar[1] = parseInt($('#tgrtotal').html()/staff_no_arr[2]) ; 
	
		finaltsems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finalssems.length + 1;
		tmpar[1] = parseInt($('#sgrtotal').html()/staff_no_arr[2]) ; 
	
		finalssems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finalrsems.length + 1;
		tmpar[1] = parseInt($('#rgrtotal').html()/staff_no_arr[2]) ; 
	
		finalrsems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finalasems.length + 1;
		tmpar[1] = parseInt($('#agrtotal').html()/staff_no_arr[2]) ; 
	
		finalasems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finaltotsems.length + 1;
		tmpar[1] = parseInt($('#agrtotal').next().html()/staff_no_arr[2]) ; 
	
		finaltotsems.push(tmpar);
	
		tsems.push(parseFloat($('#tgrtotal').html()));
		ssems.push(parseFloat($('#sgrtotal').html()));
		rsems.push(parseFloat($('#rgrtotal').html()));
		asems.push(parseFloat($('#agrtotal').html()));
		totalsems.push(parseFloat($('#agrtotal').next().html()));
	
		$('#sem').next().click();
	
	
	
	
	
	}
	
	
	alltsems.push(finaltsems);
	allrsems.push(finalrsems);
	allssems.push(finalssems);
	allasems.push(finalasems);
	alltotsems.push(finaltotsems);
	$('#sem').val('S1 11/12');
	
	condition = 1;
	
	
	finaltsems = [];	
	finalssems = [];
	finalrsems = [];
	finalasems = [];
	finaltotsems = [];
	
	while(condition)
	{
		semmm = $('#sem').val();
	
		set_data(1, 1, 1, 1, 0, semmm, "KT", '');
		
		if(parseFloat($('#agrtotal').next().html())==0)
		{
			condition = 0;
			break;
		}
	
		tmpar = [];
		tmpar[0] = finaltsems.length + 1;
		tmpar[1] = parseInt($('#tgrtotal').html()/staff_no_arr[3]) ; 
	
		finaltsems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finalssems.length + 1;
		tmpar[1] = parseInt($('#sgrtotal').html()/staff_no_arr[3]) ; 
	
		finalssems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finalrsems.length + 1;
		tmpar[1] = parseInt($('#rgrtotal').html()/staff_no_arr[3]) ; 
	
		finalrsems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finalasems.length + 1;
		tmpar[1] = parseInt($('#agrtotal').html()/staff_no_arr[3]) ; 
	
		finalasems.push(tmpar);
	
		tmpar = [];
		tmpar[0] = finaltotsems.length + 1;
		tmpar[1] = parseInt($('#agrtotal').next().html()/staff_no_arr[3]) ; 
	
		finaltotsems.push(tmpar);
	
		tsems.push(parseFloat($('#tgrtotal').html()));
		ssems.push(parseFloat($('#sgrtotal').html()));
		rsems.push(parseFloat($('#rgrtotal').html()));
		asems.push(parseFloat($('#agrtotal').html()));
		totalsems.push(parseFloat($('#agrtotal').next().html()));
	
		$('#sem').next().click();
	
	
	
	
	
	}
	
	
	alltsems.push(finaltsems);
	allrsems.push(finalrsems);
	allssems.push(finalssems);
	allasems.push(finalasems);
	alltotsems.push(finaltotsems);
	$('#sem').val('S1 11/12');
	
	
	



	drawChart_custom_auto(alltotsems, "Total Workload", "chart_div1", "black");
	drawChart_custom_auto(alltsems, "Teaching Workload", "chart_div2", "blue");
	drawChart_custom_auto(allrsems, "Supervision Workload", "chart_div3", "red");
	drawChart_custom_auto(allssems, "Research Workload", "chart_div4", "grey");
	drawChart_custom_auto(allasems, "Administrative Workload", "chart_div5", "green");


//	drawChart_all(finaltsems,finalssems,finalrsems,finalasems, "Total Workload Distribution over time", "chart_div6");


	$('#chart_div6').remove();


	onloading_complete();



}


function check_admin_toggle(e)
{
	if(!$(e).hasClass('active'))
	{
		$(e).addClass('btn-success');
		$(e).html('Include High Post Holders');
		oncheckchange("no");
	}
	else
	{
		$(e).removeClass('btn-success');
		$(e).html('Exclude High Post Holders');
		oncheckchange();

	}

}

 function onsemselect()
 {

 	semm = $('#sem').attr('value');
 	$.cookie("semester",semm);


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



function drawChart_custom_auto(arr, heading, chart_id, colorr, semar)
{


	$.jqplot(chart_id,  arr , 


	{ title : heading,

	  axes:{xaxis:{ticks:finaltsemsarray} },

	 series:[{color: 'blue', label : "CSE"}, {color: 'red', label : "CSM"}, {color: 'grey', label : "CSCT"}, {color: 'green', label : "KTIS"}],
	 
	 legend: {
	   	show: true
	 	},

	highlighter: {
	  show: true,
	  sizeAdjust: 7.5,
	  tooltipAxes: 'y'
	},
cursor: {
  show: false
	}



	});

}


function drawChart_custom(arr, heading, chart_id, colorr)
{


	$.jqplot(chart_id,  [[[1, parseInt(arr[0])],[2,parseInt(arr[1])], [3,parseInt(arr[2])]]] , 


	{ title : heading,

	  axes:{xaxis:{ticks:[[0,"S2 11/12"], [1,"S1 12/13"], [2,"S2 12/13"],[3,"S1 13/14"] ,[4,"S2 13/14"]]} },

	  series:[{color: '#5FAB78'}]


	});

}

function drawChart_all(arr1, arr2,arr3,arr4, heading, chart_id, colorr)
{


	$.jqplot(chart_id,  [arr1, arr2, arr3 , arr4] , 


	{ title : heading,

	  axes:{xaxis:{ticks:finaltsemsarray} },

	  series:[{color: 'blue', label : "Teaching"}, {color: 'red', label : "Supervision"}, {color: 'grey', label : "Research"}, {color: 'green', label : "Administrative"}],

	  legend: {
	  	show: true
		}


	});

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


				$('#resultview').append('<div class="" class="offset2" id="chart_div1" style="width: 100%; height: 500px"></div></div><div class="" id="chart_div2" style="width: 100%; height: 500px"></div></div><div class="" id="chart_div3" style="width: 100%; height: 500px"></div></div><div class="" id="chart_div4" style="width: 100%; height: 500px"></div></div><div class="" id="chart_div5" style="width: 100%; height: 500px"></div></div>');
	 			onloading_complete();

	 			check_single_name();

	 			//$('#maintb').css('display', 'none');
	 			$('#maintb').css('display','none');
	 			//$('#filter').fadeOut();
	 			//$('#dept').fadeOut();
	 			$('#sem').parent().css('display','none');


	 		}
	 	});


}


function check_single_name()
{
	if($('#maintb tbody tr').length == 1)
	{

		$('#maintb tbody tr td').addClass('singleName');

		 hover_effect_normal($('#maintb tbody tr'));


		 var pername = $('#maintb tbody tr td').eq(2).html() ;
		 var perid = $('#maintb tbody tr td').eq(1).html();

	//	 on_loading(1);



		$('#filtname').html(pername);
		$('#filtid').html(perid);





	}

	else
	{

		$('#filtname').html('');
		$('#filtid').html('');
	}

}
