// Showing active page link active in the sidebar
$("#" + $("#main-nav").data("active-class")).toggleClass("active");

// Dashboard Collapse and Expand
$(".main-nav-dropdown-toggle").click(function () {
  $(this)
    .closest(".main-nav-dropdown")
    .toggleClass("show")
    .find(".main-nav-dropdown")
    .removeClass("show");
  $(this).parent().siblings().removeClass("show");
});

// Menu Toggle
$(".menu-toggle").click(function () {
  if (window.matchMedia("(max-width: 990px )").matches) {
    $(".main-nav").toggleClass("mobile-show");
  } else {
    $("body").toggleClass("main-compact");
  }
});
