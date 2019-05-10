var dem=0;
var item=document.getElementsByClassName('item');
var length= item.length;
var cham= document.getElementsByClassName('cham');
function prev(){
	dem--;
	for (var i = item.length-1; i >=0; i--) {
		item[i].className='item';
		cham[i].className='cham';
	}
	if(dem<0){
		dem=item.length-1;
	}
	item[dem].className='item at';
	cham[dem].className='cham pt';
}

function next(){
	dem++;
	for (var i = item.length-1; i >=0; i--) {
			item[i].className='item';
			cham[i].className='cham';
		}
		if(dem>item.length-1){
			dem=0;
		}
		item[dem].className='item at';
		cham[dem].className='cham pt';
}

function bt(n){
	for (var i = item.length-1; i >=0; i--) {
			item[i].className='item';
			cham[i].className='cham';
		}
		dem=n;
		item[dem].className='item at';
		cham[dem].className='cham pt';
}
window.setInterval(function(){ next(); }, 6000);