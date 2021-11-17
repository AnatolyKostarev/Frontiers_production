$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "/mailer/smart.php",
      data: $(this).serialize(),
      cache: false,
    }).done(function () {
      $(this).find("input").val("");
      alert("Заявка успешно подана");
      $("#form").trigger("reset");
    });
    return false;
  });
});

// маска телефона
jQuery(function ($) {
  $("#consulting__phone").mask("+7 (999) 999-99-99");
});
