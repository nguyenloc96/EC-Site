$(document).ready(function(){
    $('#menu .menu-item').on('click', function(){
        $('#menu .menu-item').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.page-register').click(function(){
        $('#login').addClass('d-none');
        $('#register').removeClass('d-none');
    });
});