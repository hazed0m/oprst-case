$('.video-block').on('click',function(){
    $('.mask, .popup-wrapper').fadeIn();
    $('body').addClass('scroll-stop');
});
$('.button-case').on('click',function(){
    $('.mask, .form-wrapper').fadeIn();
    $('body').addClass('scroll-stop');
});
$('.close, .mask').on('click',function(){
    $('.popup-wrapper, .form-wrapper').css('transition','0s');
    $('.mask, .popup-wrapper, .form-wrapper').fadeOut();
    if($('.close').parent().hasClass('popup-wrapper'))
    {
        $('iframe').attr('src',$('iframe').attr('src'));
    }
    $('body').removeClass('scroll-stop');
});
$('.popup-wrapper .close, .form-wrapper .close').hover(
    function(){
        if($(this).parent().hasClass('popup-wrapper'))
        {
            $('.popup-wrapper').css({'box-shadow':'0 0 25px rgba(255,255,255,0.7)','transition':'1s'});
            $('.popup-wrapper .close').css('transform','rotate(360deg) scale(1.1)');
        }
        if($(this).parent().hasClass('form-wrapper'))
        {
            $('.form-wrapper').css({'box-shadow':'0 0 25px rgba(255,255,255,0.7)','transition':'1s'});
            $('.form-wrapper .close').css('transform','rotate(360deg) scale(1.1)');
        }        
    },
    function(){
        if($(this).parent().hasClass('popup-wrapper'))
        {
            $('.popup-wrapper').css('box-shadow','0 0 25px #a90b0a');
            $('.popup-wrapper .close').css('transform','rotate(0deg) scale(1)');
            $('.popup-wrapper').css('transition','0s');
        }
        if($(this).parent().hasClass('form-wrapper'))
        {
            $('.form-wrapper').css('box-shadow','0 0 25px #a90b0a');
            $('.form-wrapper .close').css('transform','rotate(0deg) scale(1)');
            $('.form-wrapper').css('transition','0s');
        }
    }
);
$('input').on('focus',function(){
    if($(this).val() == '' && $(this).attr('type') == 'tel')
    {
        $(this).val('+380');
    }
    $(this).css({'box-shadow':'0 0 20px #a90b0a','transition':'0.5s', 'border-color':'#a90b0a'});
});
$('input').on('focusout',function(){
    if($(this).val() == '+380' && $(this).attr('type') == 'tel')
    {
        $(this).val('');
    }
    $(this).css({'box-shadow':'none','border-color':'#fff'});
});