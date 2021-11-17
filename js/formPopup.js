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

  $closePopup.addEventListener("click", () => {
    $popup.setAttribute("hidden", "");
    document.body.style.overflow = "";
  });
}

initPopup();
