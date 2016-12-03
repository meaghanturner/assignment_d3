<?php

// error_reporting  =  E_ALL
// display_errors = On


$username = "root";
$password = "root";
$host = "localhost";
$database = "whaledata";

$server = mysql_connect($host, $username, $password);
$connection = mysql_select_db($database, $server);

    $myquery = "SELECT  `whales_type`, `whales_years` FROM  `tbl_whales`";
    $query = mysqli_query($myquery);
    
    if ( ! $myquery ) {
        echo mysqli_error();
        die;
    }
    
    $data = array();

    for ($x = 0; $x < mysql_num_rows($query); $x++) {
        $data[] = mysql_fetch_assoc($query);
    }
    
    echo json_enc
    ode($data);     
     
    mysql_close($server);
?>