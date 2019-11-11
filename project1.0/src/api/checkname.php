<?php
include 'coon.php';

// 获取前端传过来的数据
$name1 = isset($_REQUEST['username']) ? $_REQUEST['username'] : 'chen1';
$type = isset($_REQUEST['type']) ? $_REQUEST['type'] : 'login';
$password = isset($_REQUEST['possword']) ? $_REQUEST['possword'] : 'Aa1234*';
// 注册时验证用户名是否存在，读取数据库
if ($type == 'checkname') {
    $sql =  "SELECT * FROM userinf WHERE NAME='$name1'";
};
//注册,写入数据库
if ($type == 'reg') {
    $sql = "INSERT INTO userinf(name,psw) VALUES('$name1','$password')";
}
//登录验证
if ($type == 'login') {
    $sql = "SELECT * FROM userinf WHERE NAME='$name1' AND PSW='$password'";
}
// 当为向数据库添加数据时，返回布尔值，true为添加成功
$res = $connet->query($sql);
/*
        select : 返回结果集
        insert、update、delete：返回布尔值
*/
if ($type == 'checkname' || $type == 'login') {
    // 匹配有就返回个数$res->num_rows;
    $data = $res->num_rows; //
    $res->close();
} else {
    $data = $res;
}
if ($data) {
    echo 'yes';
} else {
    echo 'no';
}

$connet->close();
