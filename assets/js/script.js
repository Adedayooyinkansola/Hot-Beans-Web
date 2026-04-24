window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const navbar = document.getElementById("navbar");

  if (scrollTop > 100) {
    navbar.style.background = "rgba(0, 0, 0, 0.75)";
    navbar.style.padding = "10px 0px";
    navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
    navbar.style.transition = "background 0.3s, padding 0.3s, box-shadow 0.3s";
  } else if (scrollTop > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.3)";
    navbar.style.padding = "10px 0px";
    navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
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


// change color of the active link based on current URL
window.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#myLinks .link");
  const currentPath = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const href = link.getAttribute("href");
    
    if (href === currentPath || (href === "index.html" && currentPath === "")) {
      link.classList.add("active-link");
    }

    // also add click event to colored link when clicked
    link.addEventListener("click", function () {
      // remove active class that is existing 
      document
        .querySelectorAll("#myLinks .active-link")
        .forEach(active => active.classList.remove("active-link"));

      // add active to the link that is clicked
      this.classList.add("active-link");
    });
  });
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.pointerEvents = "auto"; // make button to be clickable
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.pointerEvents = "none"; // prevent clicking when btn is hidden
  }
});

// document.getElementById('menu-icon').addEventListener('click', function() {
//   const menubar =this.querySelector('i');
//   const menu = document.getElementById('myLinks');
//   const logo = document.getElementById('logo');
//   const text = document.getElementById('header-text');
//   // var menu_menu = document.getElementsByClassName('menu-menu');
//   var menubar_icon = document.getElementById('menu-icon');
//   menu.classList.toggle('active');

//   if(menu.classList.contains('active')) {
//     menubar.classList.replace('fa-bars', 'fa-times');
//     menu.style.display = 'block'
//     // logo.style.display = 'none';
//     // text.style.display = 'none';
//     // menubar_icon.style.position = 'absolute';
//     // menubar_icon.style.top = '0px';
//     // menubar_icon.style.right = '10px';
//   } else {
//     menubar.classList.replace('fa-times', 'fa-bars');
//     menu.style.display = 'none'
//     // logo.style.display = 'block';
//     // text.style.display = 'block';
//     // menubar_icon.style.position = 'relative';
//   }
// })

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("myLinks");
  const icon = menuIcon.querySelector("i");

  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
});

const job = document.getElementsByClassName("job-title");

for (let i = 0; i < job.length; i++) {
  job[i].addEventListener("click", function() {
    // Close all job-titles that are open first
    for (let j = 0; j < job.length; j++) {
      if (job[j] !== this) {
        job[j].classList.remove("active");
        job[j].nextElementSibling.style.maxHeight = null;
        
        const plus = job[j].querySelector('.plus');
        if(plus) {
          plus.classList.remove('fa-minus')
          plus.classList.add('fa-plus')
        }
      }
    }

    // show the panel that was clicked on/active
    this.classList.toggle("active");
    const specification = this.nextElementSibling;
    if (specification.style.maxHeight) {
      specification.style.maxHeight = null;

      const plus = this.querySelector('.plus');
      if (plus) {
        plus.classList.remove('fa-minus');
        plus.classList.add('fa-plus');
      }
    } else {
      specification.style.maxHeight = specification.scrollHeight + "px";

      const plus = this.querySelector('.plus');
      if (plus) {
        plus.classList.remove('fa-plus');
        plus.classList.add('fa-minus');
      }
    }
  });
}