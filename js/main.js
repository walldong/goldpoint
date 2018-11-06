function CreatBox() {
	document.getElementById("result").innerHTML="";
	document.getElementById("Box_num").innerHTML="";
	var Pnum1=document.getElementById("P_num").value;
	var o = document.getElementById("Box_num");
	for (i = 0; i < Pnum1; i++) {
		var Box_num = document.createElement("input"); 
		Box_num.setAttribute('type', 'text');
		Box_num.setAttribute('name', 'B_num');
		Box_num.setAttribute('class', 'form-control');
		Box_num.setAttribute('class', 'input-sm');
		o.appendChild(Box_num); 
	}
}
function Creatarea(a) {
	document.getElementById("result").innerHTML="";
	var o = document.getElementById("result");
	var res = document.createElement("textarea"); 
	res.setAttribute('name', 'res');
	res.setAttribute('class', 'res');
	res.setAttribute('rows', '10');
	res.setAttribute('cols', '40');
	res.setAttribute('readonly', 'readonly');
	o.appendChild(res); 
	for (i = 0; i <a.length; i++) {
		j=i+1;
		res.innerHTML+="第"+j+"个人的分数是："+a[i]+"\n";
	}
}
function Creatarea2(a) {
	document.getElementById("result2").innerHTML="";
	var o = document.getElementById("result2");
	var res = document.createElement("textarea"); 
	res.setAttribute('name', 'res');
	res.setAttribute('class', 'res');
	res.setAttribute('rows', '10');
	res.setAttribute('cols', '40');
	res.setAttribute('readonly', 'readonly');
	o.appendChild(res); 
	for (i = 0; i <a.length; i++) {
		j=i+1;
		res.value+="第"+j+"个人的总分数是："+a[i]+"\n";
	}
}
function Get_num() {
	var A_num= new Array();
	var P=document.getElementsByName("B_num");
	for (i = 0; i <P.length; i++) {
		A_num[i]=P[i].value;
	}
	var sum=0;
	for (i = 0; i <A_num.length; i++) {
		sum=sum+parseFloat(A_num[i]);
	}
	S=sum/A_num.length;
	A=S*0.618;
	return A;
}
function Count(S_num) {
	var P_sum=new Array();   
	var Pe_num=new Array();
	var S=Get_num();
	for (i = 0; i < S_num.length; i++) {
		Pe_num[i]=Math.abs(S-S_num[i]);
	}
	var max=Pe_num[0];
	for (i = 0; i <Pe_num.length; i++) {
		if (max<Pe_num[i]) {
			max=Pe_num[i];
		}
	}
	var min=Pe_num[0];
	for (i = 0; i < Pe_num.length; i++) {
		if (min>Pe_num[i]) {
			min=Pe_num[i];
		}
	}
	for (i = 0; i <Pe_num.length; i++) {
		if (max==Pe_num[i]) {
			P_sum[i]=10;
		}
		else if (min==Pe_num[i]) {
			P_sum[i]=-2;
		}
		else {
			P_sum[i]=0;
		}
	}
	var S1 = new Array();  
			S1[0]=P_sum[0]
	return P_sum;
}
var q=0;
var data=new Array();
function next() {
	var Snum=new Array();
	var num=document.getElementsByName("B_num");
	for (i = 0; i <num.length; i++) {
		Snum[i]=num[i].value;
	}
	q++;
	var A=Count(Snum);
	Creatarea(A);
	var B=new Array();
	if (q==1) {
		for (i = 0; i < A.length; i++) {
			data[i]=parseInt(A[i]);
		}
	}else {
		for (i = 0; i <A.length; i++) {
		var a=parseInt(A[i]);
		data[i]=data[i]+a;
	}
	}
	Creatarea2(data);
}