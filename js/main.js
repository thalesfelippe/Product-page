$(window).on("load",function(){
    // Preloader
    setTimeout(function(){
    $(".preloader").hide();
    }, 1500);
});

$(document).ready(function(){

    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar-nav"})

    //product carousel
    $('#product-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    //testimonial
    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
});