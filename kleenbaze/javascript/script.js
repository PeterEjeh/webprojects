window.addEventListener("scroll", function () {
  if (window.innerWidth > 900) {
    const header = document.querySelector("header");
    const headerContainer = header.querySelector(".container");
    const heroSection = document.getElementById("home");
    const heroRect = heroSection.getBoundingClientRect();
    // Show header when at the top of the page or when hero is not in view
    if (
      window.scrollY === 0 ||
      heroRect.bottom <= 0 ||
      heroRect.top >= window.innerHeight
    ) {
      header.style.transform = "translateY(0)";
      header.style.transition = "transform 1.6s, background 0.4s";
      header.style.background = "rgba(1, 24, 48, 0.85)";
      headerContainer.style.opacity = "1";
      headerContainer.style.pointerEvents = "auto";
    } else {
      header.style.transform = "translateY(-100%)";
      header.style.transition = "transform 0.7s, background 0.4s";
      header.style.background = "rgba(1, 24, 48, 0.85)";
      headerContainer.style.opacity = "0";
      headerContainer.style.pointerEvents = "none";
    }
  } else {
    // Always show header on mobile
    const header = document.querySelector("header");
    const headerContainer = header.querySelector(".container");
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
    header.style.pointerEvents = "auto";
  }
});

// Hamburger menu for mobile drawer
const toggle = document.getElementById("navbar-toggle");
const drawer = document.getElementById("mobile-drawer");
const backdrop = document.getElementById("drawer-backdrop");
const drawerClose = document.getElementById("drawer-close");
const hamburger = document.getElementById("hamburger");

if (toggle && drawer && backdrop && drawerClose) {
  toggle.addEventListener("click", () => {
    drawer.classList.add("active");
    backdrop.classList.add("active");
  });
  drawerClose.addEventListener("click", () => {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
  });
  backdrop.addEventListener("click", () => {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
  });
}

// Sidebar functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const sidebarLinks = sidebar.querySelectorAll("a");

  hamburger.addEventListener("click", function () {
    sidebar.classList.add("open");
    overlay.style.display = "block";
    hamburger.classList.add("hide");
    hamburger.setAttribute("aria-expanded", "true");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
    hamburger.classList.remove("hide");
    hamburger.setAttribute("aria-expanded", "false");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
    hamburger.classList.remove("hide");
    hamburger.setAttribute("aria-expanded", "false");
  });

  // Close sidebar when any sidebar link is clicked
  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      sidebar.classList.remove("open");
      overlay.style.display = "none";
      hamburger.classList.remove("hide");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
});
