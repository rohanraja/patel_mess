function on_check_click(e)
{
	//$(e).parent().toggleClass('inactive');
	$(e).parent().toggleClass('active');
	get_meal_total($(e).parent().parent().parent().parent().attr('id'));

}

function on_td_click(e)
{
	//$(e).parent().toggleClass('inactive');
	$(e).toggleClass('active');
	get_meal_total($(e).parent().parent().parent().attr('id'));
	
	get_and_send_choices();

}


var meal_array;

function get_bf(table_id)
{
	
	meal_array = [];
	
	$('#'+table_id+' td').not('#'+table_id+' td:nth-child(5n+1)').each(function(i,val){
		
		if($(val).hasClass('active'))
			meal_array.push(1);
		else
			meal_array.push(0);
		
	});
	
	
	return meal_array.join('');
}


function set_bf(farr,table_id)
{

	marr = farr.split('')

	$('#'+table_id+' td').not('#'+table_id+' td:nth-child(5n+1)').each(function(i,val){
		
		if(marr[i] == "1")
			$(val).addClass('active')
		else
			$(val).removeClass('active')
		
	});
	
	
	get_meal_total(table_id);
	
	
}

function get_meal_total(table_id)
{

	marr = get_bf(table_id);

	totall = 0;

	$('#'+table_id+' td').not('#'+table_id+' td:nth-child(5n+1)').each(function(i,val){
		
		if(marr[i] == "1")
			totall = totall + parseInt($(val).find('.i_price').html());
		
	});
	
	$('#'+table_id).parent().find('h4 span').eq(0).html(totall);
	
	update_gr_total();

}

var choices_b, choices_l, choices_s, choices_d; 

function get_and_send_choices()
{
	
	choices_b = get_bf('courses');
	choices_l = get_bf('superv');
	choices_s = get_bf('researchtb');
	choices_d = get_bf('admintb');
	
	s_id = sfid;
	
	$.get('save_choices.php?sid='+s_id+'&c1='+choices_b+'&c2='+choices_l+'&c3='+choices_s+'&c4='+choices_d);
	
	
}


function retrive_choices()
{
	
	
	$.getJSON('send_choices.php?sid='+sfid, function(data){
		
		
		set_bf(data[1], 'courses');
		set_bf(data[2], 'superv');
		set_bf(data[3], 'researchtb');
		set_bf(data[4], 'admintb');
		
	});
	
	
}

var grandtotal;



function update_gr_total()
{
	grandtotal = 56 + parseFloat($("#totteach").html()) + parseFloat($("#totresearch").html()) + parseFloat($("#totsuper").html()) + parseFloat($("#totadmin").html()) ;
	
	
	$('#tot_fix').html(grandtotal);
	$('#totgrand').html(grandtotal);

	
	
	
	
	drawChart(parseInt($("#totteach").html()),parseInt($("#totsuper").html()),parseInt($("#totresearch").html()),parseInt($("#totadmin").html()));	
	
}


function drawChart(a,b,c,d)
{


try
  {
  //Run some code here


	var data = google.visualization.arrayToDataTable([
	  ['Summary', 'Distribution'],
	  ['Breakfast',    a],
	  ['Lunch',      b],
	  ['Snacks',  c],
	  ['Dinner', d]
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
	  title: 'Meals Expenditure Distribution'
	};

	var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
	// 
	// google.visualization.events.addListener(chart, 'error', function(err) {
	//   alert('ERROR');
	//   console.log(err);
	//   
	// });

	chart.draw(data, options);
}

var grandtotal  =0;


// var name;


$(document).ready(function() {

	console.log("Start!");


	// semm = $('#sem').attr('value');
	// $.cookie("semester",semm);


	onsem_init();


	$('#summtb tr:first').find('td').each(function(i,val){$(val).replaceWith('<th>'+ $(val).html() + '</th>')});



	onloading_complete();

	chksession2();



 });


function after_login_functions()
{
	sfid = $.cookie("staffid");
		semm = $.cookie("semester");	
		name = $.cookie("name");

		$("#headname").html(name);
		$("#headsem").html(semm);



		$.ajaxSetup({
			async: false
		});

	 //	clear_tables();
	// 	write_tables(sfid,semm);

	 	$( "#tcheck" ).button();
	 	$( "#scheck" ).button();
	 	$( "#rcheck" ).button();
	 	$( "#acheck" ).button();

	 	$( "#tadd" ).button();
	 	$( "#radd" ).button();


	 	$('#researchtb tr:first').find('td').each(function(i,val){$(val).replaceWith('<th data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger = "hover"><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger = "click">'+ $(val).html() + '</a></th>')});
	 	x = $('#researchtb tr:first').html();
	 	$('#researchtb tr:first').remove();
	 	$('#researchtb').prepend('<thead><tr></tr></thead>');
	 	$('#researchtb thead tr').html(x);

	 	$('#admintb tr:first').find('td').each(function(i,val){$(val).replaceWith('<th><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger = "hover">'+ $(val).html() + '</a></th>')});

	 	x = $('#admintb tr:first').html();
	 	$('#admintb tr:first').remove();
	 	$('#admintb').prepend('<thead><tr></tr></thead>');
	 	$('#admintb thead tr').html(x);

	 	$('#superv tr:first').find('td').each(function(i,val){$(val).replaceWith('<th><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger = "hover">'+ $(val).html() + '</a></th>')});
	 	x = $('#superv tr:first').html();
	 	$('#superv tr:first').remove();
	 	$('#superv').prepend('<thead><tr></tr></thead>');
	 	$('#superv thead tr').html(x);
	 	$('#courses tr:first').find('td').each(function(i,val){$(val).replaceWith('<th><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger = "hover">'+ $(val).html() + '</a></th>')});
	 	x = $('#courses tr:first').html();
	 	$('#courses tr:first').remove();
	 	$('#courses').prepend('<thead><tr></tr></thead>');
	 	$('#courses thead tr').html(x);


	 	define_titles();


		common_onready();
		
		
		retrive_choices();
		
		$('.no_entry').html('');


	//		clear_tables();
	//	write_tables(sfid,semm);

		//admin_formula();
}

var grandtotal;

function write_tables(staffidd, semme, exp)
{
	sfid = staffidd;
	semm = semme;

	url_head = 'send_main.php?sid=';

	if(exp)
		url_head = 'send_main_exp.php?sid=';

	$.getJSON(url_head+sfid+'&sem='+semm+'&type=t',
	 	function(data){

	 		restot = data.pop();
	 		set_courses(data);
	 		$("#totteach").html(restot);
	 		$("#totteach2").html(restot);


	 		  $(newcodes).each(function(i,val){


	 			  hover_effect($('[value="' +val+ '"]').parent().parent(), 4000);

	 			  newcodes = [];
	 			  newrows = [];

	 			  //hover_effect($(val).parent().parent());
	 		  });

	 	});

	 	$.getJSON(url_head+sfid+'&sem='+semm+'&type=s',
	 	function(data){

	 		restot = data.pop();
	 		set_superv(data);
	 		$("#totsuper").html(restot);
	 		$("#totsuper2").html(restot);
	 	});

	 	$.getJSON(url_head+sfid+'&sem='+semm+'&type=r',
	 	function(data){

	 		restot = data.pop();
	 		set_research(data);
	 		$("#totresearch").html(restot);
	 		$("#totresearch2").html(restot);

	 	});

	 	$.getJSON('send_main.php?sid='+sfid+'&sem='+semm+'&type=a',
	 	function(data){

	 		restot = data.pop();
	 		set_admin(data);
	 		$("#totadmin").html(restot);
	 		$("#totadmin2").html(restot);
	 		onloading_complete();

	 	});


		grandtotal = parseFloat($("#totteach").html()) + parseFloat($("#totresearch").html()) + parseFloat($("#totsuper").html()) + parseFloat($("#totadmin").html()) ;
		$("#totgrand").html(parseInt(grandtotal));


	 	perteach = parseFloat($("#totteach").html()/grandtotal);
	 	$("#perteach").html(Math.round(perteach*100));
	 	$("#perteach2").html(Math.round(perteach*100));

	 	perteach = parseFloat($("#totsuper").html()/grandtotal);
	 	$("#persuper").html(Math.round(perteach*100));
	 	$("#persuper2").html(Math.round(perteach*100));

	 	perteach = parseFloat($("#totresearch").html()/grandtotal);
	 	$("#perresearch").html(Math.round(perteach*100)); 	
	 	$("#perresearch2").html(Math.round(perteach*100)); 	

	 	perteach = parseFloat($("#totadmin").html()/grandtotal);
	 	$("#peradmin").html(Math.round(perteach*100));
	 	$("#peradmin2").html(Math.round(perteach*100));

	 //	drawChart(parseInt($("#perteach").html()),parseInt($("#persuper").html()),parseInt($("#perresearch").html()),parseInt($("#peradmin").html()));


	 	$('input').css('background-color', 'transparent');
	 	$('input').css('border', 'none');


	// 	$('table').after('<h4 class="total text-success">TOTAL : <span id="totteach">14</span> hours (<span id="perteach">44</span>%)</h4><br><hr><br>');

	 	//$('#resultview h2:first').before();


	// 	$('section:first').before($('#sumdiv').clone());

	 	drawChart(parseInt($("#perteach").html()),parseInt($("#persuper").html()),parseInt($("#perresearch").html()),parseInt($("#peradmin").html()));
	 	//alert('newchart');

	 	//



	 	$('th').attr('onclick','$(this).find("a").popover("toggle")');
	 	// $('th').attr('onmouseover','$(this).find("a").popover("show")');
	 	// $('th').attr('onmouseout','$(this).find("a").popover("hide")');



	 	//research_formula();
}

function clear_tables()
{
	on_loading(1);

	var heads =	'<tr><td>Appointed Position</td><td>Other Position</td><td>Other Administrative Duties</td><td>List of Duties</td><td>Consultancy &amp; Community Service</td><td class="loadrow">LOAD</td></tr>';


	$("#admintb tbody").html('');

	var heads =	'<tr><td>Project Title</td><td>Role</td><td>Project Size</td><td># of Members</td><td class="loadrow">LOAD</td></tr>';


	$("#researchtb tbody").html('');


	var heads =	'<tr><td>Course Code</td><td>Students #</td><td>Lecture Hrs</td><td>Lecture Weeks #</td><td>Tutorials/Week</td><td>Labs/Week</td><td>Burden Ratio</td><td class="loadrow">LOAD</td></tr>';


	//$("#courses tbody").html('');


	var heads =	'<tr><td>Supervisory Level</td><td>Role</td><td># of Students</td><td class="loadrow">LOAD</td></tr>';


	$("#superv tbody").html('');


	$('#sumdiv:first').remove();




}

function on_logoutt()
{
	$.removeCookie('staffid');

	window.location = "form1.php";


}

function define_titles()
{


}



function hover_effect(therow, timee)
{
//	$(therow).effect("highlight", {}, 1500);
	if(timee)
		$(therow).find('td').not('td:last').effect("highlight", {}, timee);
	else
		$(therow).find('td').not('td:last').effect("highlight", {}, 1000);
}



function hover_effect_normal(therow)
{
//	$(therow).effect("highlight", {}, 1500);

	$(therow).find('td').effect("highlight", {}, 1000);
}

function hover_teach()
{
	$('#courses tr').each(function(i,val){hover_effect(val);});
}

function hover_research()
{
	$('#researchtb tr').each(function(i,val){hover_effect(val);});
}


function hover_admin()
{
	$('#admintb tr').each(function(i,val){hover_effect_normal(val);});
}

function hover_super()
{
	$('#superv tr').each(function(i,val){hover_effect_normal(val);});
}

function hover_summ()
{
	$('#summtb tr').each(function(i,val){hover_effect_normal(val);});
}

