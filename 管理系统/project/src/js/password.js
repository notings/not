function pass(opt) {


    $(function () { //密码是否可见
        $(".icon6").on("click", function () {
            $(".paw").prop("type", "text");
            $('.icon7').css('display', 'block');
            $('.icon6').css('display', 'none');
        });
        $(".icon7").on("click", function () {
            $(".paw").prop("type", "password");
            $('.icon6').css('display', 'block');
            $('.icon7').css('display', 'none');
        });
    });
}