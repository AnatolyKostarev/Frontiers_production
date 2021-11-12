"use strict";

const $consultFormBtn = document.querySelector(".js-button-getConsult");
const $consultSection = document.querySelector("#consulting");

function handlConsultForm(event) {
  document.documentElement.scrollTo({
    top: $consultSection.offsetTop,
    behavior: "smooth",
  });
}

$consultFormBtn.addEventListener("click", handlConsultForm);
