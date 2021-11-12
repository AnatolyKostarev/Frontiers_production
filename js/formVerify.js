"use strict";

const $name = document.querySelector(".js-form-name");
const $phone = document.querySelector(".js-form-phone");
const $email = document.querySelector(".js-form-email");

$name.addEventListener("input", () => {
  $name.setCustomValidity("");
  $name.checkValidity();
  $name.value.length >= 1 && $name.value.length < 2
    ? ($name.style.borderBottom = "1px solid rgba(243, 11, 11, 1)")
    : ($name.style.borderBottom = "1px solid rgba(249, 249, 249, 1)");
});

$name.addEventListener("invalid", () => {
  $name.value === ""
    ? $name.setCustomValidity("Введите Ваше имя!")
    : $name.setCustomValidity(
        "Имя должно состоять не менее, чем из 2-х символов!"
      );
});

$email.addEventListener("input", () => {
  $email.setCustomValidity("");
  $email.checkValidity();
  $email.value.length >= 1 && $email.value.length < 7
    ? ($email.style.borderBottom = "1px solid rgba(243, 11, 11, 1)")
    : ($email.style.borderBottom = "1px solid rgba(249, 249, 249, 1)");
});

$email.addEventListener("invalid", () => {
  $email.value === ""
    ? $email.setCustomValidity("Введите email в формате example@example.com!")
    : $email.setCustomValidity(
        "Email не соответствует формату example@example.com"
      );
});

// $phone.addEventListener("input", () => {
//   $phone.setCustomValidity("");
//   $phone.checkValidity();
//   $phone.value.length >= 1 && $phone.value.length < 12
//     ? ($phone.style.borderBottom = "1px solid rgba(243, 11, 11, 1)")
//     : ($phone.style.borderBottom = "1px solid rgba(249, 249, 249, 1)");
// });

// $phone.addEventListener("invalid", () => {
//   if ($phone.value === "") {
//     $phone.setCustomValidity(
//       "Введите номер телефона в формате +7 (___)___-__-__ !"
//     );
//   } else {
//     $phone.setCustomValidity(
//       "Номер телефона должен быть введен в формате +7 (___)___-__-__!"
//     );
//   }
// });
