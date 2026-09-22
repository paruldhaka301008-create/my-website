// NDA Wallah Website - Basic Functions

document.addEventListener("DOMContentLoaded", function () {

  // Page loading effect
  document.body.classList.add("loaded");

  // Smooth link handling
  const links = document.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      const href = link.getAttribute("href");

      if (href && href !== "#" && !href.startsWith("http")) {
        document.body.classList.remove("loaded");
      }
    });
  });

  // Admin button protection for prototype
  const adminButtons = document.querySelectorAll(".admin-btn");

  adminButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.location.href = "admin.html";
    });
  });

  // Current year in footer
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
