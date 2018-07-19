$(document).ready(function () {
    $('.menu-item span').mouseover(function () {
        $('.dropdown-menu').removeClass('show');
        var perMenu = parseInt($(this).attr('menu'));
        console.log(perMenu);
        $('.dropdown-menu').eq(perMenu).addClass('show');
    });
    $('.dropdown-menu').mouseleave(function(){
        setTimeout(() => {
            $(this).removeClass('show');
        }, 1000);
        
    });
    $('.dropdown-menu .dropdown-item').click(function(){
        setTimeout(() => {
            $('.dropdown-menu').removeClass('show');
        }, 1000);
        
    });
    $('#menu .menu-item').on('click', function () {
        $('#menu .menu-item').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.page-register').click(function () {
        $('#login').addClass('d-none');
        $('#register').removeClass('d-none');
    });
    $('#sign-in').click(function () {
        $('#sign-in').attr('disabled', true);
        $('#sign-out').removeClass('d-none');
        $('#login').removeClass('d-none');
        $('#register').addClass('d-none');
        $('#div-my-cart').addClass('d-none');
    });
    $('#my-cart').click(function () {
        $('#div-my-cart').removeClass('d-none');
        $('#login').addClass('d-none');
        $('#register').addClass('d-none');
    });
});