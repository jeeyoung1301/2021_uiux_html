$(document).ready(function(){
    const visual_01 = $('.slider').bxSlider({
        controls:false,
        auto:true,
    });
    $('.nextBtn').click(function(){
        visual_01.goToNextSlide();
    });
    $('prevBtn').click(function(){
        visual_01.goToPrevSlide();
    })
});