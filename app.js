var cursor = document.getElementById("cursorDiv");
var cursorIside = document.getElementById("cursorRotate");
var scrollbottomArea = document.getElementById("space-scrollbottom");
var bottomMouseIcon = document.getElementById("bottom-icon");
var eyeMouseIcon = document.getElementById("eye-icon");
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





/* Customize cursor function */

function cursorMouseScroll(event) {
  var x = event.clientX; // Get the horizontal coordinate
  var y = event.clientY; // Get the vertical coordinate
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log(coor);
}

function cursorMouseMove(event) {
  let locationX = event.pageX;
  let locationY = event.pageY;

  cursor.style.top = locationY + "px";
  cursor.style.left = locationX + "px";
}
document.addEventListener("mousemove", cursorMouseMove);
document.addEventListener("scroll", cursorMouseScroll);

document.addEventListener("click", function (event) {
  let locationY = event.pageY;
  console.log(locationY);
});

/* Nav */
toggle.addEventListener("click", function () {
  nav.style.display = "flex";

  setTimeout(function () {
    nav.style.opacity = 1;
  }, 100);
});

function closeNav() {
  nav.style.opacity = 0;

  setTimeout(function () {
    nav.style.display = "none";
  }, 300);
}

/* arrowDown Cursor */
scrollbottomArea.addEventListener("mouseenter", function () {
  bottomMouseIcon.style.opacity = 1;
  bottomMouseIcon.style.color = "#f4f5f9";
});
scrollbottomArea.addEventListener("mouseleave", function () {
  bottomMouseIcon.style.opacity = 0;
  bottomMouseIcon.style.color = "#e00203";
});
scrollbottomArea.addEventListener("click", function () {
  aboutSect.scrollIntoView({ behavior: "smooth" });
});

/* Eye Cursor */
catalogoImgRed.addEventListener("mouseenter", function () {
  eyeMouseIcon.style.opacity = 1;
  cursorIside.style.border = "0.2em dashed rgba(255,255,255,0.7)";
});
catalogoImgRed.addEventListener("mouseleave", function () {
  eyeMouseIcon.style.opacity = 0;
  cursorIside.style.border = "0.2em dashed rgba(0,0,0,0.7)";
});
catalogoImgBlue.addEventListener("mouseenter", function () {
  eyeMouseIcon.style.opacity = 1;
  cursorIside.style.border = "0.2em dashed rgba(255,255,255,0.7)";
});
catalogoImgBlue.addEventListener("mouseleave", function () {
  eyeMouseIcon.style.opacity = 0;
  cursorIside.style.border = "0.2em dashed rgba(0,0,0,0.7)";
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
