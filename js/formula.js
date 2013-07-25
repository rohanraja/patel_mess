$(document).ready(function() {
	
	speedd = 'medium';
	
$('.weight').prop('contenteditable', true);	


// $('.linee1 .atnorm div').css('display', 'none');
// $('.linee2 .atdiv div').css('display', 'none');
// 
// $('.linee1 .atnorm img').css('opacity', 0);
// 
// $('.linee2 .atdiv img').css('opacity', 0);


//animatelineone();
//animatelinetwo();	


common_onready();

});


function animatelineone()
{
	$('.linee1 .atnorm:first').find('.numbox').fadeIn(speedd, function () {
	
		$('.linee1 .atnorm:first').find('.multi').fadeIn(speedd,function () {
	
			$('.linee1 .atnorm:first').find('.weight').fadeIn(speedd,function () {
	
				$('.linee1 .atnorm:first img').animate({opacity: 1}, 1000, function(){
	
	
					$('.linee1 .atnorm:first').find('.plusimg').fadeIn(speedd,function () {
	
	
						$('.linee1 .atnorm:first').find('img').fadeIn(speedd,function () {
	
							$('.linee1 .atnorm').eq(1).find('.numbox').fadeIn(speedd, function () {
	
									$('.linee1 .atnorm').eq(1).find('.multi').fadeIn(speedd,function () {
	
										$('.linee1 .atnorm').eq(1).find('.weight').fadeIn(speedd,function () {
	
											$('.linee1 .atnorm').eq(1).find('img').fadeIn(speedd,function () {
	
	
												$('.linee1 .atnorm img').animate({opacity: 1}, 1000, function(){});
	
										});
	
									});
	
							});
						});
	
					});
	
				});
	
				});
	
					});
	
				});
	
		});
	

}


function animatelinetwo()
{
	$('.linee2 .atdiv:first').find('.numbox:first').fadeIn(speedd, function () {

		$('.linee2 .atdiv:first').find('.multi').fadeIn(speedd,function () {

			$('.linee2 .atdiv:first').find('.numbox').eq(1).fadeIn(speedd,function () {

				$('.linee2 .atdiv:first img').animate({opacity: 1}, 1000, function(){


					$('.linee2 .atdiv:first').find('.plusimg').fadeIn(speedd,function () {


						$('.linee2 .atdiv:first').find('img').fadeIn(speedd,function () {

							$('.linee2 .atdiv').eq(1).find('.numbox').fadeIn(speedd, function () {

									$('.linee2 .atdiv').eq(1).find('.multi').fadeIn(speedd,function () {

										$('.linee2 .atdiv').eq(1).find('.weight').fadeIn(speedd,function () {

											$('.linee2 .atdiv').eq(1).find('img').fadeIn(speedd,function () {


												$('.linee2 .atdiv img').animate({opacity: 1}, 1000, function(){});

										});

									});

							});
						});

					});

				});

				});

					});

				});

		});


}


function fade_in_next(the_ele) {
	
	console.log(the_ele);
	
	if(the_ele)
	{

	
	$(the_ele).fadeIn("slow", function() {
		
	setTimeout(fade_in_next($(the_ele).next()), 500);
  });
	}
	
	else
		return 0;
}  
	