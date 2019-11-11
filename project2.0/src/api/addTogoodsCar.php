<?php
/*加入购物车，获取用户名、商品id和数量，根据用户名和商品id去查找购物车中是否存在
存在时，更新数量
不存在时，根据商品id，去商品列表获取具体信息，插入到购物车表中*/
include 'coon.php';
$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : ''; //用户名
$gid = isset($_REQUEST['gid']) ? $_REQUEST['gid'] : ''; //商品id
$counts = isset($_REQUEST['count']) ? $_REQUEST['count'] : ''; //商品数量
// 查找购物车中是否存在此数据
$sql = "SELECT * FROM addcar WHERE username='$username' and id='$gid'";
$res = $conn->query($sql);

if ($res->num_rows == 1) { //若存在数据,则更新数量,
    // 在原来的基础上加上新的数量
    $data2 = $res->fetch_all(MYSQLI_ASSOC);
    $oldCounts = $data2[0]['counts'];
    $newCounts = $oldCounts + $counts;
    $sql3 = "update addcar set counts = '$newCounts' WHERE id='$gid' AND username= '$username'";
    $res3 = $conn->query($sql3); //返回布尔值，true更新成功
    if ($res3) {
        echo '更新成功';
    } else {
        echo '更新失败';
    };
} else { //不存在就插入数据
    // 先从数据表中获取数据,再添加到购物表中
    $sql2 = "SELECT * FROM content WHERE id='$gid'";
    $res2 = $conn->query($sql2); //执行
    $data = $res2->fetch_all(MYSQLI_ASSOC); //结果集，数组
    // $shopname = $data[0]['shopname']; //店名
    $title = $data[0]['title']; //商品名
    $imgurl = $data[0]['imgurl']; //图片路径
    $price = $data[0]['price']; //单价
    $newj = $data[0]['newj']; //单价
    $counts = $data[0]['counts'];
    // $money = $data[0]['money'];
    $sql4 = "INSERT INTO addcar(username,id,price,title,imgurl,counts,newj) VALUES ('$username','$gid','$price','$title','$imgurl','$counts','$newj')";
    $res4 = $conn->query($sql4); //返回布尔值，true插入成功
    if ($res4) {
        echo '插入成功';
    } else {
        echo '插入失败' . $username . $gid . $counts;
    };
};
$conn->close();
