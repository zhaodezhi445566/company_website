$(document).ready(function () {
    //轮播图
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    //翻屏效果
    function scrollScreen() {
        $.scrollify({
            section: ".panel",
            scrollSpeed: 800,
            after: function () {
                if (location.hash == '#home') {
                    $('nav').animate({opacity: 0}, 'fast')
                } else {
                    $('nav').animate({opacity: 1}, 'slow')
                }
            }
        });
        if ($(window).height() > 600 && $(window).width() > 992) {
            $.scrollify.enable();
            if (location.hash == '#home') {//在轮播页隐藏顶部导航栏
                $("nav").css('opacity', 0);
            }
            $('.set_bj_bottom').show();
        } else {
            $.scrollify.disable();
            $('.set_bj_bottom').hide();
            $('.header_icon').hide();
        }
    }

    scrollScreen();
    $(window).resize(function () {
        scrollScreen();
    });
    //获取年份
    function getYears() {
        var date=new Date;
        var year=date.getFullYear();
        console.log(year)
        $("#info").text( "卡车司机 Copyright © 2015-"+year+" 京ICP备15049830号");
    }
    getYears();

    //下载
    $('.download_button_box .download_button').click(function () {
        if (navigator.userAgent.indexOf('MicroMessenger') > -1) {
            if ($(this).index() === 0) {
                location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.kachexiongdi.trucker";
            } else if ($(this).index() === 1) {
                location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.kachexiongdi.truckerdriver";
            }
        } else {
            if ($(this).index() === 0) {
                location.href = "/download/trucker.apk";
            } else if ($(this).index() === 1) {
                location.href = "/download/owner.apk";
            }
        }
    })
});














