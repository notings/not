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
            url: '/src/api/sum.php',
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
   
    //2.不存在就可以注册：insert
    register.onclick = () => {
        // if(){

        // }
        if (isok) {

            ajax({
                type: 'post',
                url: '/src/api/register.php',
                data: {
                    name: mail.value.trim(),
                    password: psw.value.trim(),
                    tel: tel.value.trim(),
                    type: 'reg'
                },
                success: str => {

                    if (str == 'yes') {

                        alert('注册成功!');

                        location.href = 'index.html?name=' + mail.value.trim();
                    } else {
                        alert('注册失败');
                    }
                }
            });
        }
    }

})();