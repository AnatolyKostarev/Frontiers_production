"use strict";

const $consultFormBtn = document.querySelector(".js-moreInfo");
const $consultSection = document.querySelector("#scrollTo");

function handlConsultForm() {
    document.documentElement.scrollTo({
        top: $consultSection.offsetTop,
        behavior: "smooth",
    });
}

$consultFormBtn.addEventListener("click", handlConsultForm);