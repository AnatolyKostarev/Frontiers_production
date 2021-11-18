"use strict";
const $popup = document.querySelector(".js-popup-body");
const $showPopup = document.getElementsByClassName("js-consult");

function initPopup() {
  Array.from($showPopup).forEach((item) => {
    item.addEventListener("click", function () {
      $popup.removeAttribute("hidden", "");
      document.body.style.overflow = "hidden";
    });
  });

  $popup.onclick = (evt) => {
    const flyoutElement = $popup
    let targetElement = evt.target; // clicked element
    if (targetElement == flyoutElement) {
      $popup.setAttribute("hidden", "");
      document.body.style.overflow = "";
      return;
    }
  }


}

initPopup();
