let nav = document.querySelector(".navigation");
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

/*Mobile menu*/
let mobilebutton = document.getElementById("mobilebutton");
let mobmen = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");
const mobMenu = () => {
  mobmen.classList.toggle("responsive");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
};

mobilebutton.addEventListener("click", mobMenu);
