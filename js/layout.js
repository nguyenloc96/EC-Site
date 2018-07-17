$(document).ready(function(){
    $('#menu .menu-item').on('click', function(){
        $('#menu .menu-item').removeClass('selected');
        $(this).addClass('selected');
    });
});