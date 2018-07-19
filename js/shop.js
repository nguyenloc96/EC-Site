$(document).ready(function () {
    $('#fuoco').click(function () {
        $('#slider-bar').css('display','none');
        $('#CategoryProduct').css('display','none');
    });

    $('#shop').click(function () {
        $('#slider-bar').css('display','block');
        $('#CategoryProduct').css('display','block');
    });
});