$(document).ready(function () {
   
    $('.accordion-menu .responsive-item a').click(function () {
        console.log('test');
        var target = $(this).attr('href');
        console.log(target);
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 2000, function () {
            location.hash = target;
        });
    })
    // console.log('test');
});
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navbar-nav .responsive-item  a .active').removeClass('active');
            $('.navbar-nav .responsive-item a').eq(i).addClass('active');
        }
    });
}).scroll();

