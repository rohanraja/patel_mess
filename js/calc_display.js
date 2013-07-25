function get_courses()
{
	courses = [];
	
	
	$('#courses tr').each(function(i, val) {
	
		if(i==0)
			return true;
		
		eles = [];
	
		$(this).children().each(function(j, vall) {
	
			eles[j] = $(vall).html();
		//	console.log($(vall).html());
	
	
		});
	
		console.log(eles);
		
		courses[i-1] = eles;
	
	
	 });
	
	
	return courses;
	
}


allcourses = [["TMC1014", "2", "2.00", "099", "2.00", "2.00", "2.00", 1.1], ["TMC2813", "2", "2.00", "1", "4.00", "2.00", "4.00", 2.4] , ["TMC4013", "63", "3.9800", "2", "0.00", "0.00", "0.50", 9.1]];



function set_courses(courses)
{
		
	$(courses).each(function(i, val) {
		



		
	$("#courses tbody").append('<tr><td>'+val[0]+'</td><td>'+val[1]+'</td><td>'+val[2]+'</td><td>'+val[3]+'</td><td>'+val[4]+'</td><td>'+val[5]+'</td><td>'+val[6]+'</td><td class="loadrow">'+val[7]+'</td></tr>');

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



		$("#researchtb tbody").append('<tr><td>'+val[0]+'</td><td>'+val[1]+'</td><td>'+val[2]+'</td><td>'+val[3]+'</td><td class="loadrow">'+val[4]+'</td></tr>');

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


function chksession2(){


	var result = $.cookie("staffid");

		if( result == "null" || result == null ){
			alert("NOT LOGGED IN!!");
			
			return 0;
		}
		
		
		else
			return 1;


}

function onsemselect(x)
{
	semm = x;
	$("#headsem").html(semm);
	clear_tables();
	write_tables(sfid,x);
	
	
}

var grandtotal  =0;

 var sfid ;
// var semm ;
// var name;

$(document).ready(function() {

	console.log("Start!");
	
	
	sess = chksession2();
	if(sess==0)
		window.location = "form1.php";

	sfid = $.cookie("staffid");
	semm = $.cookie("semester");	
	name = $.cookie("name");
	
	$("#headname").html(name);
	$("#headsem").html(semm);
	

	
	$.ajaxSetup({
		async: false
	});
 	
 	clear_tables();
 	write_tables(sfid,semm);
 	
 	
 
 });
 
 
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
}
 
function clear_tables()
{
	var heads =	'<tr><td>Appointed Position</td><td>Other Position</td><td>Other Administrative Duties</td><td>List of Duties</td><td>Consultancy &amp; Community Service</td><td class="loadrow">LOAD</td></tr>';
	
	
	$("#admintb tbody").html(heads);
	
	var heads =	'<tr><td>Project Title</td><td>Role</td><td>Project Size</td><td># of Members</td><td class="loadrow">LOAD</td></tr>';
	
	
	$("#researchtb tbody").html(heads);
	
	
	var heads =	'<tr><td>Course Code</td><td>Students #</td><td>Lecture Hrs</td><td>Lecture Weeks #</td><td>Tutorials/Week</td><td>Labs/Week</td><td>Burden Ratio</td><td class="loadrow">LOAD</td></tr>';
	
	
	$("#courses tbody").html(heads);


	var heads =	'<tr><td>Supervisory Level</td><td>Role</td><td># of Students</td><td class="loadrow">LOAD</td></tr>';
	
	
	$("#superv tbody").html(heads);
	

	
}

function on_logoutt()
{
	$.removeCookie('staffid');

	window.location = "form1.php";
	
	
}