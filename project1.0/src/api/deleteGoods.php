<?php
/*
1、传递用户名，商品id，删除对应的商品
2、删除全部商品
*/
include 'coon.php';

$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
$gid = isset($_REQUEST['gid']) ? $_REQUEST['gid'] : '';
$type = isset($_REQUEST['type']) ? $_REQUEST['type'] : '';
// 更新对应用户名下商品的数量
if ($type == 'delgoods') {
    $sql = "DELETE FROM addcar  WHERE id='$gid' AND username= '$username'";
} else if ($type == 'delallgoods') {
    $sql = "DELETE FROM addcar  WHERE username= '$username'";
};
$res = $conn->query($sql);
if ($res) {
    echo '删除成功';
} else {
    echo '删除失败';
}
$conn->close();
