<?php
$username = "root";
$password = "root";
$host = "localhost";
$database = "whaledata";

$link=mysqli_connect($host, $username, $password, $database);
 
$query = "SELECT * FROM tbl_whales";
$result = mysqli_query($link, $query);
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
echo json_encode($rows);



?>