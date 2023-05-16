$(document).ready(function(){
    // $("#gnb>ul>li").on("mouseover",function(){
    //     $(this).find("ul.sub").stop().slideDown();
    // })
    // $("#gnb>ul>li").on("mouseout",function(){
    //     $(this).find("ul.sub").stop().slideUp();
    // })
    $("#gnb>ul>li").on("mouseenter",function(){
        $(this).find("ul.sub").stop().slideDown();
    })
    $("#gnb>ul>li").on("mouseleave",function(){
        $(this).find("ul.sub").stop().slideUp();
    })
    
    $("#slider .frame li").eq(0).siblings().hide();
    var slideIndex = 0
    setInterval(function(){
        if(slideIndex < 2){
            slideIndex++;
        }else{
            slideIndex = 0;
        }
        $("#slider .frame li").eq(slideIndex).siblings().fadeOut(500);
        $("#slider .frame li").eq(slideIndex).fadeIn(500);
    },3000)

    $("#notice>ul>li>a").eq(0).on("click", function(){
        $('.popup').css('display','block')
    })    
})
