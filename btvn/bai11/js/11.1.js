var i=1;
$('.btn').click(function(){
	var input=$('#input').val();
	if (input=="") {
		alert('chua nhap noi dung')
	} else {
		$('#text').append(`<tr id="`+i+`" width="100%" class="tr">
							<td width=100px id="col`+i+`"></td>
							<td width="1200px" >`+input+`</td>
							<td width=50px id="remove" data-id="`+i+`"><i class="fas fa-times"></i></td>
						</tr>`)	
	}
	
	if (i%2!=0) {
		$('#'+i).css("background","white")
	} else {
		$('#'+i).css("background","#BDBDBD")
	}

	$('#input').val("");
	i++;
})
$(document).on("click", "#remove", function(){
	var id=$(this).data('id')
	$('#'+id).remove();
})
$(document).on("click", ".tr", function(){
	var id=$(this).attr('id')
	if ($('#col'+id).html()=='<i class="fas fa-check"></i>') {
			$('#'+id).css("text-decoration","none")
			$('#col'+id).html('');
			if (id%2!=0) {
				$('#'+id).css("background","white")
			} else {
				$('#'+id).css("background","#BDBDBD")
			}
	
	} else {
		$('#'+id).css("text-decoration","line-through")
		$('#'+id).css("background","#00FFFF")
		$('#col'+id).html('<i class="fas fa-check"></i>')
	}
})