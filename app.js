document.querySelector(".menu_bar").addEventListener("click", function () {
  document.querySelector(".menu_overlay").classList.add("active");
});

document.querySelector(".close_menu").addEventListener("click", function () {
  document.querySelector(".menu_overlay").classList.remove("active");
});
