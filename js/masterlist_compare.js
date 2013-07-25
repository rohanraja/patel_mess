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


	on_loading(1);
	
	currsem = $('#sem').attr('value');
	$.cookie('sembool' , currsem );

	filt = "";

	if(e=="no")
		filt = "!";

	set_data(1, 1, 1, 1, 0, currsem, 'ALL', filt);
	
	drawChart_custom(parseFloat($('#tgrtotal').html()),parseFloat($('#sgrtotal').html()),parseFloat($('#rgrtotal').html()),parseFloat($('#agrtotal').html()), "All Departments", "chart_div" );
	
	
	set_data(1, 1, 1, 1, 0, currsem, 'CSE', filt);
	
	drawChart_custom(parseFloat($('#tgrtotal').html()),parseFloat($('#sgrtotal').html()),parseFloat($('#rgrtotal').html()),parseFloat($('#agrtotal').html()), "Computer and Software Engineering (CSE)", "chart_div1" );
	
	
	set_data(1, 1, 1, 1, 0, currsem, 'CSM', filt);
	
	drawChart_custom(parseFloat($('#tgrtotal').html()),parseFloat($('#sgrtotal').html()),parseFloat($('#rgrtotal').html()),parseFloat($('#agrtotal').html()), "Computational Science and Mathematics (CSM)", "chart_div2" );
	
	
	set_data(1, 1, 1, 1, 0, currsem, 'KT', filt);
	
	drawChart_custom(parseFloat($('#tgrtotal').html()),parseFloat($('#sgrtotal').html()),parseFloat($('#rgrtotal').html()),parseFloat($('#agrtotal').html()), "Knowledge Technologies and Information Systems (KTIS)", "chart_div3" );
	
	set_data(1, 1, 1, 1, 0, currsem, 'CSCT', filt);
	
	drawChart_custom(parseFloat($('#tgrtotal').html()),parseFloat($('#sgrtotal').html()),parseFloat($('#rgrtotal').html()),parseFloat($('#agrtotal').html()), "Computer Systems and Communication Technologies (CSCT)", "chart_div4" );


	
	
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
 	
	oncheckchange("se");
 
 
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


	$('.piechart').each(function(i,val){
		
		var chart = new google.visualization.PieChart(val);
		chart.draw(data, options);
		
	});

}



function drawChart_custom(a,b,c,d, deptname, chart_id)
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
	  title: deptname
	};



	var chart = new google.visualization.PieChart(document.getElementById(chart_id));
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

	 			
	 			onloading_complete();
	 				 			
	 			//$('#maintb').css('display', 'none');
	 			$('#maintb').fadeOut();
	 			$('#filter').fadeOut();
	 			$('#dept').fadeOut();
	 			

	 		}
	 	});


}

