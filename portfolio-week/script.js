let nav = document.querySelector("nav");
let backtotop = document.querySelector("#backtotop");
let logo = document.querySelector(".logo");
let ul = document.querySelector("ul");

window.onscroll = function () {
  scrollFunction(), toTopFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    nav.classList.add("bg");
  } else {
    nav.classList.remove("bg");
  }
}

function move() {
  var elem = document.getElementsByClassName("progress");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 95) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      document.getElementsByClassName("text-bar").innerHTML = width * 1 + "%";
    }
  }
}
window.addEventListener("click", move);

/* const setNavbackground = () => {
  console.log("hello");

  nav.style.background = "rgba(146, 45, 114, 0.3)";
  nav.style.position = "fixed";
  nav.style.top = "0";
  nav.style.right = "0";
  nav.style.left = "0";
  nav.style.height = "115px";
  logo.style.margin = "20px";
  logo.style.width = "100px";
  ul.style.margin = "50px 0 0 0";
};

const backToTop = () => {
  window.scrollTo(0, 0);
};

window.addEventListener("scroll", setNavbackground);

backtotop.addEventListener("click", backToTop); */
let mybutton = document.querySelector("#backtotop");

function toTopFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click", topFunction);
