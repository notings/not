<?php
//建立连接
include 'coon.php';
//注册功能
$name=isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
$password=isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
$tel=isset($_REQUEST['tel']) ? $_REQUEST['tel'] : '';
//sql语句
$sql="INSERT INTO userinf(username,psw,tel) VALUES('$name','$password','$tel')";
//执行语句
$res=$conn->query($sql);
//判断是否插入成功
if($res) {
    echo 'yes';//成功
}else{
    echo 'no';
}
  //关闭数据库
// $res->close();
// $conn->close();
?>