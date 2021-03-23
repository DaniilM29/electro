/*Mobile Menu*/
const buttons = document.querySelectorAll('.btn-mobile');
const nav = document.querySelector('.nav');
const formClose = document.querySelectorAll('.close');

buttons.forEach(button => button.addEventListener("click", function() {
    nav.classList.toggle('active');
}));

formClose.forEach(closeForm  => closeForm.addEventListener("click", function() {
    nav.classList.remove('active');
}));


$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    // Add the correct active class
    if($(this).closest('.accordion-item').hasClass('active')) {
        // Remove active classes
        $('.accordion-item').removeClass('active');
    } else {
        // Remove active classes
        $('.accordion-item').removeClass('active');

        // Add the active class
        $(this).closest('.accordion-item').addClass('active');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: false,
    items: 1,
    loop: true,
    dots:true,
    autoplay:true,
  });
});



$(function () {
    var location = window.location.href;
    var cur_url = location.split('/').pop();
 
    $('.heder-menu-wrap a').each(function () {
        var link = $(this).attr('href');
 
        if (cur_url == link) {
            $(this).addClass('link-menu-active');
        }
    });
});













