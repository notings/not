(function(){
    

    var boc = document.getElementsByClassName('main-top')[0];
    var gid = decodeURI(location.search.slice(1));

    function init() {
        ajax({
            type: 'get',
            url: '../api/orderby.php',
            data: {
                gid,
            },
            success: str => {
                rendering(str);
                console.log(str);
            }
        });

        //1、数据渲染
        function rendering(str) {
            let arr = JSON.parse(str);

            let html = '';
            html = ` <div class="left">
                <div class="book"><img src="${arr[0].imgurl}" alt=""></div>
                <div class="introduce">
                    <div class="base-info">
                        <div class="title-box">
                            <h1>${arr[0].title}</h1>
                            <a href="" class="report">举报</a>
                        </div>
                        <div class="detail">
                            <ul>
                                <li>作者: 九州书源 著</li>
                                <li>出版社: 清华大学出版社</li>
                                <li>ISBN: 9787302405962</li>
                                <li>出版时间: 2016-09</li>
                            </ul>
                            <ul>
                                <li>版次:1</li>
                                <li>装帧:平装</li>
                                <li>开本:16开</li>
                            </ul>
                            <ul>
                                <li>纸张:胶版纸</li>
                                <li>页数:490页</li>
                                <li>字数:916千字</li>
                            </ul>
                        </div>
                    </div>
                    <div class="price-group">
                        <div class="new-icon"><img src="../img/new.png" alt=""></div>
                        <div class="price-list">
                            <div class="lists"><span>售价</span>
                                <span>
                                    <i class="icon1">￥</i>
                                    <i class="icon2">${arr[0].price}</i>
                                    <i class="icon3">4.5折</i>
                                </span>
                            </div>
                            <div class="lists"><span>定价</span><i class="price">￥99.80 </i></div>
                            <div class="lists"><span>品相</span><i class="wen">${arr[0].newj}</i></div>
                        </div>
                    </div>
                    <div class="city">
                        <div class="carry-title"><span>运费</span></div>
                        <div class="carry-cont">
                            <span>${arr[0].city}&nbsp;&nbsp;&nbsp;&nbsp;至</sapn>
                                <span>广东省广州市</span>
                                <i class="iconfont icon-sanjiaoxing"></i>
                                <span>快递 ￥12.00</span>
                        </div>

                    </div>
                    <div class="book-date bo">
                        <span class="tm">上书时间</span>
                        <span class="tx">${arr[0].times}</span>
                    </div>
                    <div class="number-check bo">
                        <span class="tm">数量</span>
                        <span class="matter">仅1件在售，欲购从速</span>
                    </div>
                    <div class="buy-btn">
                        <a class="go-buy">立即购买</a>
                        <a class="add-cart">
                            <i class="iconfont icon-gouwuche2"></i>
                            <span class="go-car data-id=${arr[0].id}">加入购物车</span>
                        </a>
                        <a class="collect" href="">
                            <i class="iconfont icon-shoucang"></i>
                            收藏</a>
                        <div class="share">
                            <i class="iconfont icon-fenxiang"></i>
                            <span>分享</span>
                            <div class="shareWay">
                                <a href="###">
                                    <i class="iconfont icon-weixin weixin"></i>
                                </a>
                                <a href="###">
                                    <i class="iconfont icon-weibo weibo"></i>
                                </a>
                                <a href="###">
                                    <i class="iconfont icon-qq1 qq"></i>
                                </a>
                                <a href="###">
                                    <i class="iconfont icon-doubanwang weixin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
            <div class="right-info">
                <div class="storeIns_content">
                    <div class="store">
                        <a href="###">豫诚书店</a>
                    </div>
                    <div class="storeIns">
                        <span>店铺等级</span>
                        <i class="iconfont icon-wuxing-copy-copy-copy star "></i>
                    </div>
                    <div class="storeIns">
                        <span>资质认证</span>
                        <i class="iconfont icon-credentials_icon"></i>
                        <i class="iconfont icon-jingwuicon_svg-"></i>
                    </div>
                </div>
                <div class="rate-block">
                    <div class="rate">90天平均</div>
                    <div class="block">成功完成<span>58.01%</span><i> (181笔)</i></div>
                    <div class="block">好评率<span>100.00%</span></div>
                    <div class="block">发货时间<span>67.56小时</span></div>
                </div>
                <div class="shop-info">
                    <div class="shop">
                        <span class="shop-title">店主</span><a class="shop-cont" href="###">豫诚书店</a>
                    </div>
                    <div class="shop">
                        <span class="shop-title">联系</span><a class="shop-cont2">离线留言</a>
                    </div>
                    <div class="shop">
                        <span class="shop-title">地址</span><span class="shop-cont3">北京市平谷区</span>
                    </div>
                    <div class="shop">
                        <span class="shop-title">电话</span><span class="shop-cont4"><img src="../img/txt2img"
                                alt=""></span>
                    </div>
                </div>
                <div class="storeIns_btn_box">
                    <a href="###">进店逛逛</a>
                    <a href="###">收藏店铺</a>
                </div>
            </div>
        </div>`;
            boc.innerHTML = html;

                let goodsCarBtn = document.getElementsByClassName('go-car')[0];
 
                goodsCarBtn.onclick = () => {
                    // var res = confirm('确定要加入购物车吗？');
                    alert('加入购物车成功！');
                    let user = getCookie('username');
                    let count = "1";
                    ajax({
                        type: 'post',
                        url: '../api/addTogoodsCar.php',
                        data: {
                            'gid': gid,//商品id
                            'username': user,//用户名
                            'count': count//购买数量
                        },
                        success: str => {
                            console.log(str);
                        },
                    });

                }
        }
    }
    init();
})();