
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		
    });
    

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.99))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');

	
	$('#info').css('top',(0-(scrolled*.19))+'px');
	$('#info1').css('top',(0-(scrolled*.39))+'px');
    $('#info2').css('top',(0-(scrolled*.29))+'px');
	$('#info3').css('top',(0-(scrolled*.69))+'px');
	$('#info4').css('top',(0-(scrolled*.49))+'px');
}
