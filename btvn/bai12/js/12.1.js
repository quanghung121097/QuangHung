$('.menu li').hover(function(){
	$(this).find('ul:first').slideDown(500)
},function(){
	$(this).find('ul:first').slideUp(200)
})