function gotops(opt) {

    var defaultOpt = {
        scrollY: 400
    }

    //有配置用配置，没有配置用默认
    Object.assign(defaultOpt, opt); //用默认参数 ：defaultOpt

    var box = document.getElementsByClassName(defaultOpt.ele)[0];

    window.onscroll = function () {
        var scrollTop = window.scrollY; //获取垂直方向的滚动距离
        if (scrollTop >= defaultOpt.scrollY) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    }

    box.onclick = function () {//缓慢回到顶部效果
        var scrollTop = window.scrollY;
        //步长== 运动距离 / 3 ==( scrollTop - 0) / 3
        var timer = setInterval(function () {
            var speed = parseInt(scrollTop / 6);//步长
            scrollTop -= speed;
            if (speed <= 0) {
                clearInterval(timer);
            }
            window.scrollTo(0, scrollTop);
        }, 30);//24帧 画面  1s看24个画面就比较连贯

    }
}