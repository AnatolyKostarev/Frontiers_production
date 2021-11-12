"use strict";

const $contactBtnTopNav = document.querySelector(".js-contacts-topNav");
const $contactTitle = document.querySelector(".js-main-title");
const $contactMain = document.querySelector(".js-main-contacts");

function toggleContacts(e) {
  $contactTitle.classList.toggle("active-titleContacts");
  $contactMain.classList.toggle("active-contacts");
}

$contactBtnTopNav.addEventListener("click", toggleContacts);
