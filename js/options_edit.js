

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
	
	
	return meal_array;
}


function get_options(table_id)
{

	meal_array = [];


	$('#'+table_id+' td').not('#'+table_id+' td:nth-child(5n+1)').each(function(i,val){
		

		price = ($(val).find('.i_price').html());
		namee = $(val).find('b').html() ;
		tmpp = [];
		
		if(price)
		{
			tmpp.push(namee);
			tmpp.push(price);
		}
		else
		{
			tmpp.push("");
			tmpp.push("");
			
		}
		
		meal_array.push(tmpp);
		
	});


	return meal_array;
}



function send_options(arr, type)
{
	
	$.ajax({
		type : "POST",
		url : "options_edit.php",
		dataType : 'json',
		data : {
		ardata : JSON.stringify(arr), type : type
				}
		});
	
	
}

function set_bf(marr,table_id)
{


	$('#'+table_id+' td').not('#'+table_id+' td:nth-child(5n+1)').each(function(i,val){
		
		if(marr[i])
			$(val).addClass('active')
		else
			$(val).removeClass('active')
		
	});
	
	
}

function get_meal_total(table_id)
{

	marr = get_bf(table_id);

	totall = 0;

	$('#'+table_id+' td').not('#'+table_id+' td:nth-child(5n+1)').each(function(i,val){
		
		if(marr[i])
			totall = totall + parseInt($(val).find('.i_price').html());
		
	});
	
	$('#'+table_id).parent().find('h4 span').eq(0).html(totall);

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



		common_onready();
		
		
		$('table td b').attr('contenteditable', 'true');
		$('table td .i_price').attr('contenteditable', 'true');


	//		clear_tables();
	//	write_tables(sfid,semm);

		//admin_formula();
}

var grandtotal;


function on_logoutt()
{
	$.removeCookie('staffid');

	window.location = "form1.php";


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

