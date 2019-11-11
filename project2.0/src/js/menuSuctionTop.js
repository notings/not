function menuSuctionTop(opt) {
    // 默认参数
    var defaultOpt = {
        // iw: 1000,
        ih: 100,
    }
    Object.assign(defaultOpt, opt);

    var menu = document.getElementsByClassName(defaultOpt.ele)[0];
    // 根据传入的iw，ih设置宽高
    menu.style.width = defaultOpt.iw + 'px';
    menu.style.height = defaultOpt.ih + 'px';
    var top = menu.offsetTop;//一定要在滚动条滚动前获取
    window.onscroll = function () {
        var scrollTop = window.scrollY;
        if (scrollTop >= top) {
            menu.className = 'right-block menu now'; //当达到临界点就添加样式
        } else {
            menu.className = 'right-block menu';
        }
    }
}