
$(function (){ 

  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js_header").addClass("headerColorScroll");
    } else {
      $(".js_header").removeClass("headerColorScroll");
    }
  });

  $(".openbtn").click(function () {
    $(this).toggleClass("active");
    $("nav").slideToggle(300);
  });
});

$(window).on("load resize", function () {
  if ($(".openbtn").hasClass("active")) {
    $(this).removeClass("active");
    $("nav").hide();
  }
})