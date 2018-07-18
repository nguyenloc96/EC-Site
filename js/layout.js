$(document).ready(function(){
    $('.menu-title').hover(function(){
        var curMenu = parseInt($(this).attr('per-menu'));
        console.log("hover",curMenu);
        $('.dropdown-menu per-menu').eq(curMenu).addClass('show');
    });
    
    $('#menu .menu-item').on('click', function(){
        $('#menu .menu-item').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.page-register').click(function(){
        $('#login').addClass('d-none');
        $('#register').removeClass('d-none');
    });
    $('#sign-in').click(function(){
        $('#sign-in').disable = true;
        $('#sign-out').removeClass('d-none');
        $('#login').removeClass('d-none');
        $('#register').addClass('d-none');
    });
});