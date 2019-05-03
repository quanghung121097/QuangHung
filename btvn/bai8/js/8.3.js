
var a=1;
var s=0;
var n=prompt('nhap vao n: ');
for (var i = 1; i <= n; i++) {
	a=parseInt(a)*parseInt(i);
	s=parseFloat(s)+parseFloat((parseInt(i)/parseInt(a)));
}
alert('tong la: '+ s);
