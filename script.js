let navbar = document.querySelector(".navbar");
let menubar_button = document.querySelector(".menubar-button");
//Setting visibility of Menubar button
if (menubar_button.style.visibility == "hidden") {
  navbar.style.visibility = "visible";
}

//Setting visibility of Navigation Bar
let menubar = function (button_value) {
  if (navbar.style.visibility == "hidden") {
    navbar.style.visibility = "visible";
  } else {
    navbar.style.visibility = "hidden";
  }
}
