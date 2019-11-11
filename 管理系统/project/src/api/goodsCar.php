<?php
/*11.购物车数据渲染

12.点击加减、手动修改数量，更新数据库

13.删除当行、删除多行

14.计算总价和总数量，存起来(选做) */

include 'coon.php';
$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : ''; //用户名
$sql = "SELECT * FROM addcar WHERE username='$username'";
$res = $conn->query($sql);
if ($res->num_rows) { //购物车中有商品
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $conn->set_charset('utf8'); //设置编码
    echo json_encode($data, JSON_UNESCAPED_UNICODE); //防止中文转义
} else {
    echo '您的购物车空空如也';
};
$res->close();
$conn->close();
