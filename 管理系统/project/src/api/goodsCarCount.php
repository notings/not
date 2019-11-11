<?php
/*
传递用户名，商品id，数量过来，对数量进行修改
*/
include 'coon.php';
$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
$gid = isset($_REQUEST['gid']) ? $_REQUEST['gid'] : '';
$goodsCount = isset($_REQUEST['counts']) ? $_REQUEST['counts'] : '';
// 更新对应用户名下商品的数量
$sql = "update addcar set counts = '$goodsCount' WHERE id='$gid' AND username= '$username'";
$res = $conn->query($sql);
if ($res) {
    echo '数量更新成功';
} else {
    echo '数量更新失败';
}
$conn->close();
