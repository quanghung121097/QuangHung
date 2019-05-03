var i,a=0;
document.write('cac so chia het cho 3 Hoac 7 trong [1;100] la: ')
document.write('<br/>')
for (var i = 1; i <=100; i++) {
	if( i % 3 == 0 || i % 7 ==0)
	{
		document.write(i + ' - ');
		a++
	}

}
document.write('<br/>')
document.write('co '+a+' so chia het cho 3 hoac 7')
