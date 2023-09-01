$(function () {
    var swiper = new Swiper(".swiper", {
        direction: 'vertical',
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 4000,
        loop: true,
        loopedSlides: 3,
        slidesPerView: 3,
        spaceBetween: 30,
    })

    var sNap = false;
    var secL = $(".section").length;
    var sEc = $(".section");
    var selI;


    sEc.eq(0).addClass("on");
    $("#fullpage").fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        controlArrows: false, //슬라이드 화살표 숨김
        loopHorizontal: false, //슬라이드 반복 멈춤
        scrollingSpeed: 800,
        afterLoad: function (origin, destination) {
            sNap = false;
            sEc.eq(destination.index).addClass("on").siblings().removeClass("on");
        },
        onLeave: function () {
            sNap = true;
        },
    });


    //슬라이드에 페럴렉스 구현...

    $(".section").on("mousewheel", function (e) {
        var selI = $(this).index();
        if (sNap) return false;
        $(".pra").css({
            zIndex: 9,
            transform: "translateY(" + 0 + "px)",
            transition: 0.01 + "s"
        });
        if (e.originalEvent.wheelDelta / 120 > 0) {
            if (selI == 0) return false;
            $(this).find(".pra").css({
                zIndex: 1,
                backgroundPositionY: 0,
                transform: "translateY(" + (-500) + "px)",
                transition: 1 + "s"
            });
        } else {
            if (selI == secL - 1) return false;
            $(this).find(".pra").css({
                zIndex: 1,
                backgroundPositionY: 0,
                transform: "translateY(" + (500) + "px)",
                transition: 1 + "s"
            });
        }
    });
    //슬라이드에 훨이벤트 달기...
    $("#slide").on("mousewheel", function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            fullpage_api.moveSlideLeft();
        }
        else {
            fullpage_api.moveSlideRight();
        }
    });


    $('.btn-open-popup').on('click', function () {
        $('.modal').toggleClass('on');
        $('.text').toggleClass('on');
        $('.s_text').toggleClass('on');
    });


});