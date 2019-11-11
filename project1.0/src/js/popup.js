function popups(opt) {

    var defaultOpt = {

        iw: 300, //宽度 (可选)
        // ih: 250, //高度 (可选)

    }

    //有配置用配置，没有配置用默认
    Object.assign(defaultOpt, opt); //用默认参数 ：defaultOpt

    var box = document.getElementsByClassName(defaultOpt.ele)[0];
    var close = document.getElementsByClassName('close')[0];
    var bg = document.getElementsByClassName('bg')[0];
    var logo = document.getElementsByClassName(defaultOpt.ele2)[0];

    box.style.width = defaultOpt.iw + 'px';
    box.style.height = defaultOpt.ih + 'px';

    logo.onclick = function () {
        box.style.display = 'block';
        bg.style.display = 'block';
    }

    close.onclick = function () { // 点击窗口可以关闭窗口
        box.style.display = "none";
        bg.style.display = "none";
    }

}