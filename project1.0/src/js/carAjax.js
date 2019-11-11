(function () {

    let mainCount = document.getElementsByClassName('main-count')[0];
    console.log(mainCount);
    let list = document.getElementsByClassName('list')[0];
    let text = document.getElementsByClassName('text')[0];
    let username = getCookie('username');

    function init() {
        ajax({
            type: 'get',
            url: '../api/goodsCar.php',
            data: {
                'username': username,
            },
            success: str => {
                create(str);
            }
        });
        //1.商品列表渲染
        function create(str) {
            if (str != '您的购物车空空如也') {
                let arrs = JSON.parse(str); 
                console.log(arrs);
                
                var html = arrs.map(function (item) {
                    return `<div class="list" data-id="${item.id}"> 
                                <div class="list-checkbox">
                                    <input type="checkbox" class="checkbox">
                                </div>
                                <div class="img-count">
                                    <div class="dimg"><img src="${item.imgurl}" alt=""></div>
                                    <div class="counts"><a href="###">${item.title}</a></div>
                                </div>
                                <div class="list-condition">${item.newj}</div>
                                <div class="list-unit">${item.price}</div>
                                <div class="list-input">
                                    <div class="text-box">
                                        <input type="button" value="-" class="cut telx">
                                        <input type="text" class="text text-cont" id="text-cont" data-kucun="${item.counts}" value="${item.counts}">
                                        <input type="button" value="+" class="add telx">
                                    </div>
                                    <div class="text-inf">
                                    <span class="text-inf1">至少购买一件商品！</span>
                                    <span class="text-inf2">仅1件在售!</span>
                                    </div>
                                </div>
                                <div class="list-price money">${((item.price) * (item.counts)).toFixed(2)}</div>
                                <div class="list-operate">
                                    <span class="collect">移入收藏</span>
                                    <span class="delete">删除</span>
                                </div>
                            </div> `;
                }).join('');
                mainCount.innerHTML = html;
                show();
            }
        }

    }
    init();

    
    function show() {

        let cut = document.getElementsByClassName('cut');
        let goodsCount = document.getElementsByClassName('text-cont');
        let add = document.getElementsByClassName('add');
        let singlePrice = document.getElementsByClassName('list-unit'); //价格
        let singleTotal = document.getElementsByClassName('list-price'); //价格2
        let itemDelete = document.getElementsByClassName('delete'); //删除
        let panelBody = document.getElementsByClassName('list'); //
        let checkbox = document.getElementsByClassName('checkbox'); //单选
        let textInf = document.querySelector('.text-inf'); //tishi
        let textInf1 = document.querySelector('.text-inf1'); //tishi
        let textInf2 = document.querySelector('.text-inf2'); //tishi
        let checkAllBottom = document.getElementById('checkboxst'); //全选
        let zongjia = document.getElementById('total-price'); //合计
        let zongshu = document.getElementById('selected-items'); //已选商品数量
        let jiesuan = document.getElementById('account-right'); //去结算
        let deleteAll = document.getElementById('del'); //全删

        index();
        let gid;

        function count(num, now) {
            var kucun = goodsCount[now].dataset.kucun;
            console.log(goodsCount[now]);
            if (num < 1) {
                num = 1;
                textInf1.style.display='block';
                // textInf2.style.display='none';
                // alert('至少购买一件商品！');
                // (textInf[now]).innerHTML="至少购买一件商品！";
            }
            if (num >= kucun) {
                num = kucun;
                textInf2.style.display='block';
                // textInf1.style.display='none';
                // alert('仅1件在售!');
                // (textInf[now]).innerHTML="仅1件在售!";
            }
            let username = getCookie('username');
            // console.log(username);
            changGoodsCount(username, gid, num);
            goodsCount[now].value = num;
            singleTotal[now].innerHTML = (singlePrice[now].innerHTML * num).toFixed(2);
            total(); //数量变化，总价和总数量要跟着变
        }
        // 单独绑定索引，每次删除项目后要重新获取索引
        function index() {
            for (var i = 0; i < panelBody.length; i++) {
                cut[i].index = i;
                add[i].index = i;
                checkbox[i].index = i;
                itemDelete[i].index = i;
                goodsCount[i].index = i;
            }
        }


        for (var i = 0; i < cut.length; i++) {
            index();
            // 点击数量减一
            cut[i].onclick = function () {
                var num = goodsCount[this.index].value * 1;
                num--;
                count(num, this.index);
                gid = this.parentNode.parentNode.dataset.id;
            }
            // 点击数量加一
            add[i].onclick = function () {
                var num = goodsCount[this.index].value * 1;
                num++;
                count(num, this.index);
                gid = this.parentNode.parentNode.dataset.id;
            }
            // 点击删除
            itemDelete[i].onclick = function () {
                // itemDel(this.index);
                var res = confirm('确定要删除该商品吗？');
                gid = this.parentNode.parentNode.dataset.id;
                ajax({
                    type: 'post',
                    url: '../api/deleteGoods.php',
                    data: {
                        'type': 'delgoods', //删除类型
                        username, //用户名
                        gid, //商品id

                    },
                    success: str => {
                        console.log(str);
                        // window.location.reload();
                        history.go(0);
                    }
                })
            }
            // 选中那行高亮
            checkbox[i].onclick = function () {
                total();
                if (this.checked) {
                    panelBody[this.index].style.background = 'cornflowerblue';
                } else {
                    panelBody[this.index].style.background = '';
                }
            }
            // 修改数量

            goodsCount[i].oninput = function () {
                var num = goodsCount[this.index].value * 1;
                if (isNaN(num)) {
                    alert('请输入正确的数字');
                } else {
                    count(num, this.index);
                    var num = goodsCount[this.index].value * 1;
                    gid = this.parentNode.parentNode.dataset.id;
                }

            }
        }

        function changGoodsCount(username, gid, counts) {
            ajax({
                type: 'post',
                url: '../api/goodsCarCount.php',
                data: {
                    username, //用户名
                    gid, //商品id
                    counts, //对应商品购买量
                },
                success: str => {
                    console.log(str);
                }
            })
        }

        //3、全选
        checkAllBottom.onclick = function () {
            for (var j = 0; j < checkbox.length; j++) {
                checkbox[j].checked = checkAllBottom.checked;
                if (checkbox[j].checked) {
                    panelBody[j].style.background = 'cornflowerblue';
                } else {
                    panelBody[j].style.background = '';
                }

            }
            total();
        }
       
        // 全删
        deleteAll.onclick = function () {
            var arr2 = ischeckall().reverse();
            var res = confirm('确定要删除选中的商品吗？')
            if (res) {
                arr2.forEach(function (item) {
                    // removeCookie();
                    init();
                    ajax({
                        type: 'post',
                        url: '../api/deleteGoods.php',
                        data: {
                            'type': 'delallgoods', //删除类型
                            username, //用户名
                            gid, //商品id
                        },
                        success: str => {
                            // console.log(str);
                            window.location.reload();
                        }
                    })
                })
                total();
                index();
            }

        }

        function ischeckall() {
            var num1 = 0;
            var arr = [];
            for (var j = 0; j < checkbox.length; j++) {
                if (checkbox[j].checked) {
                    num1++;
                    arr.push(j);
                }
            }
            if (num1 == checkbox.length) {
                checkAllBottom.checked = true;
            } else {
                checkAllBottom.checked = false;
            }
            return arr;
        }

        function total(arr) {
            var arr = ischeckall();
            var sum = 0;
            var priceAll = 0;
            arr.forEach(function (item) {
                sum += goodsCount[item].value * 1;
                priceAll += singleTotal[item].innerHTML * 1;
            })
            zongshu.innerHTML = sum;
            zongjia.innerHTML = priceAll.toFixed(2);
            if (arr.length) {
                jiesuan.className = 'account-right dian';
            } else {
                jiesuan.className = 'account-right dian no';
            }

        }
    }
})();