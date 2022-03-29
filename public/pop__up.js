$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn();
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut();
    $('html').removeClass('no-scroll');
});