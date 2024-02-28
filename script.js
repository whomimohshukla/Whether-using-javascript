const userTab = document.querySelector("[data-useWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const granAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".user-info-container");

let currentTab = userTab;
const API_KEY = "168771779c71f3d64106d8a88376808a";

currentTab.classList.add("current-tab");

function switchTab(clicked) {
  if (clicked != currentTab) {
    currentTab.classList.remove("current-tab")
    currentTab=clicked;
    currentTab.classList.add("current-tab")

    if (searchForm.classList.contains("active")) {
      
      
    }
  }
}

userTab.addEventListener("click", () => {
  //pass clicked tab as input parameter
  switchTab(userTab);
});

searchTab.addEventListener("click", function () {
  switchTab(searchTab)
});
