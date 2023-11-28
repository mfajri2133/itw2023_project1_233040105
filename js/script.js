// Js untuk navbar saat scroll
document.addEventListener("scroll", function () {
     var sections = document.querySelectorAll("section");
     var navLinks = document.querySelectorAll(
          ".navbar-nav .nav-item .nav-link"
     );
     var margin = 500;

     sections.forEach(function (section, index) {
          var top = section.offsetTop - margin;

          var bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
               navLinks[index].classList.add("active");
          } else {
               navLinks[index].classList.remove("active");
          }
     });
});

window.onscroll = function () {
     var navbar = document.getElementById("navbarNavDropdown");
     if (navbar.classList.contains("show")) {
          navbar.classList.remove("show");
     }
};

document.body.addEventListener("click", closeDropdown);
