(function () {
    popups({ //弹出登录
        ele: 'popup', //按钮
        ele2: 'logo',
        iw: 450, //宽度 (可选)
    });

    popups({ //弹出注册
        ele: 'popup', //按钮
        ele2: 'regist',
        iw: 450, //宽度 (可选)
    });

    pass({ //密码可见
        ele: 'icon6', //按钮
        ele2: 'icon7',
    });

    $('.regist').click(function () { //登录右上角切换扫码
        $('.register_login_box').css('display', 'block');
    });
    $('.logo').click(function () { //登录右上角切换扫码
        $('.pass_login_box').css('display', 'block');
        $('.register_login_box').css('display', 'none');
    });
    $('.regist').click(function () { //登录右上角切换扫码
        $('.pass_login_box').css('display', 'none');
        $('.register_login_box').css('display', 'block');
    });
    $('.pimg').click(function () { //登录右上角切换扫码
        $('.code_login_box').css('display', 'block');
        $('.pass_login_box').css('display', 'none');
    });
    $('.cimg').click(function () { //登录右上角切换账号登录
        $('.pass_login_box').css('display', 'block');
        $('.code_login_box').css('display', 'none');
    });

    $('.phonecode').click(function () { //其他登录方式切换
        if ($('.phonecode').html() == "其他登录方式") {
            $('.phonecode').html("手机验证码登录");
            $('.inputbox').css('display', 'block');
            $('.phone_login').css('display', 'none');
        } else {
            $('.phonecode').html("其他登录方式");
            $('.phone_login').css('display', 'block');
            $('.inputbox').css('display', 'none');
        }
    });

    $('.setpaw').click(function () { //切换是否设置新密码
        $('.paw').css('display', 'block');
        $('.setpaw').css('display', 'none');
        $('.icon6').css('display', 'block');
    });

    $('.reg').click(function () { //跳转注册页
        $('.register_login_box').css('display', 'block');
        $('.pass_login_box').css('display', 'none');
        $('.code_login_box').css('display', 'none');
    });

    $('.icon4').click(function () { //密码是否可见 bu
        $('.icon5').css('display', 'block');
        $('.icon4').css('display', 'none');
    });
    $('.icon5').click(function () { //密码是否可见
        $('.icon4').css('display', 'block');
        $('.icon5').css('display', 'none');
    });

    $(function () { //注册密码是否可见
        $(".icon4").on("click", function () {
            $(".password").prop("type", "text");
        });
        $(".icon5").on("click", function () {
            $(".password").prop("type", "password");
        });
    });

    $('.rapidenrollment').click(function () { //快速登录
        $('.pass_login_box').css('display', 'block');
        $('.register_login_box').css('display', 'none');
    });

    gotops({ //返回顶部
        ele: 'gobacks', //id
        scrollY: 300
    });

   

})();