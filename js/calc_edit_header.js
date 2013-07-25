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

	$(courses).each(function(i, val) {





	$("#courses tbody").append('<tr><td title="Course code : Select from the list of suggestions"><input disabled class="tinp" value="'+val[0]+'"></td><td title="Number of students in the course">'+val[1]+'</td><td title="Number of lecturing hours in a week you do. Use zero(0) if you are not teaching this course">'+val[2]+'</td><td title="A single course lecturer would have 14 lecture weeks while a shared course has variable number of weeks one teaches in a semester. If you are just tutoring for the course, use zero(0) here">'+val[3]+'</td><td title="Number of tutorial classes you conduct in each week. If you only teach a few tutorial sessions in a semester, then divide it by 14 weeks. e.g. 5 tutorial slots in a sem = 5/14 = 0.36">'+val[4]+'</td><td title="Number of Labs conducted by you in a week. If you only teach a few lab sessions in a semester, then divide it by 14 weeks. e.g. 5 lab slots in a sem = 5/14 = 0.36">'+val[5]+'</td><td title="For a shared course, the ratio determined to reflect the assessment marking burden workload. A single course lecturer would get 1.0 where else, typically two lecturers will have a ratio of 0.5">'+val[6]+'</td><td class="loadrow" title="Index score of this course">'+val[7]+'</td><td class ="tremb" style="display:none"><button onclick="ontrem(this)" title = "Remove this entry">-</button></td></tr>');

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





var grandtotal  =0;


// var name;



$(document).ready(function() {

	console.log("Start!");





	$('#summtb tr:first').find('td').each(function(i,val){$(val).replaceWith('<th>'+ $(val).html() + '</th>')});



	

	sfid = $.cookie("staffidforcheck");
	semm = $.cookie("semester");	
	name = $.cookie("name");

	$("#headname").html(name);
	$("#headsem").html(semm);



	$.ajaxSetup({
		async: false
	});

 //	clear_tables();
 	write_tables(sfid,semm);
// 
 	// $( "#tcheck" ).button();
 	// $( "#scheck" ).button();
 	// $( "#rcheck" ).button();
 	// $( "#acheck" ).button();
 	// 
 	// $( "#tadd" ).button();
 	// $( "#radd" ).button();


 	$('#researchtb tr:first').find('td').each(function(i,val){$(val).replaceWith('<th><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger = "hover">'+ $(val).html() + '</a></th>')});
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
 //	$( "th" ).tooltip();


	//send_array(get_superv(), 's', 132);


	common_onready();

	//hover_effect($('tr'));



	$('.editbut').remove();
//	teach_formula();  //TEMP
 });

var restot;

function write_tables(staffidd, semme)
{
	sfid = staffidd;
	semm = semme;
	
	
	

	$.getJSON('send_main.php?sid='+sfid+'&sem='+semm+'&type=t',
	 	function(data){
		 	

			
	 		restot = data.pop();
	 		set_courses(data);
	 		$("#totteach").html(restot);
	 		$("#totteach2").html(restot);


	 		
	 	});

	 	$.getJSON('send_main.php?sid='+sfid+'&sem='+semm+'&type=s',
	 	function(data){

	 		restot = data.pop();
	 		set_superv(data);
	 		$("#totsuper").html(restot);
	 		$("#totsuper2").html(restot);
	 	});

	 	$.getJSON('send_main.php?sid='+sfid+'&sem='+semm+'&type=r',
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
		$("#totgrand").html(Math.round(grandtotal));


	 	perteach = parseFloat($("#totteach").html())/parseFloat($("#totgrand").html());
	 	$("#perteach").html(Math.round(perteach*100));
	 	$("#perteach2").html(Math.round(perteach*100));

	 	perteach = parseFloat($("#totsuper").html())/parseFloat($("#totgrand").html());
	 	$("#persuper").html(Math.round(perteach*100));
	 	$("#persuper2").html(Math.round(perteach*100));

	 	perteach = parseFloat($("#totresearch").html())/parseFloat($("#totgrand").html());
	 	$("#perresearch").html(Math.round(perteach*100)); 	
	 	$("#perresearch2").html(Math.round(perteach*100)); 	

	 	perteach = parseFloat($("#totadmin").html())/parseFloat($("#totgrand").html());
	 	$("#peradmin").html(Math.round(perteach*100));
	 	$("#peradmin2").html(Math.round(perteach*100));

	 //	drawChart(parseInt($("#perteach").html()),parseInt($("#persuper").html()),parseInt($("#perresearch").html()),parseInt($("#peradmin").html()));


	 	$('section input').css('background-color', 'transparent');
	 	$('section input').css('border', 'none');


	// 	$('table').after('<h4 class="total text-success">TOTAL : <span id="totteach">14</span> hours (<span id="perteach">44</span>%)</h4><br><hr><br>');

	 	//$('#resultview h2:first').before();


//	 	$('section:first').before($('#sumdiv').clone());

	// 	drawChart(parseInt($("#perteach").html()),parseInt($("#persuper").html()),parseInt($("#perresearch").html()),parseInt($("#peradmin").html()));
	 	//alert('newchart');
}

function clear_tables()
{
	on_loading(1);

	var heads =	'<tr><td>Appointed Position</td><td>Other Position</td><td>Other Administrative Duties</td><td>List of Duties</td><td>Consultancy &amp; Community Service</td><td class="loadrow">LOAD</td></tr>';


	$("#admintb tbody").html('');

	var heads =	'<tr><td>Project Title</td><td>Role</td><td>Project Size</td><td># of Members</td><td class="loadrow">LOAD</td></tr>';


	$("#researchtb tbody").html('');


	var heads =	'<tr><td>Course Code</td><td>Students #</td><td>Lecture Hrs</td><td>Lecture Weeks #</td><td>Tutorials/Week</td><td>Labs/Week</td><td>Burden Ratio</td><td class="loadrow">LOAD</td></tr>';


	$("#courses tbody").html('');


	var heads =	'<tr><td>Supervisory Level</td><td>Role</td><td># of Students</td><td class="loadrow">LOAD</td></tr>';


	$("#superv tbody").html('');


//	$('#sumdiv:first').remove();

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

		console.log($($(val).find('a')[0]).attr('data-content', 'Dean : 12, Deputy Dean : 12, HOD : 10, PC : 8, MAIT Coord : 4, Others : 2'));
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
		console.log($($(val).find('a')[1]).attr('data-content', '"M" for Member and "L" for Leader'));
		console.log($($(val).find('a')[2]).attr('data-content', '"1" for Small, "2" for Medium, "3" for Large'));
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


var newcodes = [];


function formType (type, butid, tableid) {

	this.type = type;

	this.checkname = butid;

	this.tid = tableid;

	this.onchangee = function() {

		console.log('on change called');



	//	val = document.getElementById(this.checkname).checked;
		val = $("#"+this.checkname ).hasClass('active');
		val = process_bool_3(val);
		if(!val)
		{

			console.log('Has no active CLASS');
			$("#"+this.checkname ).html("Save");
			$("#"+this.checkname ).addClass('btn-danger');
			//$("#"+this.tid).css( "background-color", 'green' );

			$("#"+this.tid +' tr').addClass('success')

			$("#"+this.tid + " td").attr('contenteditable', 'true');

			disable_some_contentedit();


			if(this.type=='t')
			{
				$('.tremb').css('display', 'block');
				$('.tremb button').addClass('btn-tiny btn-danger');
				$('#tadd').css('display', 'block');
				$('.tinp').prop('disabled', false);

				$('#courses input').parent().attr('contenteditable', false);
				$('#courses button').parent().attr('contenteditable', false);


			}

			if(this.type=='r')
			{	
				$('.rremb').css('display', 'block');
				$('#radd').css('display', 'block');	
				$('#researchtb button').parent().attr('contenteditable', false);

			}
		}

		else
		{


			switch (this.type)
			{
			case 't':




			  $(newrows).each(function(i,val){


				  newcodes.push($(val).val());

				  //hover_effect($(val).parent().parent());
			  });


			  for(i=0; i<$('.tinp').length ; i++)
			  {

			 	 if(jQuery.inArray($($('.tinp')[i]).attr('value'), checkarray)== -1)
			 	 {
				 	 $($('.tinp')[i]).attr('value',"");


				 	 console.log('Check CourseCode');

				 	 // return 0;

			 	 }
			 }
			 newtb = get_courses();
			 $('.tinp').prop('disabled', true);

			  $('.tremb').css('display', 'none');
			  $('#tadd').css('display', 'none');





			  break;
			case 's':
			  newtb = get_superv();
			  break;
			case 'r':


			  for(i=0; i<$('.rolee').length ; i++)
			  {
				  if(!($('.rolee')[i].innerHTML == 'M' || $('.rolee')[i].innerHTML == 'L' ))
				  {		alert('Check Role');
						$('.rolee')[i].innerHTML = "";

					  	return 0;
				   }
			  }

			  for(i=0; i<$('.siz').length ; i++)
				{
			  	  if(!($('.siz')[i].innerHTML == '1' || $('.siz')[i].innerHTML == '2' || $('.siz')[i].innerHTML == '3' ))
			  	  {	alert('Check Project Size');
			  	  	$('.siz')[i].innerHTML = "";

			  	  	return 0;
			  	   }
				}

				$('.rremb').css('display', 'none');
				$('#radd').css('display', 'none');
				newtb = get_research();
			  break;
			case 'a':
			  newtb = get_admin();
			  break;
			}



			console.log('Has active CLASS');


			on_loading(1);

			//alert('LOADINGGG');

			send_array(newtb, this.type, sfid, semm);

			clear_tables();
			write_tables(sfid,semm);

			console.log("UPDATING");
			console.log(newtb);



			$("#"+this.checkname ).html("Edit");
			$("#"+this.checkname ).removeClass('btn-danger');
			$("#"+this.tid +' tr').removeClass('success')
			$("#"+this.tid + " td").attr('contenteditable', 'false');

		}
	};

	this.helloo = function() {

	alert('hi');

	}
}

function process_bool_3(val)
{
	if(val)
		return 1;
	else
		return 0;
}



function send_array(arname, typee, sidd, semmm)
{


	console.log("Sending Array");



	console.log(JSON.stringify(arname));

	$.ajax({
							type : "POST",
							url : "edit_table.php",
							dataType : 'json',
							data : {
							ardata : JSON.stringify(arname), type : typee, sid : sidd, sem : semmm
									}
							});


}



function ontrem(e)
{
	var therow = $(e).parent().parent();


	var r=confirm("Are you sure you want to delete this entry!") ;

	if(r)
		$(e).parent().parent().remove();
}


function onrrem(e)
{
	var therow = $(e).parent().parent();

	var r=confirm("Are you sure you want to delete this entry!") ;

	if(r)
		$(e).parent().parent().remove();
}


newrows = [];

function tadd()
{

	set_courses([['','','','','','','','']]);

	newrows.push($('[value=""]'));

	$('[value=""]').parent().parent().addClass('success');

	hover_effect_normal($('[value=""]').parent().parent());




	// 
	// $('#courses input:last').typeahead({source : availableTags ,minLength : 3, updater : function(e)
	// 		{
	// 
	// 			var finalsug = e.split(" ")[0];
	// 			
	// 			console.log(finalsug);
	// 			
	// 
	// 			//$('#courses input:last').val(finalsug);
	// 			
	// 			return finalsug;
	// 
	// 		} 
	// 
	// });

	$("#courses td").attr('contenteditable', 'true');
	disable_some_contentedit();



	$('.tremb').css('display', 'block');

	$('.tinp').prop('disabled', false);

	define_titles();

//	$( "td" ).tooltip();

}


function radd()
{

	set_research([['','','','','']]);

	$('.rremb:last').parent().addClass('success');

	hover_effect_normal($('.rremb:last').parent());


	$("#researchtb td").attr('contenteditable', 'true');

	disable_some_contentedit();


	$('.rremb').css('display', 'block');

	define_titles();



//	$( "td" ).tooltip();

}


var tcount = 0;

var data2 =[];

var checkarray = [];

function ontdown(e)
{

// 
//    $(e).autocomplete({
//      source: data2
//    });


}

// 
// function drawChart(a,b,c,d)
// {
// 
// 
// try
//   {
//   //Run some code here
// 
// 
// 	var data = google.visualization.arrayToDataTable([
// 	  ['Summary', 'Distribution'],
// 	  ['Teaching',    a],
// 	  ['Supervision',      b],
// 	  ['Research Projects',  c],
// 	  ['Administrative', d]
// 	]);
// 
// 	}
// 
// 	catch(err)
// 	{
// 		console.log('Sorry.. No Internet hence No Pie Chart');
// 		console.log(err);
// 		$('#chart_div').remove();
// 		return false;
// 	}
// 
// 	var options = {
// 	  title: 'Weightage Distribution'
// 	};
// 
// 	var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
// 	// 
// 	// google.visualization.events.addListener(chart, 'error', function(err) {
// 	//   alert('ERROR');
// 	//   console.log(err);
// 	//   
// 	// });
// 
// 	chart.draw(data, options);
// }


function disable_some_contentedit()
{
	$('table').find('tr:first td').attr('contenteditable', 'false');
	$('.loadrow').attr('contenteditable', 'false');
	$('#superv td:nth-child(4n + 1)').attr('contenteditable', 'false');	
	$('#superv td:nth-child(4n + 2)').attr('contenteditable', 'false');

	$('#courses input').parent().attr('contenteditable', false);
	$('#courses button').parent().attr('contenteditable', false);
}


availableTags=["TMC1013 - System Analysis and Design|TMC1013",  "TMC1014 - System   Analysis and Design|TMC1014", "TMC1213 - Computer Architecture|TMC1213", "TMC1214 - Computer  Architecture and Organisation|TMC1214", "TMC1233 - Operating Systems|TMC1233", "TMC1234 - Operating Systems|TMC1234", "TMC1253 - Communication and Computer   Network|TMC1253", "TMC1254 - Communication and Computer Network|TMC1254", "TMC1413 - Introduction to Programming|TMC1413",   "TMC1414 - Principles of Computing|TMC1414", "TMC1433 -  Data Structure and Algorithms|TMC1433", "TMC1434 - Data Structure and   Algorithms|TMC1434", "TMC1813 - Discrete  Mathematics|TMC1813", "TMC1814 - Discrete Structures|TMC1814", "TMC1832 - Calculus|TMC1832", "TMC1833 - Calculus|TMC1833", "TMC1852 - Linear Algebra|TMC1852", "TMC1853 - Linear Algebra|TMC1853", "TMC1874 -   Mathematics for  Computing|TMC1874", "TMC2013 - Visual Computing|TMC2013", "TMC2033 - Database Concept and Design|TMC2033",   "TMC2034  - Database Concept and Design|TMC2034", "TMC2053 - E-Commerce Application|TMC2053", "TMC2214 - Computer Security|TMC2214", "TMC2413 - Object Oriented Software Development|TMC2413", "TMC2434 - Software Engineering and Application    Development|TMC2434", "TMC2454 - Intelligent Systems|TMC2454", "TMC2654 - Web Based System Development|TMC2654",  "TMC2813 -   Introductory Statistics|TMC2813", "TMC3012 - Ethics and Professionalism|TMC3012", "TMC3034 -  Productisation and   Technopreneurship|TMC3034", "TMC3613 - Web Based System Development|TMC3613", "TMC4013 -  Technopreneurship and Product   Development|TMC4013", "TMC5534 - Distributed Computing|TMC5534", "TMC5554 - Multi- agent Systems|TMC5554", "TMC5574 - Web   Technologies|TMC5574", "TMC6014 - Decision Support Systems|TMC6014",  "TMC6034 - Information Infrastructure|TMC6034", "TMC6054 -   Object Oriented Application Development|TMC6054",  "TMC6094 - Multimedia Communications|TMC6094", "TMC6174 - Intelligent   Systems|TMC6174", "TMC6214 - Computer  Security|TMC6214", "TMC6234 - Advanced Databases|TMC6234", "TMC6254 - Mobile Computing|TMC6254", "TMC6414 -  Quantitative Methods|TMC6414", "TMC6434 - Grid Computing|TMC6434", "TMC6454 - Computational Linguistics|TMC6454",  "TMC6494 - Image Processing and Analysis|TMC6494", "TMC6514 - Advanced Software Engineering|TMC6514", "TME1013 -    Introduction to Software Engineering|TME1013", "TME1033 - Introduction to Artificial Intelligence Systems|TME1033",  "TME2013 -   Software Engineering and Application Development|TME2013", "TME2033 - Object-Oriented Software  Development|TME2033", "TME2053 -   Knowledge Based System|TME2053", "TME2073 - Intelligent Systems|TME2073", "TME2093  - Domain and Requirement Analysis|TME2093",   "TME2113 - Logic Programming|TME2113", "TME3013 - Domain and  Requirement Analysis|TME3013", "TME3033 - Expert Systems|TME3033",   "TME4013 - Formal Methods|TME4013", "TME4033 -  Software Quality|TME4033", "TME4093 - Advanced Topics in Software Engineering|TME4093", "TMI1013 - Introduction to  Information Systems|TMI1013", "TMI2053 - Information Systems in Organisations|TMI2053",   "TMI2073 - Advanced  Database Management Systems|TMI2073", "TMI3033 - Strategic Information Systems|TMI3033", "TMI3053 - Human   Computer  Interaction|TMI3053", "TMI3073 - Human Centered Technology|TMI3073", "TMI3113 - Technopreneurship and Product    Development|TMI3113", "TMI4013 - Data Mining|TMI4013", "TMI4033 - Collective Intelligence|TMI4033", "TMI4093 -  Advanced Topics   in Information Systems|TMI4093", "TMM5034 - Network Technologies|TMM5034", "TMM5054 - Principles of  Software Engineering|TMM5054", "TMM5074 - Multimedia Technologies|TMM5074", "TMM5094 - Knowledge Management|TMM5094", "TMM5114 - IT Policy and   Strategy|TMM5114", "TMM5134 - Community Informatics|TMM5134", "TMM5154 - Human  Computer Interaction|TMM5154", "TMM5174 -   Technopreneurship|TMM5174", "TMM5194 - Emerging Technologies|TMM5194",  "TMM5214 - Information and Resource Management|TMM5214",   "TMM5234 - Natural Science Computing|TMM5234", "TMM5254 -  Industrial Design|TMM5254", "TMN1013 - Introduction to Computer   Technologies|TMN1013", "TMN2013 - Microcomputer  Interfacing|TMN2013", "TMN2053 - System Programming|TMN2053", "TMN2073 -   Computer Security|TMN2073", "TMN2093 -  Computer System Administration and Management|TMN2093", "TMN3013 - Distributed System|TMN3013", "TMN3033 - Network  Performance and Simulation|TMN3033", "TMN3053 - System Programming|TMN3053", "TMN3073 - Wireless   Networks|TMN3073",  "TMN4013 - Distributed System|TMN4013", "TMN4033 - Introduction to Embedded System|TMN4033", "TMN4053 -   Broadband  Network Technology|TMN4053", "TMN4073 - Wireless and Mobile Network|TMN4073", "TMN4093 - Advanced Topics in  Computer   Networking|TMN4093", "TMP1613 - Multimedia Technology|TMP1613", "TMP2013 - Information Systems  Laboratory|TMP2013", "TMP2113 -   Project Management|TMP2113", "TMP2213 - Internetworking Technology Laboratory|TMP2213", "TMP2413 - Software Engineering   Laboratory|TMP2413", "TMP2613 - Interactive Multimedia Laboratory|TMP2613", "TMP2634 - Multimedia Programming|TMP2634", "TMP2713   - Computational Science Laboratory|TMP2713",  "TMP2813 - Computational Science Laboratory|TMP2813", "TMP3012 - Final Year  Project  I|TMP3012", "TMP3034 - Final  Year Project II|TMP3034", "TMP3113 - Project Management|TMP3113", "TMP3213 -  Internetworking  Technology  Laboratory|TMP3213", "TMP3413 - Software Engineering Laboratory|TMP3413", "TMP3613 - Interactive  Multimedia   Laboratory|TMP3613", "TMP4013 - Information Systems Laboratory|TMP4013", "TMP4913 - Final Year Project I|TMP4913",   "TMP4935 -  Final Year Project II|TMP4935", "TMS1013 - Excursions in Modern Mathematics|TMS1013", "TMS2033 -  Differential Equations|TMS2033",  "TMS2073 - Statistical Data Analysis|TMS2073", "TMS2123 - Numerical Methods|TMS2123", "TMS2133 - Numerical Methods|TMS2133",  "TMS2153 - Multivariable Calculus|TMS2153", "TMS3033 - Operational  Research|TMS3033", "TMS3053 - Statistical Data  Analysis|TMS3053", "TMS3063 - Operational Research|TMS3063",  "TMS3073 - Parallel Processing|TMS3073", "TMS3093 - Mathematical  Modelling  and Simulation|TMS3093", "TMS4013 -  Parallel Processing|TMS4013", "TMS4093 - Advanced Topics in Computational  Science|TMS4093",  "TMT1013 - Web Design  and Technologies|TMT1013", "TMT2013 - Multimedia Programming|TMT2013", "TMT2033 -  Introduction to Computer   Graphics|TMT2033", "TMT2053 - Computer Game Design and Development|TMT2053", "TMT3013 - Web Based  System  Development|TMT3013",  "TMT3033 - Visualization and Image Processing|TMT3033", "TMT3053 - Computer Game Design and   Development|TMT3053", "TMT3073 -  Data Visualization|TMT3073", "TMT4053 - Multimodal Interaction Technology|TMT4053", "TMT4073 -  Digital Image Processing|TMT4073", "TMT4093 - Advanced Topics in Multimedia Computing|TMT4093", "TMX1010 - End User Computing|TMX1010", "TMX2012 - IT  Tools for Knowledge Workers|TMX2012", "TMY2908 -  Industrial Training|TMY2908", "TMY3912 - Industrial  Training|TMY3912", "SSX0012 - Islamic and Asian Civilisations|SSX0012"];


	for (var i = 0; i < availableTags.length; i++) {

		tmp = availableTags[i].split(" ")[0];

		data2.push({'label' : availableTags[i], 'value' : tmp});
		checkarray.push(tmp);

	}