$(document).ready(function() {
    $('.section--portfolio__slider-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('#portfolioPrevBtn'),
        nextArrow: $('#portfolioNextBtn'),
        responsive: [{
                breakpoint: 1110,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }

        ]
    });
    
    $('.section--about-us__slider-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: $('#memberPrevBtn'),
        nextArrow: $('#memberNextBtn'),
        responsive: [{
                breakpoint: 1110,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }

        ]
    });
//    $('.review-slider-wrapper').slick({
//        infinite: true,
//        slidesToShow: 3,
//        slidesToScroll: 1,
//        autoplay: true,
//        responsive: [{
//                breakpoint: 1024,
//                settings: {
//                    slidesToShow: 2,
//                    slidesToScroll: 2,
//                    infinite: true
//                }
//            },
//            {
//                breakpoint: 768,
//                settings: {
//                    slidesToShow: 1,
//                    slidesToScroll: 1,
//                    infinite: true
//                }
//            }
//
//        ]
//    });
    
    $('#nominalCase').click(function(){
        $('.section--order__nominal-case').css({"display": "block"})
        $('#nominalCase').css({"display": "none"})
    });
    
    $('#personalCase').click(function(){
        $('.section--order__personal-case').fadeIn('fast')
        $('#personalCase').css({"display": "none"})
    });

    $('.link').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    
    $('.button--down').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    
    $('#adaptiveMenu').click(function(){
        $('#navigation').toggleClass('active')
    });
    $('.link--nav').click(function(){
        $('#navigation').toggleClass('active')
    })
});