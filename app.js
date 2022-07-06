var cursor = document.getElementById("cursor-Icons");
var cursorIside = document.getElementById("cursorRotate");
var scrollbottomArea = document.getElementById("space-scrollbottom");
var bottomMouseIcon = document.getElementById("bottom-icon");
var eyeMouseIcon = document.getElementById("eye-icon");
var LinkMouseIcon = document.getElementById("link-icon");
var homeSect = document.getElementById("home");
var txtHome = document.getElementById("textHome");
var aboutSect = document.getElementById("about");
var imgBox = document.getElementById("img-box-about");
var imgBoxCatalogo = document.getElementById("img-box-catalogos");
var popupRed = document.getElementById("popup-red");
var popupBlue = document.getElementById("popup-blue");
var popupContentRed = document.getElementById("popup-red-content");
var popupContentBlue = document.getElementById("popup-blue-content");
var catalogoImgRed = document.getElementById("catalogo-img-red");
var catalogoImgBlue = document.getElementById("catalogo-img-blue");
var map = document.getElementById("map");
var toggle = document.getElementById("menu-toggle");
var nav = document.getElementById("nav");
var formButton = document.getElementById('form-button')





/* Customize cursor function */

/* function cursorMouseScroll(event) {
  var x = event.clientX; // Get the horizontal coordinate
  var y = event.clientY; // Get the vertical coordinate
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log(coor);
} */

function cursorMouseMove(event) {
  let locationX = event.pageX;
  let locationY = event.pageY;

  cursor.style.top = locationY + "px";
  cursor.style.left = locationX + "px";
  console.log(locationX);
}
document.addEventListener("mousemove", cursorMouseMove);
/* document.addEventListener("scroll", cursorMouseScroll); */
/* 
document.addEventListener("click", function (event) {
  let locationY = event.pageY;
  console.log(locationY);
}); */

/* Nav */
toggle.addEventListener("click", toggleFunc);
function toggleFunc() {
  toggle.classList.toggle("showMenu");
}

/* arrowDown Cursor */
scrollbottomArea.addEventListener("mouseenter", function () {
  bottomMouseIcon.style.opacity = 1;
  bottomMouseIcon.style.color = "#f4f5f9";
  console.log('t')
});
scrollbottomArea.addEventListener("mouseleave", function () {
  bottomMouseIcon.style.opacity = 0;
  bottomMouseIcon.style.color = "#e00203";
  console.log('a')
});
scrollbottomArea.addEventListener("click", function () {
  aboutSect.scrollIntoView({ behavior: "smooth" });
});

/* Eye Cursor */
catalogoImgRed.addEventListener("mouseenter", function () {
  eyeMouseIcon.style.opacity = 1;
});
catalogoImgRed.addEventListener("mouseleave", function () {
  eyeMouseIcon.style.opacity = 0;
});
catalogoImgBlue.addEventListener("mouseenter", function () {
  eyeMouseIcon.style.opacity = 1;
});
catalogoImgBlue.addEventListener("mouseleave", function () {
  eyeMouseIcon.style.opacity = 0;
});


/* link cursor */
formButton.addEventListener("mouseenter", function () {
  LinkMouseIcon.style.opacity = 1;
});
formButton.addEventListener("mouseleave", function () {
  LinkMouseIcon.style.opacity = 0;
});


/* Parallax Effect */
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  txtHome.style.top = value * 0.5 + "px";
});

document.addEventListener("mousemove", function (e) {
  var mock = document.getElementById("mock");
  const speed = -2;

  const x = (window.innerWidth - e.pageX * speed) / 100;
  const y = (window.innerHeight - e.pageY * speed) / 100;

  mock.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

/* Close and Open Pop-Up */
function popUpCloseRed() {
  popupContentRed.style.transform = "scale(0.3)";
  popupContentRed.style.opacity = 0;
  setTimeout(function () {
    popupRed.style.opacity = 0;
  }, 300);
  setTimeout(function () {
    popupRed.style.display = "none";
  }, 600);
}
function popUpOpenRed() {
  setTimeout(function () {
    popupRed.style.opacity = 1;
    popupContentRed.style.transform = "scale(1)";
    popupContentRed.style.opacity = 1;
  }, 300);
  popupRed.style.display = "flex";
}
function popUpCloseBlue() {
  popupContentBlue.style.transform = "scale(0.3)";
  popupContentBlue.style.opacity = 0;
  setTimeout(function () {
    popupBlue.style.opacity = 0;
  }, 300);
  setTimeout(function () {
    popupBlue.style.display = "none";
  }, 600);
}
function popUpOpenBlue() {
  setTimeout(function () {
    popupBlue.style.opacity = 1;
    popupContentBlue.style.transform = "scale(1)";
    popupContentBlue.style.opacity = 1;
  }, 300);
  popupBlue.style.display = "flex";
}
