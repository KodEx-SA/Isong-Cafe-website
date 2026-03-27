new Swiper(".swiper-container", {
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  effect: "fade",
  fadeEffect: { crossFade: true },
  a11y: {
    enabled: true,
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
    paginationBulletMessage: "Go to slide {{index}}",
  },
});
const nav = document.getElementById("main-nav");
window.addEventListener(
  "scroll",
  () => nav.classList.toggle("scrolled", window.scrollY > 50),
  { passive: true },
);
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");
function updateActive() {
  let cur = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 110) cur = s.id;
  });
  navLinks.forEach((l) =>
    l.classList.toggle("active", l.getAttribute("href").slice(1) === cur),
  );
}
window.addEventListener("scroll", updateActive, { passive: true });
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
    document.getElementById("drawer-bg").classList.remove("open");
    document.getElementById("hamburger").classList.remove("open");
  });
});
const hamburger = document.getElementById("hamburger");
const drawerBg = document.getElementById("drawer-bg");
hamburger.addEventListener("click", () => {
  drawerBg.classList.toggle("open");
  hamburger.classList.toggle("open");
});
document.getElementById("drawer-close").addEventListener("click", () => {
  drawerBg.classList.remove("open");
  hamburger.classList.remove("open");
});
drawerBg.addEventListener("click", (e) => {
  if (e.target === drawerBg) {
    drawerBg.classList.remove("open");
    hamburger.classList.remove("open");
  }
});
const ro = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        ro.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));
document.querySelectorAll(".menu-filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category;
    document
      .querySelectorAll(".menu-filter")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".menu-card").forEach((card) => {
      card.style.display =
        cat === "all" || card.dataset.category === cat ? "" : "none";
    });
  });
});
const form = document.getElementById("booking-form");
if (form) {
  form.addEventListener("submit", (e) => {
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const party = document.getElementById("party");
    const today = new Date().toISOString().split("T")[0];
    const highlight = (el) => {
      el.style.borderColor = "#e53e3e";
      el.focus();
      setTimeout(() => (el.style.borderColor = ""), 2500);
    };
    if (date.value < today) {
      e.preventDefault();
      highlight(date);
      return;
    }
    const h = parseInt((time.value || "0:0").split(":")[0]);
    if (h < 10 || h >= 23) {
      e.preventDefault();
      highlight(time);
      return;
    }
    if (!party.value) {
      e.preventDefault();
      highlight(party);
      return;
    }
  });
}
