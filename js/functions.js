$(document).ready(function(){
    $(".header").hide(0).delay(100).fadeIn(500)
    $(".content").hide(0).delay(400).fadeIn(700)
});

$(document).ready(function() {
	//comment this out
	$(window).on("resize", resize);
    
    if($(".content").length > 0) {
        $(".content dl").click(function() {
            //comment this out
			resize();
            var sel = $(this);
            var $carousel = $('.carousel').flickity();
            
            // add class to the element
            // to indicate current selector
            sel.addClass("active current");
            
            // loop through all dt elements to slide them up
            // except the current one in case we simply want to slide it up
            sel.parent().children("dt").each(function() {
                if($(this).is(":visible") && !$(this).prev("dl").hasClass("current")) {
                    if($(this).prev("dl").hasClass("active")) {
                        $(this).prev("dl").removeClass("active");
                    }
                    $(".carousel").flickity('resize').fadeIn(200);
                    $(this).slideUp(440);
                    $('.dl').css({ opacity: 1 });
                                      
                }
            });
            
            // toggle slide and remove class from the current selector
            sel.next().slideToggle(440, function() {
                if(!$(this).is(":visible")) {
                    $(this).prev("dl").removeClass("active");
                }
                $(".carousel").flickity('resize').show(0).fadeIn(500);
                sel.removeClass("current");
                

            });
            
            return false;
            
        });
    }

     // open content that matches the hash
 var hash = window.location.hash;
 var thash = hash.substring(hash.lastIndexOf('#'), hash.length);
 $('.content').find('dt[href*='+ thash + ']').trigger('click');
    
});

function resize(){
	//browser_width = $(window).width();
	browser_height = $('.window').height();
	console.log('gallery should be: ' + browser_height * 0.7);
	
	$('.gallery').height("auto");
}
