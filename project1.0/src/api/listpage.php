<?php
// header('Content-type:text/html;charset=utf-8');
include 'coon.php';

$page = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '1';
$num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '8';

$paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu'] : '';
$te1=isset($_REQUEST['te1']) ? $_REQUEST['te1'] : '';
$te2=isset($_REQUEST['te2']) ? $_REQUEST['te2'] : '';

$index = ($page - 1) * $num;

   
    
    if($te1 && $te2 && $paixu){
        $sql = "SELECT * FROM content WHERE price BETWEEN $te1 AND $te2 ORDER BY price $paixu LIMIT $index,$num";
        $sql3="SELECT * FROM content WHERE price BETWEEN $te1 AND $te2 ORDER BY price $paixu";
        $res2 = $conn->query($sql3);
    }
    else if($paixu) {
        $sql = "SELECT * FROM content ORDER BY price $paixu LIMIT $index,$num";
    }
    else if($te1 && $te2){
        $sql = "SELECT * FROM content WHERE price BETWEEN $te1 AND $te2 LIMIT $index,$num";
        $sql4="SELECT * FROM content WHERE price BETWEEN $te1 AND $te2";
        $res2 = $conn->query($sql4);
    }

    else{
        $sql = "SELECT * FROM content LIMIT $index,$num";
    }

    
    $sql2 = 'SELECT * FROM content';
    $res2 = $conn->query($sql2);
    // $res = $conn->query($sql);
  $res = $conn->query($sql);

  $arr = $res->fetch_all(MYSQLI_ASSOC);


  $data = array(//制作关联数组，就可以一次性传多个值给前端
    'totol' => $res2->num_rows,
    'list' => $arr,
    'page' => $page,
    'num' => $num
);

// SELECT * FROM list WHERE price BETWEEN 200 AND 400;
echo json_encode($data);
// $conn->set_charset('utf-8');
//5.关闭数据库
$res->close();
$conn->close();
?>