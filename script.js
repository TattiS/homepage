$(document).ready(function () {
    $('.container-fluid').each(function () {
        var highestBox = 0;
        $('.col-sm-4', this).each(function () {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $('.col-sm-4', this).height(highestBox);
        
    });
});