var xcl;
var $allth ;


function teach_formula()
{
	
	
	
	newhead = '<thead style="position: absolute; margin-top: -200px;"><tr><th id="f_ccode" class="freeth" style="position: relative;" data-content=""><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger="hover">Course Code</a><i class="f_cmult icon-asterisk" style=""></i><b class="f_divline">_______________</b><p contenteditable = "true" class="f_numdiv" title="There are 14 weeks in a semester">14</p></th>    <th id="f_nostu" class="freeth" style="position: relative;" data-content=""><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger="hover">Students #</a></th><th class="freeth" style="position: relative;" data-content=""><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger="hover">Lecture Hrs</a><i class="f_cmult icon-asterisk" style=""></i><i class="f_majorplus icon-plus" style=""></i><b class="f_divline">_________________</b><p class="f_numdiv" title="There are 14 weeks in a semester">14</p></th><th class="freeth" style="position: relative;" data-content=""><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger="hover">Lecture Weeks #</a></th><th class="freeth" style="position: relative;" data-content=""><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger="hover">Tutorials/Week</a><i class="f_cmult icon-asterisk" style=""></i><i class="f_majorplusmult icon-plus" style=""></i><p class="f_nummult" title="There is a 30% weightage on preparation of tutorials" >0.5</p></th><th class="freeth" style="position: relative;" data-content=""><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger="hover">Labs/Week</a><i class="f_cmult icon-asterisk" style=""></i><i class="f_majorplusmult icon-plus" style=""></i><p class="f_nummult" title="There is a 50% weightage on Labs">0.7</p></th><th id="f_br" class="freeth" style="position: relative;" data-content=""><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger="hover">Burden Ratio</a><i class="f_cmult icon-plus" style=""></i></th><th class="freeth" style="position: relative;" data-content=""><a data-toggle="popover" data-placement="top" data-content="" title="" data-original-title="" data-trigger="hover">LOAD</a><i class="f_cmult icon-asterisk" style=""></i><b class="f_divline">_________</b></th></tr></thead>' ;
	
	

	
	$('#nav_menu').css('display', 'none');
	
	$('#resultview').addClass('offset1');
	
	$('#teaching').css('margin-top', '240px');
	
	$('#teaching h2').css('display', 'none');
	
	$('#fcalc_teach').css('visibility','visible');
	

	xcl = $('#courses thead').clone();
	

	
	
//	xcl = $(newhead);
	
	$('#courses thead').before(newhead);
	


	$('#courses thead:first').find('th').attr('style', '');
	
	$('#courses thead:first').find('th').css('position', 'relative');
	
	$('#courses thead:first').find('th:nth-child(1) a').html('Burden Ratio');
	
	$('.freeth').each(function(i,val){
		
		cur = parseInt($(val).css('left')); $(val).css('left', cur+15 + "px");
		
		});
		
		
	
		
	$('#courses tr').find('th:nth-child(3)').find('a').addClass('text-success');
	

	$('#courses tr').find('td:nth-child(3)').addClass('text-success');

	$('#courses tr').find('th:nth-child(4)').find('a').addClass('text-success');
	$('#courses tr').find('td:nth-child(4)').addClass('text-success');

	$('#courses tr:first').find('th:nth-child(1)').find('a').addClass('text-warning');

	$('#courses tr').find('th:nth-child(2)').find('a').addClass('text-warning');
	$('#courses tr').find('td:nth-child(2)').addClass('text-warning');


	$('#courses tr').find('th:nth-child(5)').find('a').addClass('text-error');
	$('#courses tr').find('td:nth-child(5)').addClass('text-error');
	
	$('#courses tr').find('th:nth-child(6)').find('a').addClass('text-info');
	$('#courses tr').find('td:nth-child(6)').addClass('text-info');
	
	$('#courses tr').find('th:nth-child(8)').find('a').addClass('muted');
	$('#courses tr').find('th:nth-child(1)').find('a').addClass('muted');

	$('#courses tr').find('th:nth-child(7)').find('a').addClass('text-warning');
	$('#courses tr').find('td:nth-child(7)').addClass('text-warning');


	$('.freeth').find('.f_nummult').attr('contenteditable','true');
	$('.freeth').find('.f_numdiv').attr('contenteditable','true');
	
	
	
	set_weights(1);
	
	
	$('#show_teach').attr('onclick', 'hide_teach_formula()');

	$('#show_teach').html('Hide Formula');
	
	$('.f_nummult').tooltip({placement : 'bottom'});
	$('.f_numdiv').tooltip({placement : 'bottom'});
	
	
	
//	$('#teaching').append('<iframe src="http://localhost/payload_bs/masterlist_bs_exp.php"></iframe>');

}


var superweights = [3,4,3,1,2,3];

function super_formula(e)
{


	newhead = '<thead style="position: absolute; margin-top: -150px;"><tr><th><a data-toggle="popover" data-placement="top" data-content="Supervision Level" title="" data-original-title="" data-trigger="hover">Supervisory Level</a></th><th><a data-toggle="popover" data-placement="top" data-content="Main or Co-op" title="" data-original-title="" data-trigger="hover">Role</a></th><th><a data-toggle="popover" data-placement="top" data-content="Weight" title="" data-original-title="" data-trigger="hover">Weight</a><i class="f_cmult icon-asterisk" style=""></i></th><th><a data-toggle="popover" data-placement="top" data-content="Number of Students you have in a year" title="" data-original-title="" data-trigger="hover"># of Students</a></th><th><a data-toggle="popover" data-placement="top" data-content="Index score for supervision in this degree" title="" data-original-title="" data-trigger="hover">LOAD</a></th></tr></thead>' ;
	
	
	
	
// 
// 	$('#nav_menu').css('display', 'none');
// 	
// 	$('#resultview').addClass('offset1');
	
	$('#supervision').css('margin-top', '240px');
	
	$('#supervision h2').css('display', 'none');
	
	$('#fcalc_super').css('visibility','visible');


	$('#superv tr:first th').eq(1).after('<th><a data-toggle="popover" data-placement="top" data-content="Weight" title="" data-original-title="" data-trigger="hover">Weight</a></th>');
	

		set_weights(1);
		
	
	
	$('#superv tbody tr').each(function(i,val){
		
		$(val).find('td').eq(1).after('<td><b>'+superweights[i]+'</b></td>');

	});
	
	$('#show_super').attr('onclick', 'hide_super_formula()');
	
	$('#show_super').html('Hide Formula');
	
	
	$('#superv thead').before(newhead);
	
	$('#superv thead:first').find('th').addClass('frees');
	
	$('#superv thead:first').find('th').css('position', 'relative');


	

	$('.frees').each(function(i,val){
		
		cur = parseInt($(val).css('left')); $(val).css('left', cur+350 + "px");
		
		});
		
	
	
	$('#superv tr').find('th:nth-child(3)').find('a').addClass('text-error');
	
	
	$('#superv tr').find('td:nth-child(3)').addClass('text-error');
	
	$('#superv tr').find('th:nth-child(4)').find('a').addClass('text-error');
	$('#superv tr').find('td:nth-child(4)').addClass('text-error');
	
	
	$('#superv tbody tr').each(function(i,val){
			
			$(val).find('b').attr('contenteditable','true');
		
		});
		
		
		
	




}


var research_weights = [4,5,6,1,2,3];


function research_formula()
{
	// $('#nav_menu').css('display', 'none');
	// 
	// $('#resultview').addClass('offset1');
	
	$('#research').css('margin-top', '240px');
	
	$('#research h2').css('display', 'none');

	$('#research').prepend('<table id="formula_tb" width="30%" align="middle" class="table table-striped table-bordered span3" style="position : relative; left:-30px"><thead><tr><th>Project Size</th><th>Role</th><th>Weight</th></tr></thead><tbody><tr><td>1</td><td>Member</td><td>1.5</td></tr><tr><td>2</td><td>Member</td><td>1.5</td></tr><tr><td>3</td><td>Member</td><td>1.5</td></tr><tr><td>4</td><td>Member</td><td>9</td></tr><tr><td>1</td><td>Leader</td><td>1.5</td></tr><tr><td>2</td><td>Leader</td><td>1.5</td></tr><tr><td>3</td><td>Leader</td><td>1.5</td></tr><tr><td>4</td><td>Leader</td><td>1.5</td></tr></tbody></table>');
	
	set_weights(1);
	
	const_weight = [1,2,6,9,0.5,1,2,3];
	
	$('#formula_tb tbody tr').each(function(i,val){
		
		$(val).find('td').eq(2).html(const_weight[i]);
		$(val).find('td').eq(2).attr('contenteditable', true);
	
	});
	
	
	$('#researchtb thead').before('<thead style="position: absolute; margin-top: -200px; margin-left:450px"><tr><th><a data-toggle="popover" data-placement="top" data-content="Title of the Project" title="" data-original-title="" data-trigger="hover">Project Title</a></th><th><a data-toggle="popover" data-placement="top" data-content="&quot;M&quot; for Member and &quot;L&quot; for Leader" title="" data-original-title="" data-trigger="hover">Role</a><b class="f_divline">_________</b><i class="f_majorplusr icon-plus" style=""></i></th><th><a data-toggle="popover" data-placement="top" data-content="&quot;1&quot; for Small, &quot;2&quot; for Medium, &quot;3&quot; for Large" title="" data-original-title="" data-trigger="hover">Project Size</a></th><th><a data-toggle="popover" data-placement="top" data-content="This number is to be determined by the project leader to ensure only working members are accounted for" title="" data-original-title="" data-trigger="hover"># of Members</a></th><th><a data-toggle="popover" data-placement="top" data-content="Total index score of this project" title="" data-original-title="" data-trigger="hover">LOAD</a><p class="r_if">( only if Leader )</p></th></tr></thead>');
	
	$('#researchtb thead:first').find('th').addClass('freer');
	$('#researchtb thead:first').find('th').css('position', 'relative');
	$('#researchtb thead:first').find('th:nth-child(5) a').html('Leader Weight');
	$('#researchtb thead:first').find('th:nth-child(3) a').html('# of Members');
	$('#researchtb thead:first').find('th:nth-child(2) a').html('Member Weight');
	
	$('#formula_tb tbody tr').eq(1).addClass('warning');$('#formula_tb tbody tr').eq(2).addClass('warning');$('#formula_tb tbody tr').eq(0).addClass('warning');$('#formula_tb tbody tr').eq(3).addClass('warning');
	
	$('#formula_tb tbody tr').eq(4).addClass('success');$('#formula_tb tbody tr').eq(5).addClass('success');$('#formula_tb tbody tr').eq(6).addClass('success');$('#formula_tb tbody tr').eq(7).addClass('success');
	

	$('#researchtb tr').find('th:nth-child(4)').find('a').addClass('text-error');
	$('#researchtb tr').find('td:nth-child(4)').addClass('text-error');
	//$('#researchtb thead:first').find('th:nth-child(2) a').addClass('text-warning');
	
	$('#researchtb thead:first').find('th:nth-child(2)').css('background-color','rgb(252, 248, 227)');
	$('#researchtb thead:first').find('th:nth-child(2) a').css('color' ,'rgb(51, 51, 51)');
	
	$('#researchtb thead:first').find('th:nth-child(5)').css('background-color','rgb(223, 240, 216)');
	$('#researchtb thead:first').find('th:nth-child(5) a').css('color' ,'rgb(51, 51, 51)');
	
	//$('#researchtb thead:first').find('th:nth-child(5) a').addClass('text-success');
	
	
	$('#show_research').attr('onclick', 'hide_research_formula()');
	
	$('#show_research').html('Hide Formula');

	$('#fcalc_research').css('visibility','visible');

	
}



function admin_formula()
{
	// $('#nav_menu').css('display', 'none');
	// 
	// $('#resultview').addClass('offset1');

	$('#admin').css('margin-top', '240px');

	$('#admin h2').css('display', 'none');

	$('#admin thead').before('<thead style="position: absolute; margin-top: -180px; margin-left:75px"><tr><th><a data-toggle="popover" data-placement="top" data-content="Dean : 12, Deputy Dean : 12, HOD : 10, PC : 8, MAIT Coord : 4, Others : 2" title="" data-original-title="" data-trigger="hover">Appointed Position</a></th><th><a data-toggle="popover" data-placement="top" data-content="What is your faculty appointed position if you claiming 2 hours under others" title="" data-original-title="" data-trigger="hover">Other Position</a></th><th><a data-toggle="popover" data-placement="top" data-content="A maximum of 2 hours only can be claimed" title="" data-original-title="" data-trigger="hover">Other Administrative Duties</a><i class="f_majorplus icon-plus" style=""></i></th><th><a data-toggle="popover" data-placement="top" data-content="What are the list of admin duties apart from faculty appointed role" title="" data-original-title="" data-trigger="hover">List of Duties</a></th><th><a data-toggle="popover" data-placement="top" data-content="A maximum of 1 hour for Consultancy work &amp; 1 hour of Community-related work for a max of 2 hours to be claimed" title="" data-original-title="" data-trigger="hover">Consultancy &amp; Community Service</a><i class="f_majorplus icon-plus" style=""></i></th><th><a data-toggle="popover" data-placement="top" data-content="Total index score for this category" title="" data-original-title="" data-trigger="hover">LOAD</a></th></tr></thead>');

	$('#admin thead:first').find('th').addClass('freea');
	$('#admin thead:first').find('th').css('position', 'relative');



	$('#admintb tr').find('th:nth-child(1)').find('a').addClass('text-error');
	$('#admintb tr').find('td:nth-child(1)').addClass('text-error');
	
	$('#admintb tr').find('th:nth-child(3)').find('a').addClass('text-warning');
	$('#admintb tr').find('td:nth-child(3)').addClass('text-warning');

	$('#admintb tr').find('th:nth-child(5)').find('a').addClass('text-success');
	$('#admintb tr').find('td:nth-child(5)').addClass('text-success');



	$('#show_admin').attr('onclick', 'hide_admin_formula()');
	
	$('#show_admin').html('Hide Formula');
	




}



function hide_research_formula()
{
	$('#nav_menu').css('display', 'block');

	$('#resultview').removeClass('offset1');

	$('#research').css('margin-top', '');

	$('#research h2').css('display', 'block');
	
	$('#show_research').attr('onclick', 'research_formula()');
	
	$('#show_research').html('Show Formula');
	
	$('#fcalc_research').css('visibility','hidden');

	
	
	$('#formula_tb').remove();
	
	$('.freer').parent().parent().remove();
	
	$('#researchtb tr').find('th:nth-child(4)').find('a').removeClass('text-error');
	$('#researchtb tr').find('td:nth-child(4)').removeClass('text-error');
	
	$('iframe').remove();
}


function hide_admin_formula()
{
	
	$('iframe').remove();
	
	
	$('#nav_menu').css('display', 'block');

	$('#resultview').removeClass('offset1');

	$('#admin').css('margin-top', '');

	$('#admin h2').css('display', 'block');

	$('#show_admin').attr('onclick', 'admin_formula()');

	$('#show_admin').html('Show Formula');

	$('#fcalc_admin').css('visibility','hidden');

	$('.freea').parent().parent().remove();
	
	$('#admintb tr').find('th:nth-child(1)').find('a').removeClass('text-error');
	$('#admintb tr').find('td:nth-child(1)').removeClass('text-error');
	
	$('#admintb tr').find('th:nth-child(3)').find('a').removeClass('text-warning');
	$('#admintb tr').find('td:nth-child(3)').removeClass('text-warning');
	
	$('#admintb tr').find('th:nth-child(5)').find('a').removeClass('text-success');
	$('#admintb tr').find('td:nth-child(5)').removeClass('text-success');
}



function hide_super_formula()
{
	
	$('iframe').remove();
	$('.frees').parent().parent().remove();
	
	$('#superv tr:first th').eq(2).remove();
	
	

	
	$('#show_super').attr('onclick', 'super_formula()');
	
	$('#show_super').html('Show Formula');
	
	
	$('#resultview').removeClass('offset1');
	
	$('#nav_menu').fadeIn();
	
	$('#fcalc_super').css('visibility','hidden');
	
	
	$('#supervision').css('margin-top', '');
	
	$('#supervision h2').fadeIn();
	
	
	
	
	$('#superv tbody tr').each(function(i,val){
		
		$(val).find('td').eq(2).remove();
	
	});
	
	$('#superv tr').find('th:nth-child(3)').find('a').removeClass('text-error');
	$('#superv tr').find('th:nth-child(4)').find('a').removeClass('text-error');

	$('#superv tr').find('td:nth-child(3)').removeClass('text-error');
	$('#superv tr').find('td:nth-child(4)').removeClass('text-error');
	
}


function hide_teach_formula()
{
	
	$('iframe').remove();
	$('#show_teach').attr('onclick', 'teach_formula()');
	
	
	
	clear_tables() ;
	write_tables(sfid,semm);
	
	$('.freeth').parent().parent().remove();
	
	$('#show_teach').html('Show Formula');
	
	$('#resultview').removeClass('offset1');
	
	$('#nav_menu').fadeIn();
	
	$('#fcalc_teach').css('visibility','hidden');

	
	$('#teaching').css('margin-top', '');
	
	$('#teaching h2').fadeIn();
	
	$('thead').find('a').attr('class','');

}


function replace_burden()
{
	
	$('#courses tbody tr').each(function(i,val){
		
		$(val).find('td').eq(0).replaceWith($(val).find('td').eq(6).clone());
		
	});
	
	$('#courses thead tr').each(function(i,val){
		
		$(val).find('th').eq(0).replaceWith($(val).find('th').eq(6).clone());
		
	});
	
}



function refresh_new_weights()
{
	
	//hide_super_formula(1);
	clear_tables() ;
	write_tables(sfid,semm,1);
	//super_formula(1);
	
	if($('#teaching h2').css('display')=='none')
	{
	$('#courses tr').find('th:nth-child(3)').find('a').addClass('text-success');
	
	
	$('#courses tr').find('td:nth-child(3)').addClass('text-success');
	
	$('#courses tr').find('th:nth-child(4)').find('a').addClass('text-success');
	$('#courses tr').find('td:nth-child(4)').addClass('text-success');
	
	$('#courses tr:first').find('th:nth-child(1)').find('a').addClass('text-warning');
	
	$('#courses tr').find('th:nth-child(2)').find('a').addClass('text-warning');
	$('#courses tr').find('td:nth-child(2)').addClass('text-warning');
	
	
	$('#courses tr').find('th:nth-child(5)').find('a').addClass('text-error');
	$('#courses tr').find('td:nth-child(5)').addClass('text-error');
	
	$('#courses tr').find('th:nth-child(6)').find('a').addClass('text-info');
	$('#courses tr').find('td:nth-child(6)').addClass('text-info');
	
	$('#courses tr').find('th:nth-child(8)').find('a').addClass('muted');
	$('#courses tr').find('th:nth-child(1)').find('a').addClass('muted');
	
	$('#courses tr').find('th:nth-child(7)').find('a').addClass('text-warning');
	$('#courses tr').find('td:nth-child(7)').addClass('text-warning');
	
	}
	
	
	if($('#supervision h2').css('display')=='none')
	{
	
	$('#superv tbody tr').each(function(i,val){
		
		$(val).find('td').eq(1).after('<td><b>'+new_weights[4+i]+'</b></td>');
	
	});
	
	
	

	
	$('#superv tbody tr').each(function(i,val){
		
		$(val).find('b').attr('contenteditable','true');
	
	});
	
	}

}



var new_weights = [] ;

var defaultbak ;

function get_and_send_weights()
{
	new_weights = defaultbak;
	
	$('iframe').remove();
	
	if($('#teaching h2').css('display')=='none')
	{
		new_weights[0] = ($('.freeth').find('.f_numdiv')[0].innerHTML);
		new_weights[1] = ($('.freeth').find('.f_numdiv')[1].innerHTML);
		new_weights[2] = ($('.freeth').find('.f_nummult')[0].innerHTML);
		new_weights[3] = ($('.freeth').find('.f_nummult')[1].innerHTML);
		
		
		if($.cookie("isAdmin")==1)
			$('#teaching').append('<iframe style="width:1000px; height : 700px;">');
	}
	
	
	if($('#supervision h2').css('display')=='none')
	{
		$('#superv tbody tr').each(function(i,val){
			
			new_weights[4+i] = ($(val).find('b').html());
		
		});
		
		if($.cookie("isAdmin")==1)
			$('#supervision').append('<iframe style="width:1000px; height : 700px;">');
	
	}
	
	
	if($('#research h2').css('display')=='none')
	{
		
		
		$('#formula_tb tbody tr').each(function(i,val){
			
			new_weights[10+i] = $(val).find('td').eq(2).html();
			
		
		});
		
		if($.cookie("isAdmin")==1)
			$('#research').append('<iframe style="width:1000px; height : 700px;">');
	
	}
	
	

	console.log(new_weights);


	send_newvalues(new_weights,sfid);
		
	$('iframe').attr('src','./masterlist_bs_exp.php');

	
}





function set_weights(def)
{
	deff = 0;
	
	if(def)
		deff = 1;
		
	$.getJSON('send_weight.php?def='+deff+'&sid='+sfid,function(data){
		
		console.log(data);
		
		
		if(def)
			defaultbak = data;
		
		$($('.freeth').find('.f_numdiv')[0]).html(data[0]) ;
		$($('.freeth').find('.f_numdiv')[1]).html(data[1]);
		$($('.freeth').find('.f_nummult')[0]).html(data[2]);
		$($('.freeth').find('.f_nummult')[1]).html(data[3]);
		
		superweights[0] = data[4];
		superweights[1] = data[5];
		superweights[2] = data[6];
		superweights[3] = data[7];
		superweights[4] = data[8];
		superweights[5] = data[9];
		
		research_weights[0] = data[10];
		research_weights[1] = data[11];
		research_weights[2] = data[12];
		research_weights[3] = data[13];
		research_weights[4] = data[14];
		research_weights[5] = data[15];
		
		
		
	});
}


function send_newvalues(arname, sidd)
{


	console.log("Sending Weights Array");



	console.log(JSON.stringify(arname));

	$.ajax({
							type : "POST",
							url : "change_weight.php",
							async : false,
							dataType : 'json',
							data : {
							ardata : JSON.stringify(arname), sid : sidd
									}
							});


	refresh_new_weights();
}

