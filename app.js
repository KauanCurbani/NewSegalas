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
var map = document.getElementById('map')

/* Header scroll */
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 600);
  });
  

/* Customize cursor function */

function cursorMouseMove(event) {
  let locationX = event.pageX;
  let locationY = event.pageY;

  cursor.style.top = locationY + "px";
  cursor.style.left = locationX + "px";
}
document.addEventListener("mousemove", cursorMouseMove);
window.addEventListener("scroll", cursorMouseMove)
document.addEventListener("click", function (event) {
  let locationY = event.pageY;
  console.log(locationY);
});



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
  imgBox.style.width = value * 0.65 + "px";
  imgBoxCatalogo.style.width = value * 0.3 + "px";
  map.style.width = value * 0.3 + 'px'
});

document.addEventListener('mousemove', function(e){
    var mock = document.getElementById('mock')
    const speed = -2

    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerHeight -  e.pageY*speed)/100
                                        
                                        
    mock.style.transform=`translateX(${x}px) translateY(${y}px)`
})

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
