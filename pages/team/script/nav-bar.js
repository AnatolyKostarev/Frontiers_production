let burgerMenu = document.querySelector("#burger-menu");
let burgerAfterBTN = document.querySelector("#burger-menuAfter");
let burgerAfter = document.querySelector("#burgerAfter");
burgerAfter.style = "right:-130%";



burgerMenu.addEventListener("click", () => {
  let burgerAfter = document.querySelector("#burgerAfter");
  if (window.innerWidth > 576) {
    burgerAfter.style = `right:-80%;`;
    burgerMenu.style = "transform: translateX(1600%);";
  }
  if(window.innerWidth <= 576){
    burgerAfter.style = "position:fixed; top:0px; left:0px; height:100%;"
    burgerMenu.style = "transform: translateX(500%);";
    document.querySelector('body').style="overflow: hidden;"
  }
});

burgerAfterBTN.addEventListener("click", () => {
  let burgerAfter = document.querySelector("#burgerAfter");
  if (window.innerWidth > 576) {
    burgerAfter.style = "right:-130%";
    burgerMenu.style = "transform: translateX(0%);";
  }
  if(window.innerWidth <= 576){
    burgerAfter.style = "position:fixed; top:0px; left:200%;";
    burgerMenu.style = "transform: translateX(0%);";
    document.querySelector('body').style="overflow: scroll;"
  }
});
