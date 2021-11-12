"use strict";
const btnFooter = document.querySelector(".js-footer_bar");
const asideFooterNav = document.querySelector(".js-footer_mobile");
const btnMobileFooter = document.querySelector(".js-mobile_footer_bar");

const openFooterNav = (e) => {
  btnFooter.style.display = "none";
  btnFooter.style.transition = "0.5s linear";

  asideFooterNav.style.transform = "translateX(0)";
  asideFooterNav.style.opacity = 1;

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

const closeFooterNav = (e) => {
  btnFooter.style.display = "block";
  asideFooterNav.style.transform = "translateX(100%)";
  asideFooterNav.style.opacity = 0;
  document.body.style.overflow = "";
};

//footer aside nav
btnFooter.addEventListener("click", openFooterNav);
btnMobileFooter.addEventListener("click", closeFooterNav);
