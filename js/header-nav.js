"use strict";

const btnBar = document.querySelector(".js-bar");
const asideNav = document.querySelector(".js-main_mobile");
const btnMobile = document.querySelector(".js-mobile_bar");

const openTopNav = (e) => {
  btnBar.style.display = "none";
  btnBar.style.transition = "0.5s linear";

  asideNav.style.transform = "translateX(0)";
  asideNav.style.opacity = 1;

  if (window.innerWidth <= 992) {
    document.body.style.overflow = "hidden";
  }

  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else {
    // старый IE
    document.selection.empty();
  }
};

const closeTopNav = (e) => {
  btnBar.style.display = "block";
  asideNav.style.transform = "translateX(100%)";
  asideNav.style.opacity = 1;
  document.body.style.overflow = "";
};

//top aside nav
btnBar.addEventListener("click", openTopNav);
btnMobile.addEventListener("click", closeTopNav);
