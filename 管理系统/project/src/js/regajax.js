(function () {

    let mail = document.getElementsByClassName('username')[0];
    let psw = document.getElementsByClassName('password')[0];
    let inf6 = document.getElementsByClassName('inf6')[0];
    let inf8 = document.getElementsByClassName('inf8')[0];
    let inf9 = document.getElementsByClassName('inf9')[0];
    let tel = document.getElementsByClassName('tel')[0];
    let register = document.getElementsByClassName('register')[0]; //注册
    let isok = false; //开关

    mail.onblur = () => {
        ajax({
            type: 'post',
            url: 'api/sum.php',
            data: {
                name: mail.value.trim(),
                type: 'checkname'
            },
            success: str => {
                console.log(str);
                if (str == 'yes') {
                    inf8.innerHTML = '√';
                    inf8.style.color = 'green';
                    isok = true;
                } else {
                    inf8.innerHTML = '验证失败';
                    inf8.style.color = 'red';
                    isok = false;
                }
            }
        });
    }
    tel.onblur = () => {
        var tel = tel.value.trim();
        var reg = /^[a-zA-Z0-9_-]{4,16}$/;
        if (tel) {
            let isok = reg.test(name); //返回布尔值
            if (isok) {
                inf6.innerHTML = '√';
                inf6.style.color = '#58bc58';
                istrue1 = true;
                ajax({
                    type: 'post',
                    url: 'api/sum.php',
                    data: {
                        name: tel.value.trim(),
                        type: 'checkname'
                    },
                    success: str => {
                        console.log(str);
                        if (str == 'yes') {
                            inf6.innerHTML = '√';
                            inf6.style.color = 'green';
                            isok = true;
                        } else {
                            inf6.innerHTML = '验证失败';
                            inf6.style.color = 'red';
                            isok = false;
                        }
                    }
                });
            } else {
                inf6.innerHTML = '用户名必须是4到16位（字母，数字，下划线，减号的组合';
                inf6.style.color = 'red';
            }
        } else {
            inf6.innerHTML = '请输入用户名';
            inf6.style.color = 'red';
        }


    }
    // function checkPhone() {
    //     var phone = document.getElementsByClassName('tel').value;
    //     console.log(phone);
    //     if (!(/^1[3|4|5|7|8]\d{9}$/.test(phone))) {
    //         alert("手机号码有误");
    //         return false;
    //     }
    // }

    //2.不存在就可以注册：insert
    register.onclick = () => {
        // if(){

        // }
        if (isok) {

            ajax({
                type: 'post',
                url: 'api/register.php',
                data: {
                    name: mail.value.trim(),
                    password: psw.value.trim(),
                    tel: tel.value.trim(),
                    type: 'reg'
                },
                success: str => {

                    if (str == 'yes') {

                        alert('注册成功!');

                        location.href = 'indexq.html?name=' + mail.value.trim();
                    } else {
                        alert('注册失败');
                    }
                }
            });
        }
    }

})();