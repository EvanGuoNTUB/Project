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

