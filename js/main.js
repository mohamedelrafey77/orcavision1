 /******************************
    BOTTOM SCROLL TOP BUTTON
******************************/
	
$(document).ready(function() {
    /******************************
         BOTTOM SCROLL TOP BUTTON
    ******************************/
    // declare variable
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();
        // if user scrolls down - show scroll to top button
        if (topPos > 600) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }
    }); // scroll END
    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
        return false;
    });
     // click() scroll top EMD
     
    
    });



    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
        }
        });
    });