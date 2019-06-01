$('.card-carousel').owlCarousel({
    loop:true,
    stagePadding: 70,
    nav:true,
    dots: false,
    navText: ['', ''],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

$('.card-carousel').on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        $('.card-carousel').trigger('next.owl');
    } else {
        $('.card-carousel').trigger('prev.owl');
    }
    e.preventDefault();
});


$('.play-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    })


$('.play-carousel').on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        $('.play-carousel').trigger('next.owl');
    } else {
        $('.play-carousel').trigger('prev.owl');
    }
    e.preventDefault();
});