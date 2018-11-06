<?php
	error_reporting(0); 
	header("Content-Type:text/html;charset=utf-8"); 
	include"setup.php";
	$username=$_POST["username"];
	$userpw=$_POST["userpw"];
	$sql="select*from $NEWSTABLE order by id desc";
	$connect=mysqli_connect($DB_SERVER,$DB_USER,$DB_PASS)or die("无法连接");
	$db=mysqli_select_db($connect,$DB_NAME)or die("无法选择数据库");
	$query=mysqli_query($connect,$sql)or die("无法执行sql语法");
	if(!$query) {
		print("ERROR");
	}else {
			$que="select id from $NEWSTABLE where username=$username and userpw=$userpw"; 
			$result=mysqli_query($que); 
			$numrows=mysqli_num_rows($result);
			if($numrows==0){ 
			echo 非法用户; 
			}
			else{ 
				echo 登录成功; 
				echo 请进！; 
				}














//		$list=mysqli_fetch_array($query);
//			if($username==$list[username]&&$userpw==$list[userpw]) {
//				print("登录成功");
//			}
//			else {
//				print("账号或密码不对");
//			}
	}
  ?>
