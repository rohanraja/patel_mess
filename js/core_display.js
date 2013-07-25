function display_core(sid, dept, core)
{
	$('#combobox').val(dept);
	$('#siddd').val(sid);
		
	$('#core_select').val(core);
	
}

function display_exp(exar)
{
	$('#etb tbody').html('');
	
	for(i=0; i<exar.length ; i++)
	{
		
		$('#etb tbody').append('<tr><td><input value="'+exar[i]+'" disabled=""></td></tr>');
		
	}
	
}

function retrieve_display()
{
	sfid = $.cookie('staffid');
	
	$.getJSON('core_send.php?q='+sfid+'&type=c',
	function(data){
				
		display_core(sfid,data[1], data[2]);
		
		
	});
	
	$.getJSON('core_send.php?q='+sfid+'&type=s',
	function(data){
		
		display_exp(data);
		
		
	});
}
	
function get_and_send()
{
	var dept = $('#combobox').val();
	var sfid = $.cookie('staffid');
	
	var retar = $('#core_select').val();
	
	
	
	var exar = [];
	
	$('#etb tr input').each(function(j,val){
		
		exar.push($(val).val());
		
	});
	
	
	send_data(exar, dept, retar,sfid  );
	
}

function send_data(arname, deptt, core, sidd)
{
	console.log(JSON.stringify(arname));

	$.ajax({
							type : "POST",
							url : "core_save.php",
							dataType : 'json',
							data : {
							ardata : JSON.stringify(arname), dept : deptt, q : sidd, core : core
									}
							});

}


	 					// <tr id="c0" class="cinactive"><td><input value="Software Engineering" disabled></td><td><img></td></tr>
     					// <tr id="c1" class="cactive"><td><input value="Affordable Ubiquitous Access" disabled></td><td><img></td></tr>
     					// <tr id="c2" class="cinactive"><td><input value="Intelligent System Builder" disabled></td><td><img></td></tr>
     					// <tr id="c3" class="cinactive"><td><input value="Computational Modeling" disabled></td><td><img></td></tr>
     					//  id="c4" class="cactive"><td><input value="Language Technology Platform" disabled></td><td><img></td></tr>
     					//  id="c5" class="cactive"><td><input value="Image Technology Platform" disabled></td><td><img></td></tr>
     					//  id="c6" class="cinactive"><td><input value="Knowledge Management Enabler" disabled></td><td><img></td></tr>
     					// <tr id="c7" class="cinactive"><td><input value="Knowledge Technology" disabled></td><td><img></td></tr>
     					// 