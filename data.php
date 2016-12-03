<?php
<<<<<<< HEAD
=======

>>>>>>> master
$username = "root";
$password = "root";
$host = "localhost";
$database = "whaledata";

<<<<<<< HEAD
$link=mysqli_connect($host, $username, $password, $database);
 
$query = "SELECT * FROM tbl_whales";
$result = mysqli_query($link, $query);
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
echo json_encode($rows);



=======
$server = mysql_connect($host, $username, $password);
$connection = mysql_select_db($database, $server);

    $myquery = "
SELECT  `type`, `years`, `thumbs` FROM  `whales`
";
    $query = mysql_query($myquery);
    
    if ( ! $query ) {
        echo mysql_error();
        die;
    }
    
    $data = array();

    for ($x = 0; $x < mysql_num_rows($query); $x++) {
        $data[] = mysql_fetch_assoc($query);
    }
    
    echo json_encode($data);     
     
    mysql_close($server);
>>>>>>> master
?>