(function () {

    let mail = document.getElementsByClassName('user')[0];
    let psw = document.getElementsByClassName('psw')[0];
    let inf1 = document.getElementsByClassName('inf1')[0];
    let inf2 = document.getElementsByClassName('inf2')[0];
    let button = document.getElementsByClassName('button')[0]; //登录
    let keep = document.getElementById('keek'); //登录

    button.onclick = function () {
        let name = mail.value.trim();
        let password = psw.value.trim();
        let usern = getCookie('username');
        //判断是否登录
        if (usern) {
            alert('您已登陆!');
        } else {
            ajax({
                type: 'post',
                url: '../api/sum.php',
                data: {
                    name,
                    password,
                    type: 'login'
                },
                success: str => {
                    if (str == 'no') {
                        alert('登陆成功!');
                        setdata();
                        let url = getCookie('url');
                        inf1.innerHTML = '√';
                        inf1.style.color = 'green';
                        if (url) {
                            location.href = url;
                        } else {
                            // location.href = 'index.html?';
                            window.location.reload();
                        }

                    } else {
                        inf1.innerHTML = '验证失败';
                        inf1.style.color = 'red';
                        isok = false;
                    }
                }
            });
        }
    }

    function setdata() {
        setCookie('username', mail.value.trim(), 3);
    };


    let welcome = document.getElementsByClassName('top_right_logo')[0];

    function undata() {
        let data = getCookie('username');
        if (data) {
            welcome.innerHTML = data + '<a href="###" class="quit">退出</a>';
        } else {
            welcome.innerHTML = '登录 / 注册';
        }
    }
    undata();

    welcome.onclick = function (ev) {
        if (ev.target.innerHTML == '退出') {
            alert('退出成功');
            removeCookie('username');
            removeCookie('url');
        }
        undata();
    }

})();