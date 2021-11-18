"use strict";

const consultFormBtn = document.querySelector(".js-moreInfo");
const consultSection = document.querySelector(".js-forScroll");

consultFormBtn.addEventListener('click', handleConsultForm)

function handleConsultForm() {
    document.documentElement.scrollTo({
        top: consultSection.offsetTop,
        behavior: "smooth",
    });
}
