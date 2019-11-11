//js库文件：仿jq，这里提供一些方法，以后可以反复调用，提高我们开发效率

/*
 * @Description: 封装一个函数可以实现下拉菜单的显示隐藏(点击版)
 * @Author:ete
 * @Date: 2019-07-23 15:21:00
 * @LastEditTime: 2019-07-23 16:10:27
 * @LastEditors: Please set LastEditors
 */

function hideShow(btn, ele) {//要参数：参数一：点击的对象；参数二：显示隐藏的对象
    btn.onclick = function () {
        if (ele.style.display == 'block') {//null == 'block'  'block'== 'block' 'none'=='block'
            ele.style.display = 'none';
        } else {
            //第一次：显示
            ele.style.display = 'block';
        }
    }
}
/*
 * @Description: 封装一个函数可以实现十六进制随机颜色
 * @Author: sfrs
 * @Date: 2019-08-26 19:53:00
 * @LastEditTime: 2019-08-26 19:53:00
 * @LastEditors: Please set LastEditors
 */
function randomColor() {
    var str = '0123456789abcdef';
    html = '#';
    for (var i = 0; i < 6; i++) {
        var index = parseInt(Math.random() * str.length);
        html += str[index];
    }
    return html;
}
/*
 * @Description: 封装一个函数可以实现过滤掉敏感词
 * @Author: sfs
 * @Date: 2019-08-26 19:53:00
 * @LastEditTime: 2019-08-26 19:53:00
 * @LastEditors: Please set LastEditors
 */

function filter(str) {
    var arr = ['草你妈', 'fuck', '垃圾', '灭党', '菜鸡', '小学生'];//需要过滤掉的字眼
    arr.forEach(function (item) {
        var reg = new RegExp(item, 'gi');//正则表达式，匹配到所有项
        str = str.replace(reg, '***');//然后把内容替换成***
    })
    return str;
}

/*
 * @Description: 封装一个函数可以实现网址字符串转成对象
 * @Author:fhht
 * @Date: 2019-08-26 19:53:00
 * @LastEditTime: 2019-08-26 19:53:00
 * @LastEditors: Please set LastEditors
 */
function strToObj(str) {
    var obj = {};//建立一个空对象，用来保存结果
    var arr = str.split('&');//name=apple  price=7890
    arr.forEach(function (item) {
        var arr2 = item.split('=');//name  apple
        obj[arr2[0]] = arr2[1]//第一个值作为键名，第二个数作为键值,切割一组存一组
    })
    return obj;
}

/*
 * @Description: 封装一个函数可以实现对象切割成字符串
 * @Author:dgg
 * @Date: 2019-08-28 19:53:00
 * @LastEditTime: 2019-08-28 19:53:00
 * @LastEditors: Please set LastEditors
 */
function objToStr(obj) {
    var html = '';
    for (var key in obj) {
        html += key + '=' + obj[key] + '&';//拼接
    }
    return html.slice(0, -1);//减去最后一个&号，key0=0&key1=1&key2=2
}
/*
 * @Description: 封装一个函数可以产生n位随机字母和数字带旋转角度
 * @Author: fg
 * @Date: 2019-08-26 19:53:00
 * @LastEditTime: 2019-08-26 19:53:00
 * @LastEditors: Please set LastEditors
 */
function randomNum(n) {
    var str = 'zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP1234567890';
    var sum = '';
    for (var i = 0; i < n; i++) {
        var a = parseInt(Math.random() * str.length);
        var b = parseInt(Math.random() * 90 - 45);
        sum += '<span style="transform:rotate(' + b + 'deg' + ')">' + str[a] + '</span>';
    }
    return sum;
}

/*
 * @Description: 封装一个函数可以获取整体时间
 * @Author: yku
 * @Date: 2019-08-27 10:17:00
 * @LastEditTime: 2019-08-27 10:17:00
 * @LastEditors: Please set LastEditors
 */
function getTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;//月份从0开始，所以要加1
    var day = time.getDate();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var week = time.getDay();
    function todb(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }
    var str = `${year}-${todb(month)}-${todb(day)} ${todb(hours)}:${todb(mins)}:${todb(secs)}`
    return str;
}

//封装一个函数实现获取某个范围内的随机数  min-max 100 - 999
function ranNum(min, max) {
    //Math.random() 0-1 不包含1
    // return Math.random()*max + min;
    return parseInt(Math.random() * (max - min + 1)) + min;//Math.random()为0的时候，最小的时候，等于min
}

/*
 * @Description: 封装一个函数可以获取某一时间的对象
 * @Author: dffffff
 * @Date: 2019-08-27 10:17:00
 * @LastEditTime: 2019-08-27 10:17:00
 * @LastEditors: Please set LastEditors
 */
function getTimes() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;//月份从0开始，所以要加1
    var day = time.getDate();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var week = time.getDay();
    function todb(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }
    var json = {
        years: year,
        months: todb(month),
        days: todb(day),
        hours: todb(hours),
        mins: todb(mins),
        secs: todb(secs),
        week: weeks(week)
    };
    return json;
    function weeks(a) {
        var arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        return arr[a];
    }
}
/*
 * @Description: 封装一个函数可以实现秒数转天、小时、分钟、秒
 * @Author:htht
 * @Date: 2019-08-27 16:13:00
 * @LastEditTime: 2019-08-27 16:13:00
 * @LastEditors: Please set LastEditors
 */

function secChang(num) {
    var day = parseInt(num / 3600 / 24);//天
    var hour = parseInt((num / 3600) % 24);//时
    var min = parseInt((num / 60) % 60);//分
    var sec = parseInt(num % 60);//秒
    return {
        days: day,
        hours: hour,
        mins: min,
        secs: sec,
    }
}
// ------------------------封装实现节点查找兼容问题----------------------------------------
//     在IE9 + 和其他标准浏览器中，div与p之间的空白区域被认为是第一个子节点为空白节点（即文本节点），
//     div显示数字3。
//     在IE8和IE8以下浏览器中，div显示数字1，是元素节点。
//      nodeType 属性返回以数字值返回指定节点的节点类型。
//      1 代表元素节点 ;  2 代表属性节点;   3 代表文本节点;

//  * firstElementChild 获取第一个子元素
function firstChild(node) {
    // 标准浏览器写法.firstElementChild 
    if (node.firstElementChild) {
        return node.firstElementChild;
    } else {
        // IE678
        return node.firstChild;
    }
}
//  * lastElementChild 获取最后一个子元素
function lastChild(node) {
    // 标准浏览器写法.firstElementChild 
    if (node.lastElementChild) {
        return node.lastElementChild;
    } else {
        // IE678
        return node.lastChild;
    }
}
//  * previousElementSibling 获取前一个元素
function previousSibling(node) {
    // 标准浏览器写法.firstElementChild  
    if (node.previousElementSibling) {
        return node.previousElementSibling;
    } else {
        // IE678
        return node.previousSibling;
    }
}
//  * nextElementSibling 获取下一个元素
function nextSibling(node) {
    // 标准浏览器写法.firstElementChild 
    if (node.nextElementSibling) {
        return node.nextElementSibling;
    } else {
        // IE678
        return node.nextSibling;
    }
}


//---------------------仿jq的css()方法，设置和获取样式-----------------------------------------


//封装一个函数：能够获取元素的样式(行内和非行内)，还能设置元素的样式（行内）
function css() {
    var ele = arguments[0];
    var attr = arguments[1];
    if (arguments.length == 2) {
        //获取样式
        if (getComputedStyle(ele, false)) {
            //证明在主流浏览器下：IE9+ 和 主流的浏览器
            return getComputedStyle(ele, false)[attr];
        } else {
            //低版本IE:IE678
            return ele.currentStyle(attr);
        }
    } else if (arguments.length == 3) {
        //设置样式
        // box.style.display = 'block';
        var val = arguments[2];
        ele.style[attr] = val;
    }

}
-
// 获取id节点
function getid(id) {
    return document.getElementById(id);
}

//单选控制全选
//传入单选按钮的节点集合，返回布尔值
function ischeckall(check) {
    var num = 0;
    for (var j = 0; j < check.length; j++) {
        if (check[j].checked) {
            num++;
        }
    }
    if (num == check.length) {
        return true;
    } else {
        return false;
    }
}
//表单验证
function checkInp(ele, reg, tip, inf) {
    ele.onblur = function () {
        var str = ele.value.trim();
        if (str) {
            //非空   
            //法3：通过eval()方法，eval可以把字符串转为js代码
            //法1：通过对象键名为变量时如何取键值来做;法2：用回调函数，把参数传到外面去处理
            var res = checkReg[reg](str);
            if (res) {
                //验证通过
                tip.innerHTML = `${inf}验证通过`;
                tip.style.color = '#58bc58';
                ele.istrue = true;
            } else {
                //验证不通过
                tip.innerHTML = `请输入正确的${inf}!`;
                tip.style.color = 'red';
                ele.istrue = false;
            }
        } else {
            tip.innerHTML = `${inf}不能为空!`;
            tip.style.color = 'red';
            ele.istrue = false;
        }
    }
}

//表单正则验证
var checkReg = {
    email: function (str) {//验证邮箱
        var reg = /^[\w#%&!\^*\-]+@[\w#%&!\^*\-]+\.[a-zA-Z]+$/;
        return reg.test(str);
    },
    tel: function (str) {//验证手机号
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    url: function (str) {//验证网址
        var reg = /^(https?:\/\/)?\w+\.\w+\.\w+$/;
        return reg.test(str);
    },
    date: function (str) {//验证日期
        var reg = /^\d{4}-\d{1,2}-\d{1,2}$|^\d{4}\/\d{1,2}\/\d{1,2}$|^\d{4}\d{1,2}\d{1,2}$/;
        return reg.test(str);
    },
    username: function (str) {//验证中文
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    nickname: function (str) {//验证中文
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },

    password: function (str) {//输入密码，最低级的
        var reg = /^\S{6,20}$/;
        return reg.test(str);
    },
    surepass: function (str) {//验证确认密码里是否与pass里输入的密码一样
        if (str) {
            return str == pass.value;
        }
    },
    idcard: function (str) {//身份证验证
        var reg = /^(\d{17}|\d{14})[\dx]$/;
        return reg.test(str);
    },
    delspace: function (str) {//能兼容全部浏览器的去除前后空格（trim() ES5方法不兼容低版本IE 8-）
        var reg = /^\s+|\s+$/g;
        return str.replace(reg, '');
    },
    getarr: function (str) {//能把类似'a b,c，d, e， f%g-h'字符串转换成[a,b,c,d,e,f,g,h]的数组
        var reg = /[\s,，%\-]\s?/;
        return str.split(reg);
    },
    birthday: function (str) {
        var reg = /^\d{4}([\/\-]?)\d{1,2}\1\d{1,2}$/;
        return str.split(reg);
    }
};

//兼容处理  bind() 仿jq：绑定事件

//兼容处理  bind() 仿jq：绑定事件
function bind(ele, type, fn) {
    //ele:元素 type：事件名 fn:回调函数
    if (ele.addEventListener) {
        //标准浏览器
        ele.addEventListener(type, fn, false);
    } else {
        //ie8-
        ele.attachEvent('on' + type, fn);
    }
}
//深度拷贝
function cloneDeep(obj) {//深度拷贝
    var str = JSON.stringify(obj);
    var newobj = JSON.parse(str);
    return newobj;
}

//运动框架封装：startMove()过渡
/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名（obj）
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)（fnend）
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

}

//封装ajax请求数据
function ajax(opt) {
    // 默认参数
    let defaultOpt = {
        data: '',//是否向数据库传参，默认无
        asyn: true,//同步或异步，默认异步
        error: null//错误http码页面跳转，默认无
    }
    //替补方案
    Object.assign(defaultOpt, opt);
    //1.创建对象,告诉ajax你要的接口
    let xhr = new XMLHttpRequest();
    // 判断是用get还是用post请求
    if (defaultOpt.type.toLowerCase == 'get') {
        if (defaultOpt.data) { //有数据，把数据拼接在url
            defaultOpt.url = defaultOpt.url + objToStr(defaultOpt.data);
        }
        xhr.open('get', defaultOpt.url, defaultOpt.asyn);
        //2.发送请求
        xhr.send(null);
    } else {
        // 发送请求: 如果用post方式，记得要加请求头
        xhr.open('post', defaultOpt.url, defaultOpt.asyn);
        let data = objToStr(defaultOpt.data);//将对象转为字符串,封装的方法
        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");//请求头
        xhr.send(data);
    }

    //4.接收数据
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {//响应已经完成,但比一定正确
            //完成并成功了，可以在network里面查看响应，是否接收成功
            // xhr.status == 304  表示数据与服务器相同，不需要重服务器请求（直接使用缓存的数据）
            if (xhr.status == 200 || xhr.status == 304) {
                //成功
                //后端返回的数据，默认是存在responseText属性里面
                defaultOpt.success(xhr.responseText);//把后端返回的数据作为实参传给success函数，去外面处理
            } else {
                if (defaultOpt.error) {
                    //失败
                    defaultOpt.error(xhr.status);//实参：http状态码
                }
            }
        }
    }
}
//cookie的增删改查
function setCookie(key, val, iDay) {//设置cookie值
    //key：键名(字符串)；val：键值；iDay：失效时间
    var now = new Date();
    now.setDate(now.getDate() + iDay);
    document.cookie = key + '=' + val + ';expires=' + now.toUTCString() + ';path=/';//设置一个站点内的文件可以共享此cookie
}

function getCookie(key) {//获取cookie值
    var cookies = document.cookie;//name=malin; pwd=123456
    var arr = cookies.split('; ');//['name=malin','pwd=123456']
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');//['name','malin'
        if (key == arr2[0]) {
            return arr2[1];
        }
    };
}

function removeCookie(key) {//删除：设置失效时间为过去的时间，立即失效
    setCookie(key, '', -1);
}

//将秒转为年月日时分秒
function getTimeSec(secs) {
    let time = new Date(secs * 1000);
    // console.log(time);
    let year = time.getFullYear();
    let mon = time.getMonth() + 1;
    let date = time.getDate();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let sec = time.getSeconds();
    return {
        year,
        mon,
        date,
        hours,
        mins,
        sec
    }
}
