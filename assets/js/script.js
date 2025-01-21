$(document).ready(function(){ 
    $('.slider').slick({ 
        arrows: true, 
        dots: true, 
        adaptiveHeight: true, 
        slidesToShow: 3, 
        slidesToScroll: 1, 
        speed: 1000, 
        autoplay: true, 
        autoplaySpeed: 2500, 
        draggable: false, 
        waitForAnimate: false, 
        centerMode: true, 
        responsive:[ 
            { 
                breakpoint: 1283, 
                settings: { 
                    slidesToShow: 2, 
                } 
            }, { 
                breakpoint: 1006, 
                settings: { 
                    slidesToShow: 1, 
                } 
            } 
        ] 
    });

    // Увеличение центрального слайда
    $('.slider').on('afterChange', function(event, slick, currentSlide) {
        $('.slider__item').removeClass('active');
        $('.slick-center').addClass('active');
    });
});