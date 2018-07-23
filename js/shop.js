$(document).ready(function () {
    $('#fuoco').click(function () {
        $('#slider-bar').css('display','none');
        $('#ImageProducts').css('display','none');

        $('#imagefuoco').css('display','block');
        $('#ListItem').css('display','flex');
    });

    $('#shop').click(function () {
        $('#slider-bar').css('display','block');
        $('#ImageProducts').css('display','block');

        $('#imagefuoco').css('display','none');
        $('#ListItem').css('display','none');
    });
});