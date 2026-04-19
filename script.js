// === SCROLL FADE-IN ANIMATION ===
const revealElements = document.querySelectorAll("section, .col-md-3, .col-md-5");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// === HERO PARALLAX EFFECT ===
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  if (hero) {
    hero.style.backgroundPositionY = offset * 0.5 + "px";
  }
});


// === SMOOTH SCROLL (kalau nanti pakai navbar link) ===
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// FORM SUBMIT (demo only)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (demo)");
});

const buttons = document.querySelectorAll(".btn-shop");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Item added to cart 🛒 (demo)");
  });
});