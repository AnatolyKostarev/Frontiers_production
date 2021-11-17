"use strict";

const consultFormBtn = document.querySelectorAll(".js-moreInfo");
const consultSection = document.querySelectorAll(".js-forScroll");

Array.from(consultFormBtn).forEach((item)=> {
    item.addEventListener('click', handleConsultForm)
})

function handleConsultForm() {
    document.documentElement.scrollTo({
        top: consultSection.offsetTop,
        behavior: "smooth",
    });
}
