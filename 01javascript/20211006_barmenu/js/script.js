console.log('연결됨')

function nowMenu(menu){ // main이 menu로 들어감 menu = 'main'
    if(menu == 'main'){
        $('.bar').css('opacity',0)
        console.log('mainconnect');
    }
    else{
        $('.menu li').eq(menu).addClass('active') //eq: 몇 번째
        // script - document.querySelectorAll('.menu li')[menu].classList.add('active')
        $('.bar').css('left',200*menu)
        console.log('subpage')
    };

    // $('.menu li').hover(function(){},function(){}) //(마우스 가져갔을 때,마우스 빠졌을 때)

    $('.menu li').hover(
        function(){
            let menuLi = $(this).index()
            if(menu == 'main'){
                $('.bar').css('opacity',1)
            };

            $('.bar').css('left',200*menuLi)
        },
        function(){
            if(menu == 'main'){
                $('.bar').css('opacity',0)
            };
            
            $('.bar').css('left',200*menu)
        });
};

