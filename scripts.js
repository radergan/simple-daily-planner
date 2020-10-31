$(".do-this-thing").focus(function(){
    $(this).parent().find('.icon-arrow-right').addClass('focused-color');
    $(this).parent().parent().parent().find('.hour-number').addClass('focused-cell');
});
$(".do-this-thing").blur(function(){
    $(this).parent().find('.icon-arrow-right').removeClass('focused-color');
    $(this).parent().parent().parent().find('.hour-number').removeClass('focused-cell');
})