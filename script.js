const navRes = document.getElementById("nav-res");
const navLinks = document.querySelector(".nav-links");
const navLogin = document.querySelector(".nav-login");
const navAdmin = document.querySelector(".nav-admin");

function navResponsive() {
  if (navRes.checked == true) {
    navLinks.classList.add("nav-muncul");
    if (navLogin == null) {
      navAdmin.classList.add("nav-muncul");
    } else {
      navLogin.classList.add("nav-muncul");
    }
  } else {
    navLinks.classList.remove("nav-muncul");
    if (navLogin == null) {
      navAdmin.classList.remove("nav-muncul");
    } else {
      navLogin.classList.remove("nav-muncul");
    }
  }
}

// =====

const lokerBanyak = document.querySelector(".loker-banyak span");
const loker = document.querySelectorAll(".loker");
const lokerMoreTitle = document.querySelector(".loker-more-title span");

lokerBanyak.textContent = loker.length;
lokerMoreTitle.textContent = loker.length;

// =====
function cariLoker() {
  const lokerInput = document.querySelector(".loker-input");
  const lokerFilter = lokerInput.value.toUpperCase();
  const lokerList = document.querySelector(".loker-list");

  for (let i = 0; i < loker.length; i++) {
    const lokerTitle = loker[i].querySelectorAll(".loker-title")[0];
    const lokerText = lokerTitle.textContent || lokerTitle.innerText;
    if (lokerText.toUpperCase().indexOf(lokerFilter) > -1) {
      loker[i].style.display = "block";
    } else {
      loker[i].style.display = "none";
    }
  }
}

// =====

const copyYear = document.querySelector(".copyright span");
copyYear.innerText = new Date().getFullYear();

// =====

function login(event) {
  const loginUsername = document.querySelector("#login-u-input");
  const loginPassword = document.querySelector("#login-p-input");
  const loginError = document.querySelector(".login-error");
  const loginButton = document.querySelector(".login-btn");

  event.preventDefault();

  if (loginUsername.value == "admin" && loginPassword.value == "admin") {
    location.href = "./admin.html";
  } else {
    loginError.style.display = "block";
  }
}

// =====

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
  let currentPage = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 10) {
      currentPage = section.getAttribute("id");
    }
  });

  links.forEach((a) => {
    a.classList.remove("nav-active");
    if (a.classList.contains(currentPage)) {
      a.classList.add("nav-active");
    }
  });
});
