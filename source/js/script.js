var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});

var addtocart = document.querySelectorAll(".addtocart");
if (addtocart) {
  var modalcart = document.querySelector(".modal-cart");
  for (var i = 0; i < addtocart.length; i++) {
    addtocart[i].addEventListener("click", function (e) {
      e.preventDefault();
      modalcart.classList.add("show");
    });
  }
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    e.preventDefault();
    if (addtocart !== null) {
      if (modalcart.classList.contains("show")) {
        modalcart.classList.remove("show");
      }
    }
  }
});

svg4everybody();
