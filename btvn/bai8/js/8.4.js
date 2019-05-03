var n=prompt('nhap vao n');
var m=prompt('nhap vao m');
var k=prompt('nhap vao k');
var i;
var s=0;
for (i = n; i <= m; i++) {
	if (i%k==0) {
		s+=+i;
	}
}
alert('tong cac so la: '+s)
