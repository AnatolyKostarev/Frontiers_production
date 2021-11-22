"use strict";

const investorLink = document.querySelector(".js-investor");
const entrepreneurLink = document.querySelector(".js-entrepreneur");
const entrepreneurList = document.querySelector(".js-entrepreneurServiceList");
const investorList = document.querySelector(".js-investorServiceList");
const searchForm = document.querySelector(".js-news-form");
const searchInput = document.querySelector(".js-news-search");
const copyRight = document.querySelector(".js-copyright");
const currentYear = new Date().getFullYear();

const showInvestor = (e) => {
  e.preventDefault();
  investorList.style.transform = "translateX(0)";
  entrepreneurList.style.transform = "translateX(100%)";

  if (window.innerWidth >= 769 && window.innerWidth <= 1439) {
    investorList.style.transform = "translateX(0)";
    entrepreneurList.style.transform = "translate3d(130%, -137%, 0)";
  }
};

const shownEtrepreneur = (e) => {
  console.log(investorLink);
  e.preventDefault();
  investorList.style.transform = "translateX(-200%)";
  entrepreneurList.style.transform = "translateX(-100%)";

  if (window.innerWidth >= 769 && window.innerWidth <= 1439) {
    investorList.style.transform = "translateX(-200%)";
    entrepreneurList.style.transform = "translate3d(0, -137%, 0)";
  }
};

investorLink.addEventListener("click", showInvestor);
entrepreneurLink.addEventListener("click", shownEtrepreneur);

copyRight.innerHTML = `&copy; <strong>Frontiers</strong> ${currentYear}. Все права защищены`;
// создаем массив
// let searchArr = [];

// подписываемся на форму
// searchForm.addEventListener("submit", (e) => {
// предотвращаем отправку формы
// e.preventDefault();
// добавляем в массив значения введенные пользователем
// searchArr.push(searchInput.value);
// очищаем поле input после ввода значения
// searchInput.value = "";
// передаем в localStorage массив в формате JSON, так как данные хранятся в виде строки
// localStorage.setItem("userData", JSON.stringify(searchArr));
// в константу кладем массив, полученный из localStorage в формате строки и распарсенный в массив
// const data = JSON.parse(localStorage.getItem("userData"));

//далее используем массив
// console.log(data);
// });
