"use strict";
const $popup = document.querySelector(".js-popup-body");
const $showPopup = document.getElementsByClassName("js-consult");
const $closePopup = document.querySelector(".js-popup-close");

function initPopup() {
  Array.from($showPopup).forEach((item) => {
    item.addEventListener("click", function () {
      $popup.removeAttribute("hidden", "");
      document.body.style.overflow = "hidden";
    });
  });

  $closePopup.addEventListener("click", (e) => {
    $popup.setAttribute("hidden", "");
    document.body.style.overflow = "";
  });
}

initPopup();
// const createPopup = function () {
//   const popupBody = document.createElement("div");
//   popupBody.classList.add("popup-body");
//   document.body.append(popupBody);

//   const popupWrapper = document.createElement("div");
//   popupWrapper.classList.add("popup-wrapper");
//   popupBody.append(popupWrapper);

//   const container = document.createElement("div");
//   container.classList.add("container");
//   popupWrapper.append(container);

//   const consultingTitle = document.createElement("h2");
//   consultingTitle.classList.add("consulting__title");
//   consultingTitle.innerText = "Консультация";
//   container.append(consultingTitle);

//   const consultingSubtitle = document.createElement("p");
//   consultingSubtitle.classList.add("consulting__subtitle");
//   consultingSubtitle.innerText =
//     "Если у Вас остались вопросы, мы с радостью на них ответим.\n";
//   container.append(consultingSubtitle);

//   const consultingForm = document.createElement("form");
//   consultingForm.classList.add("consulting__form");
//   consultingForm.id = "form";
//   consultingForm.action = "/mailer/smart.php";
//   consultingForm.method = "POST";
//   container.append(consultingForm);

//   const name = document.createElement("input");
//   name.classList.add("consulting__name", "js-form-name");
//   name.type = "text";
//   name.id = "consulting__name";
//   name.placeholder = "Имя";
//   name.autocomplete = "off";
//   name.minlength = "2";
//   name.maxlength = "25";
//   name.pattern = "^[а-яА-ЯёЁa-zA-Z0-9 ]+$";
//   name.required = true;
//   consultingForm.append(name);

//   const phone = document.createElement("input");
//   phone.classList.add("consulting__name");
//   phone.id = "consulting__phone";
//   phone.type = "tel";
//   phone.name = "user__phone";
//   phone.placeholder = "Телефон";
//   phone.autocomplete = "off";
//   phone.minlength = "10";
//   phone.maxlength = "17";
//   phone.required = true;
//   consultingForm.append(phone);

//   const email = document.createElement("input");
//   email.classList.add("consulting__name");
//   email.type = "email";
//   email.name = "user__email";
//   email.placeholder = "Email";
//   email.autocomplete = "off";
//   email.minlength = "7";
//   email.maxlength = "50";
//   email.pattern = "([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})";
//   consultingForm.append(email);

//   const label = document.createElement("label");
//   label.classList.add("form-label");
//   label.setAttribute("for", "consulting__comments");
//   label.innerText = "Комментарий (не обязательно)";
//   consultingForm.append(label);

//   const comments = document.createElement("input");
//   comments.classList.add("consulting__name");
//   comments.id = "consulting__comments";
//   comments.type = "text";
//   comments.name = "user__message";
//   comments.autocomplete = "off";
//   comments.maxlength = "150";
//   consultingForm.append(comments);

//   const buttonSubmit = document.createElement("button");
//   buttonSubmit.classList.add("button-submit");
//   buttonSubmit.type = "submit";
//   buttonSubmit.innerText = "Получить консультацию\n";
//   consultingForm.append(buttonSubmit);

//   const closePopupButton = document.createElement("div");
//   closePopupButton.classList.add("closePopupButton");
//   popupBody.append(closePopupButton);

//   closePopupButton.addEventListener("click", function () {
//     popupBody.remove();
//     document.body.style.overflow = "";
//   });
// };
