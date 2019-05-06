var tab=document.getElementsByClassName('tab');
var section=document.getElementsByClassName('section')
for (var i = 0; i < tab.length; i++) {

	tab[i].addEventListener('click',function(){
		for (var i = 0; i < section.length; i++) {
		 section[i].style.display = "none";
		}
		this.nextElementSibling.style.display = "block";
		for (var j = 0; j < section.length; j++) {
		 tab[j].style.background  = "#BDBDBD";
		 tab[j].style.color="white"
		}
		this.style.background = "white";
		this.style.color = "black";

	})

}
