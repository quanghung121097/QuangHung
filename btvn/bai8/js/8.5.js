var n=prompt('nhap vao n')
var s=0;
for (var i=1 ; i<=n ; i++) {
	s=parseFloat(s)+parseFloat(parseInt(1)/parseInt(i));
}
alert('tong la: ' + s);