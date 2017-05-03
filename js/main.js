/**
 * Created by Administrator on 2017/4/26.
 */
$(function () {

    var i = 0;
    var timer = null;

    for (var j = 0; j < $('.img li').length; j++) {
        $('.num').append('<li></li>');
    }

    $('.num li').first().addClass('active');

    var firstimg = $('.img li').first().clone();

    $('.img').append(firstimg).width($('.img li').length * ($('.img img').width()));

    $('.next').click(function () {
        i++;
        if (i == $('.img li').length) {
            i = 1;
            $('.img').css({left: 0});
        }
        $('.img').stop().animate({left: -i * 600}, 300);
        if (i == $('.img li').length - 1) {
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        } else {
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }
    });

    $('.prev').click(function () {
        i--;
        if (i == -1) {
            i = $('.img li').length - 2;
            $('.img').css({left: -($('.img li').length - 1) * 600});
        }
        $('.img').stop().animate({left: -i * 600}, 300);
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
    });

    $('.banner').hover(function () {
        $('.btn').show();
    }, function () {
        $('.btn').hide();
    });

    $('.num li').mouseover(function () {
        var _index = $(this).index();
        i = _index;
        $('.img').stop().animate({left: -_index * 600}, 150);
        $('.num li').eq(_index).addClass('active').siblings().removeClass('active');
    });

    timer = setInterval(function () {
        i++;
        if (i == $('.img li').length) {
            i = 1;
            $('.img').css({left: 0});
        }
        $('.img').stop().animate({left: -i * 600}, 300);
        if ($('.img li').length - 1 == i) {
            $('.num li').eq(0).addClass('active').siblings().removeClass('active');
        } else {
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        }
    }, 2000);

    $('.banner').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            i++;
            if (i == $('.img li').length) {
                i = 1;
                $('.img').css({left: 0});
            }
            $('.img').stop().animate({left: -i * 600}, 300);
            if (i == $('.img li').length - 1) {
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            } else {
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }
        }, 2000);
    });
});