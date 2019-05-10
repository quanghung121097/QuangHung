//sự kiện đăng ký
document.getElementsByClassName('submit')[0].addEventListener('click',function(){
	//kiểm tra tên
	var name=document.getElementsByClassName('name')[0].value;
	if (name.match(nameno)) {
		document.getElementsByClassName('check_name')[0].innerHTML=""
	} else {
		document.getElementsByClassName('check_name')[0].innerHTML="Tên gồm [a-z] & có 8 ký tự trở lên "
	}
	//kiểm tra Email
	var email=document.getElementsByClassName('email')[0].value;
	if (validateEmail(email)) {
		document.getElementsByClassName('check_email')[0].innerHTML=""
	} else {
		document.getElementsByClassName('check_email')[0].innerHTML="Sai định dạng Email"
	}
	//kiểm tra sđt
	var phone = document.getElementsByClassName('phone')[0].value;
		if(phone.match(phoneno)){
			document.getElementsByClassName('check_phone')[0].innerHTML="";
		}else{
			document.getElementsByClassName('check_phone')[0].innerHTML="Sai định dạng số điện thoại";
		}
	//kiểm tra password
	var pass= document.getElementsByClassName('pass')[0].value;
		if(pass.match(passno)){
			document.getElementsByClassName('check_pass')[0].innerHTML="";
		}else{
			document.getElementsByClassName('check_pass')[0].innerHTML="Phải có ít nhất 1 số, 1 chữ hoa, thường, 8 ký tự";
		}
	//kiểm tra checkpass
	var pass1=document.getElementsByClassName('pass1')[0].value;
		if (pass==pass1) {
			document.getElementsByClassName('check_pass1')[0].innerHTML="";
		} else {
			document.getElementsByClassName('check_pass1')[0].innerHTML="Không giống với pass đã nhập";
		}
		if (pass1=="") {
			document.getElementsByClassName('check_pass1')[0].innerHTML="Chưa nhập mật khẩu";
		}
	//kiểm tra giới tính
	var nam=document.getElementById('nam').checked;
	var nu=document.getElementById('nu').checked;
		if (nam==true||nu==true) {
			document.getElementsByClassName('check_gt')[0].innerHTML="";
		} else {
			document.getElementsByClassName('check_gt')[0].innerHTML="Chưa chọn giới tính";
		}
	// Thông báo nhập đủ thông tin
	if(name!==""&&validateEmail(email)&&phone.match(phoneno)&&pass.match(passno)&&pass==pass1&&(nam==true||nu==true)){
		alert('bạn đã nhập đúng và đủ thông tin');

	}
})
// check_name
 var nameno=/[A-Za-z]{8,}/
// check_pass
var passno = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
// check_sđt
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// check_email
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// sự kiện xóa tất cả
document.getElementsByClassName('reset')[0].addEventListener('click',function(){
	document.getElementsByClassName('name')[0].value='';
	document.getElementsByClassName('email')[0].value='';
	document.getElementsByClassName('phone')[0].value='';
	document.getElementsByClassName('pass')[0].value='';
	document.getElementsByClassName('pass1')[0].value='';
	document.getElementById('nam').checked=false;
	document.getElementById('nu').checked=false;
})
