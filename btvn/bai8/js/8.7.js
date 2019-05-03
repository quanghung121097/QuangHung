alert('nhap vao chieu cao,chieu dai,chieu rong tuong ung voi cac hinh')
document.write('<br/>');
document.write('----------------Hinh 1-----------------------');
document.write('<br/>');
var n;
	n=prompt('chieu cao cua tam giac 1');
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= i ; j++) {
			document.write('*');
			
		}
		document.write('<br/>');
	}
document.write('<br/>');
document.write('-----------------Hinh 2----------------------');
document.write('<br/>');
var cd,cr;
cd=prompt('nhap chieu dai hinh vuong 2: ')
cr=prompt('nhap chieu rong hinh vuong 2: ')
for (var i1 = 1; i1 <= cd; i1++) {
	for(var j1=1;j1<= cr; j1++){
		document.write('*');
	}
	document.write('<br/>')
}
document.write('<br/>');
document.write('-------------------Hinh 3--------------------');
document.write('<br/>');
var x,y,i2,j2;
x=prompt('nhap chieu dai hinh vuong 3');
y=prompt('nhap chieu rong hinh vuong 3');
for( i2 = 0; i2 < x; i2++)    {
        for( j2 = 0 ; j2 < y; j2++){
            if(i2 == 0 || j2 == 0 || i2 == (x-1) || j2 == (y-1)){
                document.write('*');
            }
            else{
                document.write('&nbsp;&nbsp;');
            }

        }
    	document.write('<br/>');
    }
document.write('<br/>');
document.write('-------------------hinh4--------------------');
document.write('<br/>');
var n;
	n=prompt('chieu cao cua tam giac 4');
	for (var i = 0; i <=n; i++) {
		for (var j = n-i; j >= 1  ; j--) {
			document.write('*');
			
		}
		document.write('<br/>');
	}
