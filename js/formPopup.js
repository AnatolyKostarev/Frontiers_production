const modal = document.getElementsByClassName('js-popup-body')[0]

const submitBtn = document.getElementById('consulting-form__btn')

const modalInitialBtn = document.getElementsByClassName('js-consult')

Array.from(modalInitialBtn).forEach((item) => {
  item.onclick = () => {
    modal.style.display = 'flex'
    document.body.style.overflow = "hidden";
  }

})

modal.style.display = 'none'
modal.onclick = (evt) => {
  const flyoutElement = modal
  let targetElement = evt.target; // clicked element
  if (targetElement == flyoutElement) {
    modal.style.display = 'none'
    document.body.style.overflow = "";
    return;
  }
}
submitBtn.onclick = (evt) => {
  evt.preventDefault();
  const name = modal.querySelector('#consulting__name').value
  const phone = modal.querySelector('#consulting__phone').value
  const email = modal.querySelector('#consulting__email').value
  const comment = modal.querySelector('#consulting__comments').value

  const url = "/mailer/smart.php";
  fetch(url, {
    method : "POST",
    body: JSON.stringify({'user__name': name, 'user__phone': phone, 'user__email': email, 'user__message': comment}),
  }).then(() => {
    alert("Заявка успешно подана")
    modal.style.display = 'none'
  })
}



// "use strict";
// const $popup = document.querySelector(".js-popup-body");
// const $showPopup = document.getElementsByClassName("js-consult");
// const $closePopup = document.querySelector(".js-popup-close");
//
// function initPopup() {
//   Array.from($showPopup).forEach((item) => {
//     console.log('uh')
//     item.addEventListener("click", function () {
//       $popup.removeAttribute("hidden", "");
//       document.body.style.overflow = "hidden";
//     });
//   });
//
//   $closePopup.addEventListener("click", (e) => {
//     $popup.setAttribute("hidden", "");
//     document.body.style.overflow = "";
//   });
// }
//
// initPopup();