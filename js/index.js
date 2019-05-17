var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    height: window.innerHeight,
    on:{
        init:function(){
            $active=$('.swiper-slide-active>.a');
            $active.addClass('fadeInDown animated');
        },
        transitionEnd:function(){
            $all=$('.a');
            $all.each(function (ind,item) {
                $(item).removeClass('fadeInDown animated');
            });
            $active=$('.swiper-slide-active>.a');
            $active.addClass('fadeInDown animated');
        },


        // setTranslate: function(translate){
        //     $box=$('.swiper-slide-active');
        //     $box.css({
        //         transformOrigin:'left top',
        //         transform:'rotate('+-translate/10+'deg'+')'
        //     })
        // },
        // touchEnd:function () {
        //     $box=$('.swiper-slide-active');
        //     $box.css({
        //         transformOrigin:'left top',
        //         transform:'rotate('+-0+'deg'+')'
        //     })
        // }
    }
});
$btn=$('.music_icon');
$audio=$('#audio');
isRunning=false;
$btn.on('touchend', function () {
    if (isRunning) {
        $(this).css({animationPlayState: 'paused'});
        isRunning = false;
        $audio[0].pause();
    } else {
        $(this).css({animationPlayState: 'running'});
        isRunning = true;
        $audio[0].play();
    }
});

