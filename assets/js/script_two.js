
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const navbar = document.getElementById("navbar1");

  if (scrollTop > 15) {
    navbar.style.background = "rgba(0, 0, 0, 0.8)";
    navbar.style.padding = "10px 0px";
    navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
    navbar.style.transition = "background 0.3s, padding 0.3s, box-shadow 0.3s";
  }
  else {
    navbar.style.background = "none";
    navbar.style.padding = "15px 0px";
    navbar.style.boxShadow = "none";
    navbar.style.transition = "background 0.3s, padding 0.3s, box-shadow 0.3s";
  }

  navbar.style.transition = "background 0.3s, padding 0.3s, box-shadow 0.3s";
}

// Highlight the active link based on current URL
window.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#myLinks .link");
  const currentPath = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (href === "index.html" && currentPath === "")) {
      link.classList.add("active-link");
    }

    // Also add click event to highlight when clicked
    link.addEventListener("click", function () {
      // Remove existing active class
      document.querySelectorAll("#myLinks .active-link").forEach(active => {
        active.classList.remove("active-link");
      });

      // Add active to the clicked link
      this.classList.add("active-link");
    });
  });
});


  
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.pointerEvents = "auto"; 
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.pointerEvents = "none"; 
  }
});