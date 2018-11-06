<?php
include"setup.php";
error_reporting(0); 
header("Content-Type:text/html;charset=utf-8"); 
$username=$_POST["username"];
$userpw=$_POST["userpw"];
$sq = "select id from $NEWSTABLE where username='$username'";
$result = mysqli_query($sq);
if(mysql_affcted_rows==1) echo "用户名已存在";
else {
$sql="insert into $NEWSTABLE values('id','$username','$userpw');";
$connect=mysqli_connect($DB_SERVER,$DB_USER,$DB_PASS)or die("连接失败");
$db=mysqli_select_db($connect,$DB_NAME)or die("选择失败");
$query=mysqli_query($connect,$sql)or die("not connect newstable");
	if(!$query) {
		print("ERROR");
	}else {
		include("reg.html");
	}
}
?>