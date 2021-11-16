let burgerMenu = document.querySelector("#burger-menu");
let burgerAfterBTN = document.querySelector("#burger-menuAfter");
 let widthWindow = window.innerWidth;

burgerMenu.addEventListener("click", () => {
  let burgerAfter = document.querySelector("#burgerAfter");
  if (window.innerWidth > 576) {
    burgerAfter.style = "right:-80%";
    burgerMenu.style = "transform: translateX(1600%);";
  }
  if (window.screen.width <= 576) {
    burgerAfter.style =`position: fixed; top:0px;left:0px; width:${window.screen.width}px;`;
    burgerMenu.style = "transform: translateX(300%);";
 document.querySelector('.block-slider-items>h2').style ="z-index:5;"
 document.querySelector('body').style="overflow: hidden;"
  }
});

burgerAfterBTN.addEventListener("click", () => {
  let burgerAfter = document.querySelector("#burgerAfter");
  if (window.innerWidth > 576) {
    burgerAfter.style = "right:-500%";
    burgerMenu.style = "transform: translateX(0%);";
  }
  if (window.screen.width <= 576) {
    burgerAfter.style =`position: fixed; top:0px;left:100%; width:${window.screen.width}px;`;
    burgerMenu.style = "transform: translateX(0%);";
    document.querySelector('.block-slider-items>h2').style ="z-index:100;"
    document.querySelector('body').style="overflow-y: scroll;"
  }
});


