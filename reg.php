<?php
	error_reporting(0); 
	header("Content-Type:text/html;charset=utf-8"); 
	include"setup.php";
	$username=$_POST["username"];
	$userpw=$_POST["userpw"];
	$sql="select id from $NEWSTABLE where username='$username' and userpw='$userpw'";
	$connect=mysqli_connect($DB_SERVER,$DB_USER,$DB_PASS)or die("无法连接");
	$db=mysqli_select_db($connect,$DB_NAME)or die("无法选择数据库");
	$query=mysqli_query($connect,$sql)or die("无法执行sql语法");
	if(!$query) {
		print("ERROR");
	}else {
		if($rows=mysqli_fetch_array($query)){
			header("refresh:0;url=index.html");
			exit;
		}
		else{
			echo "<script language=javascript>alert('用户名or密码错误');history.back();</script>";
		}
	}
  ?>
