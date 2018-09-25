<?php

$host="localhost"; //Host name
$username="root"; //Mysql username
$password=""; //Mysql password
$db_name="login"; //Mysql Database Name
$tbl_name="users"; //Mysql Table name

//Connect to server and select database.
$conn=new mysqli("$host","$username","$password","$db_name")or die("can't connect");
//mysql_select_db("$db_name")or die("can't select DB");

//username and password sent from form
$myusername= $_POST['username'];
$mypassword= $_POST['password'];

//To protect MySQL injection
$myusername=stripslashes($myusername);
$mypassword=stripslashes($mypassword);
$myusername=mysqli_real_escape_string($conn, $myusername);
$mypassword=mysqli_real_escape_string($conn, $mypassword);
$sql="SELECT * FROM $tbl_name WHERE username='$myusername' and password='$mypassword'";
$result=mysqli_query($conn, $sql);

//Mysql_num_row is counting table row
$count=mysqli_num_rows($result);

//If result matched $myusername and $mypassword, table row must be 1 row
if($count==1){
    
    //Register $myusername, $mypassword and redirect to file "index.html"
    //session_register("$myusername");
    //session_register("$mypassword");
    header("location:../dashboard.html");
}
else{
    echo "Username or Password is incorrect";
}
?>
