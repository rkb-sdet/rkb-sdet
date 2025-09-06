// Grab elements
const hamburger = document.getElementById("hamburger"); // no '#'
const navList = document.querySelector(".navbar-list");

// Guard in case elements aren't found on some pages
if (hamburger && navList) {
  hamburger.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
  });
}

// Hero section animations
window.addEventListener("DOMContentLoaded", () => {
  const heroElements = document.querySelectorAll(
    ".hero-content, .hero-image-container"
  );
  heroElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Example: fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});

// Blog Home Page: left navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("leftMenu");
  const toggleBtn = document.getElementById("sidebarToggle");

  toggleBtn.addEventListener("click", function () {
    const isActive = sidebar.classList.toggle("active");
    toggleBtn.setAttribute("aria-expanded", isActive);
  });

  // Close sidebar on outside click (optional)
  document.addEventListener("click", function (e) {
    if (
      !sidebar.contains(e.target) &&
      !toggleBtn.contains(e.target) &&
      sidebar.classList.contains("active")
    ) {
      sidebar.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", false);
    }
  });
});
