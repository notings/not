<?php
//1.建立连接
$servername = 'localhost';//主机
$username = 'root';//登陆数据库用户名
$password = 'root';
$dbname = 'projectst';

$conn = new mysqli($servername,$username,$password,$dbname);

// var_dump($conn); 
//php里面获取对象属性和方法：$conn->属性名  $conn->方法名(); js的写法：arr.lenght arr.push()

if($conn->connect_error) {
    //证明连接失败
    die("连接失败: " . $conn->connect_error);
}else{
    // echo '连接成功';
}
?>