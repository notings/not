<?php
include 'coon.php';
$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
$password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
$type = isset($_REQUEST['type']) ? $_REQUEST['type'] : '';

if($type == 'checkname' || $type == 'login') {
    if($type == 'checkname') {
        //验证用户名是否存在
        //sql语句
        $sql = "SELECT * FROM userinf WHERE username='$name'";
    }else{
        $sql = "SELECT * FROM userinf WHERE username='$name' AND psw='$password'";
    }
    //执行语句
    $res = $conn->query($sql);
    // var_dump($res);
    //判断是否可以通过验证
    if($res->num_rows) {
        //查找到，不能注册
        echo 'no';
    }else{
        echo 'yes';
    }
}

if($type == 'reg') {
    //注册功能
    $sql = "INSERT INTO userinf(username,psw,tel) VALUES('$name','$password','$tel')";
    //执行语句
    $res = $conn->query($sql);
    if($res) {
        //插入成功
        echo 'yes';
    }else{
        echo 'no';
    }
}


 //关闭数据库
    // $res->close();
    // $conn->close();
?>