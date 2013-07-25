var oldcolor ;
$(document).ready(function() {
	
	chksession2();
	

	
	
});

function after_login_functions()
{
	
	$('button').button();
	
	onloading_complete();
	
	setTimeout(function(){$('.cinactive').fadeOut(1000);}, 3000);
	
	
	
	retrieve_display();
	
}


function onDedit(e)
{
	
	if($(e).find('span').html()=="Edit")
	
	{	$ditem = $($('#dedit').parent().parent().find('td')[1]) ;
			
		$ditem.find('select')[0].disabled = false;
		
		$ditem.find('input').focus();
		
		$(e).find('span').html("Save");
		
		
		var availableTags = ["Computer Science", "Electrical and Electronics", "Mechanical", "Civil"
		];
		$ditem.find('input').autocomplete({
		  source: availableTags
		});
		
		
		
	}
	
	
	else
	
	{	$ditem = $($('#dedit').parent().parent().find('td')[1]) ;
			
		$ditem.find('select')[0].disabled = true;
		
	//	$ditem.find('input').focus();
		
		$(e).find('span').html("Edit");
		
		get_and_send();
		
		
	}
	


}




function onEedit(e)
{

	if($(e).find('span').html()=="Edit")

	{	
		
		$('#etb input').removeAttr("disabled");

		$(e).find('span').html("Save");
		
		$('#etb input').focus();
		
		$('#etb input').parent().parent().append('<td><button onclick="onerem(this)">-</button></td>');
		
		$('#etb').append('<tr><td class="newe"></td><td><button onclick="oneadd()">Add</button></td></tr>');


	}


	else
	{			
	
		$('#etb input').attr("disabled","disabled");


	//	$ditem.find('input').focus();

		$(e).find('span').html("Edit");
		
		$('#etb input').each(function(i,v)
		
		{
			vall = $(v).val();
			if(!vall)
				$(v).parent().parent().remove();
			
		});
		
		$('#etb tr').find('button').parent().remove();
		
		$('#etb').find('.newe').parent().remove();
		
		get_and_send();
		



	}



}


function onCedit(e)
{
	if($(e).find('span').html()=="Edit")
	
	{	
		$('.cinactive').fadeIn();	
		$(e).find('span').html("Save");
		$("#careastb tr").hover(
		  function () {
			
			oldcolor = $(this).find('input').css('color');
			$(this).find('input').css('color', 'black');
			$(this).css('cursor', 'pointer');
		  },
		  function () {
			$(this).find('input').css('color', oldcolor);
		  }
		);
		
		$('#careastb tr').attr('onclick', 'oncoreclick(this)');

			
	}
	
	
	else
	{			
	
		$('.cinactive').fadeOut('slow');
		$(e).find('span').html("Edit");
		$('#careastb tr').attr('onclick', '');
		$('#careastb tr').unbind('mouseenter mouseleave');
	
		get_and_send();
	
	
	}
	

}

function oncoreclick(e)
{
	console.log(e);
	
	if($(e).hasClass('cactive'))
	{
		$(e).removeClass('cactive');
		$(e).attr('class','cinactive');
		oldcolor = "grey";		
		
	}
	else
	{
		$(e).removeClass('cinactive');
		$(e).attr('class','cactive');
		oldcolor = "green";
		
	}
		

		
}

function onerem(e)
{
	var r=confirm("Are you sure you want to delete this entry!") ;

	if(r)
	console.log($(e).parent().parent().remove());

	

	
}

function oneadd()
{
	$('.newe').append('<input>');
	
	$('.newe input').focus();
	
	$('.newe').parent().find('button').html('-');
	
	$('.newe').parent().find('button').attr('onclick', 'onerem(this)');
	
	$('.newe').removeClass('newe');
	
	$('#etb').append('<tr><td class="newe"></td><td><button onclick="oneadd()">Add</button></td></tr>');

	
	
}

function on_core_change()
{

	get_and_send();
	alert('Core Area Changed');
}


function on_dept_change()
{

	get_and_send();
	alert('Department Changed');
}


