function on_check_click(e)
{
	//$(e).parent().toggleClass('inactive');
	$(e).parent().toggleClass('active');

}

function on_td_click(e)
{
	//$(e).parent().toggleClass('inactive');
	$(e).toggleClass('active');

}

function get_courses()
{
	courses = [];


	$('#courses tr').each(function(i, val) {

		if(i==0)
			return true;

		eles = [];

		$(this).children().each(function(j, vall) {
			
			if(j==0)
				eles[j] = $(vall).find('input').val();
			else
				eles[j] = $(vall).html();
		//	console.log($(vall).html());


		});

		console.log(eles);

		courses[i-1] = eles;


	 });

	console.log(courses);

	return courses;

}


allcourses = [["TMC1014", "2", "2.00", "099", "2.00", "2.00", "2.00", 1.1], ["TMC2813", "2", "2.00", "1", "4.00", "2.00", "4.00", 2.4] , ["TMC4013", "63", "3.9800", "2", "0.00", "0.00", "0.50", 9.1]];



function set_courses(courses)
{

	// $("#courses").after('<div class="alert"><button type="button" class="close" data-dismiss="alert">×</button><strong>Warning!</strong></div>');
	
	$(courses).each(function(i, val) {





	$("#courses tbody").append('<tr><td title="Course code : Select from the list of suggestions"><input disabled class="tinp" value="'+val[0]+'"></td><td title="Number of students in the course">'+val[1]+'</td><td title="Number of lecturing hours in a week you do. Use zero(0) if you are not teaching this course">'+val[2]+'</td><td title="A single course lecturer would have 14 lecture weeks while a shared course has variable number of weeks one teaches in a semester. If you are just tutoring for the course, use zero(0) here">'+val[3]+'</td><td title="Number of tutorial classes you conduct in each week. If you only teach a few tutorial sessions in a semester, then divide it by 14 weeks. e.g. 5 tutorial slots in a sem = 5/14 = 0.36">'+val[4]+'</td><td title="Number of Labs conducted by you in a week. If you only teach a few lab sessions in a semester, then divide it by 14 weeks. e.g. 5 lab slots in a sem = 5/14 = 0.36">'+val[5]+'</td><td title="For a shared course, the ratio determined to reflect the assessment marking burden workload. A single course lecturer would get 1.0 where else, typically two lecturers will have a ratio of 0.5">'+val[6]+'</td><td class="loadrow" title="Index score of this course">'+val[7]+'</td><td class ="tremb" style="display:none"><button onclick="ontrem(this)" title = "Remove this entry">-</button></td></tr>');

	 });
	 
	 

	 
	 $('#courses input').typeahead({source : availableTags ,minLength : 3, updater : function(e)
	 		{
	 
	 			var finalsug = e.split(" ")[0];
	 			
	 			
	 			return finalsug;
	 
	 		} 
	 
	 });


}


function get_superv()
{
	rows = [];


	$('#superv tr').each(function(i, val) {

		if(i==0)
			return true;

		eles = [];

		$(this).children().each(function(j, vall) {

			eles[j] = $(vall).html();


		});

		rows[i-1] = eles;


	 });


	console.log(rows);
	return rows;

}


function set_superv(rows)
{


	$(rows).each(function(i, val) {



		$("#superv tbody").append('<tr><td>'+val[0]+'</td><td>'+val[1]+'</td><td>'+val[2]+'</td><td class="loadrow">'+val[3]+'</td></tr>');

	 });


}

function get_research()
{
	rows = [];



	$('#researchtb tr').each(function(i, val) {

		if(i==0)
			return true;

		eles = [];

		$(this).children().each(function(j, vall) {

			eles[j] = $(vall).html();


		});

		rows[i-1] = eles;


	 });


	console.log(rows);
	return rows;


}



function set_research(rows)
{


	$(rows).each(function(i, val) {



		$("#researchtb tbody").append('<tr><td>'+val[0]+'</td><td class="rolee">'+val[1]+'</td><td class="siz">'+val[2]+'</td><td>'+val[3]+'</td><td class="loadrow">'+val[4]+'</td><td class ="rremb" style="display:none"><button onclick="onrrem(this)" title = "Remove this entry">-</button></td></tr>');

	 });


}


function get_admin()
{
	rows = [];


	$('#admintb tr').each(function(i, val) {

		if(i==0)
			return true;

		eles = [];

		$(this).children().each(function(j, vall) {

			eles[j] = $(vall).html();


		});

		rows[i-1] = eles;


	 });


	console.log(rows);
	return rows;


}


function set_admin(rows)
{


	$(rows).each(function(i, val) {



		$("#admintb tbody").append('<tr><td>'+val[0]+'</td><td>'+val[1]+'</td><td>'+val[2]+'</td><td>'+val[3]+'</td><td>'+val[4]+'</td><td class="loadrow">'+val[5]+'</td></tr>');

	 });


}



 

 function onsemselect()
 {
 
 	semm = $('#sem').attr('value');
 	$.cookie("semester",semm);
 	
 	clear_tables();
 	write_tables(sfid,semm);
 
 
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
	 	write_tables(sfid,semm);
	
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
		
		
		//	clear_tables();
		//write_tables(sfid,semm);
		
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
	 	//	set_superv(data);
	 		$("#totsuper").html(restot);
	 		$("#totsuper2").html(restot);
	 	});

	 	$.getJSON(url_head+sfid+'&sem='+semm+'&type=r',
	 	function(data){

	 		restot = data.pop();
	 	//	set_research(data);
	 		$("#totresearch").html(restot);
	 		$("#totresearch2").html(restot);

	 	});

	 	$.getJSON('send_main.php?sid='+sfid+'&sem='+semm+'&type=a',
	 	function(data){

	 		restot = data.pop();
	 	//	set_admin(data);
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
	 	
	 	
	 	$('section:first').before($('#sumdiv').clone());
	 	
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
	
	$("#courses tbody td").attr('data-content' , '');
	
	
	$($('#admintb tr')).each(function(i, val)
	{
		if(i!=0)
			return true
		
		console.log($($(val).find('a')[0]).attr('data-content', 'Dean : 14, Deputy Dean : 12, HOD : 10, PC : 8, MAIT Coord : 4, Others : 2'));
		console.log($($(val).find('a')[1]).attr('data-content', 'What is your faculty appointed position if you claiming 2 hours under others'));
		console.log($($(val).find('a')[2]).attr('data-content', 'A maximum of 2 hours only can be claimed'));
		console.log($($(val).find('a')[3]).attr('data-content', 'What are the list of admin duties apart from faculty appointed role'));
		console.log($($(val).find('a')[4]).attr('data-content', 'A maximum of 1 hour for Consultancy work & 1 hour of Community-related work for a max of 2 hours to be claimed'));
		
		console.log($($(val).find('a')[5]).attr('data-content', 'Total index score for this category'));
	
	
	});
	
	$($('#researchtb thead ')).each(function(i, val)
	{
		if(i!=0)
		return true
		
		console.log($($(val).find('a')[0]).attr('data-content', 'Title of the Project'));
		
		console.log($($(val).find('th')[0]).attr('title', 'Title of the Project'));

		console.log($($(val).find('a')[1]).attr('data-content', '"M" for Member and "L" for Leader'));

		console.log($($(val).find('th')[1]).attr('title', '"M" for Member and "L" for Leader'));

		console.log($($(val).find('a')[2]).attr('data-content', '"1" for < RM 10k, "2" for RM 10k-30k, "3" for RM 50k-100k, "4" for RM > 100k'));
		console.log($($(val).find('a')[3]).attr('data-content', 'This number is to be determined by the project leader to ensure only working members are accounted for'));
		console.log($($(val).find('a')[4]).attr('data-content', 'Total index score of this project'));

	
	
	});
	
	$($('#superv tr')).each(function(i, val)
	{
		if(i!=0)
		return true
		
		console.log($($(val).find('a')[0]).attr('data-content', 'Supervision Level'));
		console.log($($(val).find('a')[1]).attr('data-content', 'Main or Co-op'));
		console.log($($(val).find('a')[2]).attr('data-content', 'Number of Students you have in a year'));
		console.log($($(val).find('a')[3]).attr('data-content', 'Index score for supervision in this degree'));
	
	
	
	});

	$($("#courses thead tr a")[0]).attr('data-content', 'Course code : Select from the list of suggestions');
	$($("#courses thead tr a")[1]).attr('data-content', 'Number of students in the course');
	$($("#courses thead tr a")[2]).attr('data-content', 'Number of lecturing hours in a week you do. Use zero(0) if you are not teaching this course');
	$($("#courses thead tr a")[3]).attr('data-content', 'A single course lecturer would have 14 lecture weeks while a shared course has variable number of weeks one teaches in a semester. If you are just tutoring for the course, use zero(0) here');
	$($("#courses thead tr a")[4]).attr('data-content', 'Number of tutorial classes you conduct in each week. If you only teach a few tutorial sessions in a semester, then divide it by 14 weeks. e.g. 5 tutorial slots in a sem = 5/14 = 0.36');
	$($("#courses thead tr a")[5]).attr('data-content', 'Number of Labs conducted by you in a week. If you only teach a few lab sessions in a semester, then divide it by 14 weeks. e.g. 5 lab slots in a sem = 5/14 = 0.36');
	$($("#courses thead tr a")[6]).attr('data-content', 'For a shared course, the ratio determined to reflect the assessment marking burden workload. A single course lecturer would get 1.0 where else, typically two lecturers will have a ratio of 0.5');
	$($("#courses thead tr a")[7]).attr('data-content', 'Index score of this course');

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

