$('.spaces__carousel').slick({
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
        breakpoint: 1091,
            settings: {
            slidesToShow: 2,
            }
        }, {
        breakpoint: 801,
            settings: {
            slidesToShow: 1,
            }
        },      
    ]
});
$('.spaces__carousel-hide-menu').on('click', function(e){
    e.preventDefault();
    $(this).children('.spaces__carousel-text').toggle("400", function(){
    });
})
$('#area-parking').on('click', function(e){
    e.preventDefault();
    $('#img-space').fadeOut();
    $('#img-cafe').fadeOut();
    $('#img-outdoor').fadeOut();
    $('#img-playground').fadeOut();
    $('#img-parking').fadeIn();
})
$('#area-space').on('click', function(e){
    e.preventDefault();
    $('#img-cafe').fadeOut();
    $('#img-outdoor').fadeOut();
    $('#img-playground').fadeOut();
    $('#img-parking').fadeOut();
    $('#img-space').fadeIn();
})
$('#area-cafe').on('click', function(e){
    e.preventDefault();
    $('#img-parking').fadeOut();
    $('#img-space').fadeOut();
    $('#img-playground').fadeOut();
    $('#img-outdoor').fadeOut();
    $('#img-cafe').fadeIn();
})
$('#area-child').on('click', function(e){
    e.preventDefault();
    $('#img-parking').fadeOut();
    $('#img-space').fadeOut();
    $('#img-cafe').fadeOut();
    $('#img-outdoor').fadeOut();
    $('#img-playground').fadeIn();
})
$('#area-outdoor').on('click', function(e){
    e.preventDefault();
    $('#img-parking').fadeOut();
    $('#img-space').fadeOut();
    $('#img-cafe').fadeOut();
    $('#img-playground').fadeOut();
    $('#img-outdoor').fadeIn();
})
$('.space-gallery-slider').slick({
    pauseOnHover: true,
    adaptiveHeight: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    responsive: [{
        breakpoint: 801,
            settings: {
            slidesToShow: 1,
        }
    },
    ]
})
$('.feedback-slider').slick({
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1091,
            settings: {
            slidesToShow: 1,
        }
    },
    ]
});
$('.answers-arrow').on('click', function(){
    $(this).parent('.answers-container').toggleClass('answers-container-toggle');
    $(this).children('.answers-arrow-svg').children('path').toggleClass('answers-arrow-toggle-path');
    $(this).toggleClass('answers-arrow-toggle-bg');
    $(this).next('.answers-text-hidden').toggleClass('answers-text-hidden-bg-toggle');
    $(this).next('.answers-text-hidden').slideToggle(400);
})
$('#modal-contacts-press').on('click', function(e){
    e.preventDefault();
    $('.modal-contacts').fadeIn();
    document.getElementById("checkbox").checked=false;
})
$('.modal-contacts').on('click', function(e){
    if($(e.target).closest('.modal-contacts-container').length==0){
        $(this).fadeOut();
    }
})
$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('#button-up').fadeIn();
    }else{
        $('#button-up').fadeOut();
    }
})
$('.modal-contacts-close').on('click', function(){
    $(this).parents('.modal-contacts').fadeOut();
})
$('#button-up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1000);
})
$('#home').on('click', function(e){
    e.preventDefault();
    let headerHeight = $('.header').height();
    $('html, body').animate({scrollTop: $('.spaces').offset().top-headerHeight}, 500);
    document.getElementById("checkbox").checked=false;
})
$('#workspace').on('click', function(e){
    e.preventDefault();
    let headerHeight = $('.header').height();
    $('html, body').animate({scrollTop: $('.workspace').offset().top-headerHeight}, 500);
    document.getElementById("checkbox").checked=false;
})
$('#service').on('click', function(e){
    e.preventDefault();
    let headerHeight = $('.header').height();
    $('html, body').animate({scrollTop: $('.answers').offset().top-headerHeight}, 500);
    document.getElementById("checkbox").checked=false;
})
$('#reviews').on('click', function(e){
    e.preventDefault();
    let headerHeight = $('.header').height();
    $('html, body').animate({scrollTop: $('.space-gallery').offset().top-headerHeight}, 500);
    document.getElementById("checkbox").checked=false;
})
$('#events').on('click', function(e){
    e.preventDefault();
    let headerHeight = $('.header').height();
    $('html, body').animate({scrollTop: $('.facilities').offset().top-headerHeight}, 500);
    document.getElementById("checkbox").checked=false;
})
$('#form-button').on('click', function(e){
    e.preventDefault();
    let name = $('#form-input-name').val().trim();
    let phone = $('#form-input-phone').val().trim();
    let email = $('#form-input-email').val().trim();
    if(name == ""){
        $('#name-input-error').text('Please enter your name correctly!');
        return false
    }else if (phone == ""){
        $('#phone-input-error').text('Please enter your phone correctly!');
        return false
    } else if (email == ""){
        $('#email-input-error').text('Please enter your e-mail correctly!');
        return false    
    }
    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'phone': phone, 'email': email}, 
        dataType: 'html',
        beforeSend: function(){
            $('#form-button').prop('disabled', true)
        },
        success: function(){
            $('#registration').fadeIn();
            $('#form-input-name').val('');
            $('#form-input-phone').val('');
            $('#form-input-email').val('');
            $('#name-input-error').text('');
            $('#phone-input-error').text('');
            $('#email-input-error').text('');
            $('#form-button').prop('disabled', false)
        }
    })
})
$('.modal-registration-close').on('click', function(){
    $(this).parents('.modal-registration').fadeOut();
})