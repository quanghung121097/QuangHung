var n=prompt('nhap vao n');
var m=prompt('nhap vao m');
var k=prompt('nhap vao k');
var s=0;

for (var i=n; i <= m; i++) {
	if ((parseInt(i) % parseInt(k)) == 0) {
		s=parseInt(s)+parseInt(i);
	}
}
if (s==0) {
	alert('khong co so nao trong khoang '+n+' den '+m+' chia het cho '+k)
}
else {
	alert('tong la: '+s)
}