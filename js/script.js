"use strict";

const investorLink = document.querySelector(".js-investor");
const entrepreneurLink = document.querySelector(".js-entrepreneur");
const entrepreneurList = document.querySelector(".js-entrepreneurServiceList");
const investorList = document.querySelector(".js-investorServiceList");

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
