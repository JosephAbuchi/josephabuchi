const clickFeature = document.querySelector(".icon");
const clickCompany = document.querySelector(".icon-click");
const faChavronDown = document.querySelector(".fa-solid");

clickFeature.addEventListener("click", function () {
  document.querySelector(".toggle-bar1").style.display = "block";
  document.querySelector(".fa-chevron-down").style.display = "none";
  document.querySelector(".fa-chevron-up").style.display = "block";
});

clickCompany.addEventListener("click", function () {
  document.querySelector(".toggle-bar2").style.display = "block";
});
