$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn i").toggleClass("fa-bars fa-x");
  });

  $("#mobile_nav_list .nav-item a").on("click", function () {
    $("#mobile_menu").removeClass("active");
    $("#mobile_btn i").removeClass("fa-x").addClass("fa-bars");
  });

  const sections = $("section");
  const navItems = $("#nav_list .nav-item");

  $(window).on("scroll", function () {
    let currentSection = "";

    sections.each(function () {
      const sectionTop = $(this).offset().top - 120;
      if ($(window).scrollTop() >= sectionTop) {
        currentSection = $(this).attr("id");
      }
    });

    navItems.each(function () {
      $(this).removeClass("active");
      if ($(this).find("a").attr("href") === "#" + currentSection) {
        $(this).addClass("active");
      }
    });
  });
});
