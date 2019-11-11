(function () {

    let filterBox = document.getElementsByClassName('filter-write-box')[0];
    let Priceshigh = document.getElementsByClassName('Priceshigh')[0]; //价格从低到高
    let Priceslow = document.getElementsByClassName('Priceslow')[0]; //价格从高到低
    let pagest = document.getElementsByClassName('pagest')[0]; //页数
    let putc = document.getElementsByClassName('putc')[0]; //区间
    let puta = document.getElementsByClassName('puta')[0]; //区间
    let btnn = document.getElementsByClassName('btnn')[0]; //区间筛选

    let ipage = 1; //获取第一页
    let num = 10; //每页10条数据
    let paixu = '';
    let te1 = '';
    let te2 = '';


    function init() {
        ajax({
            type: 'get',
            url: '../api/listpage.php',
            data: {
                ipage,
                num,
                paixu,
                te1,
                te2
            },
            success: str => {
                rendering(str);
            }
        });
        //1、数据渲染
        function rendering(str) {
            let arr = JSON.parse(str);
            // data-id=${item.id}
            let html = arr.list.map(item => {
                return ` <div class="itemster clearfix">
                    <div class="item-img">
                        <a href="###"><img data-id=${item.id} src="${item.imgurl}" alt=""></a>
                        <div class="big-img-box">
                            <img src="${item.imgurl}" alt="">
                        </div>                
                    </div>
                    
                    <div class="item-info">
                        <div class="title" title="${item.title}">
                            <a href="###">${item.title}</a>
                        </div>
                        <div class="author-info">
                            九州书源 著 / 清华大学出版社 / 2016-09 / 平装
                        </div>

                        <div class="user-info">
                            <div class="text">
                                <a class="user-info-link" href="http://shop.kongfz.com/316373/"
                                    target="_blank">${item.shop}</a>
                                <i class="iconfont icon-wuxing-copy-copy-copy xing"></i>
                            </div>
                            <div class="text user-place">${item.city}</div>
                            <div class="text on-line">
                                <a class="user-info-link" href="http://user.kongfz.com/10482927/"
                                    target="_blank">${item.shops}</a>
                                <i class="iconfont icon-liaotian1 liao"></i>
                            </div>
                        </div>

                    </div>
                    <div class="item-price">
                        <div class="first-info clearfix">
                            <span class="newBook">${item.newj}</span>
                            <i>￥${item.price}</i>
                        </div>
                        <div class="ship-fee-box">
                            <span class="">快递费：</span>
                            <span>￥12.00</span>
                        </div>
                        <div class="add-time-box">
                            <span>${item.times}</span>
                            <span>上书</span>
                        </div>
                    </div>
                    <div class="item-input">
                        <div class="go-car add-cart-btn btns data-id=${item.id}">加入购物车</div>
                        <div class="collection-btn btns">立即购买</div>
                    </div>
                </div>`;
            }).join('');
            filterBox.innerHTML = html;

            //2、计算总页码
            let sum = Math.ceil(arr.totol / num);
            let astr = '';
            for (let i = 0; i < sum; i++) {
                astr += `<a href="###">${i + 1}</a>`;
            }
            pagest.innerHTML = astr;
            pagest.children[ipage - 1].classList.add('active');

            //3.点击跳转到对应的内容
            pagest.onclick = ev => {
                if (ev.target.tagName == 'A') {
                    ipage = ev.target.innerHTML;
                    init();
                }
            }
        }
    }

    init();
    //排序
    Priceshigh.onclick = function () {
        ipage = 1;
        paixu = 'asc';
        init();
    }
    Priceslow.onclick = function () { //价格从高到低
        ipage = 1;
        paixu = 'desc';
        init();
    }

    btnn.onclick = function () {
        te1 = putc.value.trim();
        te2 = puta.value.trim();
        // ipage = 1;
        // paixu = 'asc';
        init();
    }

    let addcar = document.getElementsByClassName('add-cart-btn');
    console.log(addcar);
    filterBox.onclick = function (ev) {

        if (ev.target.tagName == 'IMG') {
            let gid = ev.target.dataset.id;
            window.open('goods.html?' + gid);
        }
    }
})();