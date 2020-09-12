$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.TA1_classes').click(function() {
        $(this).parent().parent().find(".TA1_classes.hidden").toggleClass('open');
    });
    $('a.TA2_classes').click(function() {
        $(this).parent().parent().find(".TA2_classes.hidden").toggleClass('open');
    });
});