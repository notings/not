(function () {
    drop_downlist({ //头部滑过显示
        ele: 'top_right_logo', //按钮
        ele2: 'top_logo', //显示的div
    });
    drop_downlist({ //头部滑过显示
        ele: 'personal', //按钮
        ele2: 'top_right_personal', //显示的div
    });
    drop_downlist({ //头部滑过显示
        ele: 'sellercenter', //按钮
        ele2: 'top_right_sellercenter', //显示的div
    });
    drop_downlist({ //头部滑过显示
        ele: 'service', //按钮
        ele2: 'top_right_service', //显示的div
    });
    drop_downlist({ //头部滑过显示
        ele: 'phonep', //按钮
        ele2: 'top_right_clientside', //显示的div
    });
    popups({ //弹窗
        ele: 'popup', //按钮
        ele2: 'logo',
        iw: 450, //宽度 (可选)
    });
    popups({ //弹出注册
        ele: 'popup', //按钮
        ele2: 'regist',
        iw: 450, //宽度 (可选)
    });
    $('.logo').click(function () { //登录右上角切换扫码
        $('.pass_login_box').css('display', 'block');
        $('.register_login_box').css('display', 'none');
    });
    $('.regist').click(function () { //登录右上角切换扫码
        $('.pass_login_box').css('display', 'none');
        $('.register_login_box').css('display', 'block');
    });
    pass({ //密码可见
        ele: 'icon6', //按钮
        ele2: 'icon7',
    });

    new Carouselimg({
        ele: 'banner', //最外层id名(必选参数)
        iw: 1010, //盒子的宽和高(可选参数)
        ih: 270, //盒子的宽和高(可选参数)
        imgdata: ['../src/img/banner1.jpg', '../src/img/banner2.jpg', '../src/img/banner3.jpg',
            '../src/img/banner4.jpg', '../src/img/banner5.jpg', '../src/img/banner6.jpg',
            '../src/img/banner7.jpg', '../src/img/banner8.jpg'
        ], //图片数据(必选参数)
        time: 3 //切换图片的秒数(可选参数)
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

    $('.menu span').mouseover(function () { //左侧选项卡
        $(this).attr('class', 'active').siblings().attr('class', '');
        $('.con .conbox').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });
    $('.menu2 span').mouseover(function () { //底部选项卡
        $(this).attr('class', 'active').siblings().attr('class', '');
        $('.con2 .conbox2').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });
    gotops({ //配置参数
        ele: 'goback', //id
        scrollY: 400
    });




})();