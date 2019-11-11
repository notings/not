<?php
 include 'coon.php';

 $gid= isset($_REQUEST['gid']) ? $_REQUEST['gid'] : '1';


 $sql = "SELECT * FROM content WHERE id = $gid";

 $res = $conn->query($sql);
 
 $arr = $res->fetch_all(MYSQLI_ASSOC);

 echo json_encode($arr);


 $res->close();
 $conn->close();
?>