let burgerMenu = document.querySelector("#burger-menu");
let burgerAfterBTN = document.querySelector("#burger-menuAfter");
let widthWindow = window.screen.width;
let burgerAfter = document.querySelector("#burgerAfter");
burgerAfter.style = "right:-130%";

burgerMenu.addEventListener("click", () => {
  let burgerAfter = document.querySelector("#burgerAfter");
  if (window.innerWidth > 576) {
    burgerAfter.style = "right:-80%";
    burgerMenu.style = "transform: translateX(1600%);";
    document.body.style.overflow = "hidden";
  }
  if (window.innerWidth <= 576) {
    burgerAfter.style = `position: fixed; top:0px;left:0px; width:${widthWindow}px;height:100%;oveflow:hidden;`;
    burgerMenu.style = "transform: translateX(200%);";
    document.body.style.overflow = "hidden";
  }
});

burgerAfterBTN.addEventListener("click", () => {
  let burgerAfter = document.querySelector("#burgerAfter");
  if (window.innerWidth > 576) {
    burgerAfter.style = "right:-130%";
    burgerMenu.style = "transform: translateX(0%);";
    document.body.style.overflow = "";
  }
  if (window.innerWidth <= 576) {
    burgerAfter.style = `position: fixed; top:0px;left:100%; width:${widthWindow}px;`;
    burgerMenu.style = "transform: translateX(0%);";
    document.body.style.overflow = "";
  }
});
