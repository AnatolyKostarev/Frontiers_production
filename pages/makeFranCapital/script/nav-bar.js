let burgerMenu = document.querySelector("#burger-menu");
let burgerAfterBTN = document.querySelector("#burger-menuAfter");

burgerMenu.addEventListener("click", () => {
  let burgerAfter = document.querySelector("#burgerAfter");
  if (window.innerWidth > 576) {
    burgerAfter.style = "right:-80%";
    burgerMenu.style = "transform: translateX(1600%);";
  }
  if (window.innerWidth <= 576) {
    burgerAfter.style ="position: fixed; top: 0px; left:0px;text-align:left;"
    document.querySelector('body').style="overflow: hidden;"
    document.querySelector('.makeFran-main-items>h2').style="z-index:2;"
  }
});

burgerAfterBTN.addEventListener("click", () => {
  let burgerAfter = document.querySelector("#burgerAfter");
  if (window.innerWidth > 576) {
    burgerAfter.style = "right:-130%";
    burgerMenu.style = "transform: translateX(0%);";
  }
  if (window.innerWidth <= 576) {
    burgerAfter.style ="position: fixed; top: 0px; left:200%;"
    document.querySelector('body').style="overflow: scroll;"
    document.querySelector('.makeFran-main-items>h2').style="z-index:100;"
  }
});
