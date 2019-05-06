var input=document.getElementsByTagName('input')
document.getElementById('checkall').addEventListener('click',function(){
	for (var i = 0; i < input.length; i++) {
		input[i].checked=true;
	}
})
document.getElementById('uncheckall').addEventListener('click',function(){
	for (var j = 0; j < input.length; j++) {
		input[j].checked=false;
	}
})
