// stiki header 
$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 200) $(".header-content").removeClass('fixed-header');
    else $(".header-content").addClass('fixed-header');
});

// burger-menu
document.getElementById("trigger").onclick = function() { open() };
function open() {
    document.getElementById("menu").classList.toggle("show");
}

// id href
$(document).ready(function() {
    $(".btn-down").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

// // slowly scroll
// $(document).ready(function() {
//     $("#menu").on("click", "a", function(event) {
//         event.preventDefault();
//         var id = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({ scrollTop: top }, 1500);
//     });
// });

// portfolio
$(document).ready(function() {
    $('#container').masonry({
        itemSelector: '.item',
        singleMode: false,
        isResizable: true,
        isAnimated: true,
        animationOptions: {
            queue: false,
            duration: 500
        }
    });
});

// bloquote
$('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
});

// logo-carousel
$('.clients-logo-carousel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false
});

// blog-posts
$('.blog-posts').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false
});