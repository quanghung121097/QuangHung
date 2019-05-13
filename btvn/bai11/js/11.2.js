// Ẩn tất cả .accordion
$("#content .accordion").hide();

// click vào thẻ h1
$("#content span").click(function(){
    // chọn .accordion (do nó sau h1 2 thẻ nên ta dùng .next().next())
  accordion = $(this).next().next()
  $('.span').html('<i class="fas fa-plus-square"></i>')
  // Kiểm tra nếu đang ẩn thì sẽ hiện và hien thi an các phần tử khác
  if (accordion.is(':hidden') === true) {
    $("#content .accordion").slideUp();
    accordion.slideDown();
    // nếu .accordion hiện thì + thành - 
    $(this).html('<i class="fas fa-minus-square"></i>')
  } else {
    accordion.slideUp();
     // nếu .accordion ẩn thì - thành + 
    $(this).html('<i class="fas fa-plus-square"></i>')
  }
});

/*Bài này trên trường thầy dạy rồi đừng bảo cop nhé, đấm đấy !!!!!*/