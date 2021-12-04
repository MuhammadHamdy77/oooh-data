let toggleNavbar = document.querySelector(".toggle-navbar"),
  navmobile = document.querySelector(".navmobile"),
  closeNavbar = document.querySelector(".close-navbar");

(toggleNavbar.onclick = () => {
  navmobile.classList.add("active");
}),
  (closeNavbar.onclick = () => {
    navmobile.classList.remove("active");
  }),

  $(".list-navbar ul li a").click(function (e) {
    $(".list-navbar ul li a").removeClass("active"),
      e.target.classList.add("active");
  }),
  $(".pagination_rounded ul li a").click(function (e) {
    e.preventDefault(),
      $(".pagination_rounded ul li a").removeClass("active"),
      e.target.classList.add("active");
  }),
  $(".countries-links .eg").click(function () {
    $(".acorrdion-egypt").fadeIn(500),
      $(".acorrdion-saudi").css({ display: "none" }),
      $(".acorrdion-uae").css({ display: "none" }),
      $(".acorrdion-leb").css({ display: "none" }),
      $(".countries-links li.eg").addClass("active"),
      $(".countries-links li.uae").removeClass("active"),
      $(".countries-links li.saudi").removeClass("active"),
      $(".countries-links li.leb").removeClass("active");
  }),
  $(".countries-links .saudi").click(function () {
    $(".acorrdion-saudi").fadeIn(500),
      $(".acorrdion-egypt").css({ display: "none" }),
      $(".acorrdion-uae").css({ display: "none" }),
      $(".acorrdion-leb").css({ display: "none" }),
      $(".countries-links li.saudi").addClass("active"),
      $(".countries-links li.eg").removeClass("active"),
      $(".countries-links li.leb").removeClass("active"),
      $(".countries-links li.leb").removeClass("active");
  }),
  $(".countries-links .leb").click(function () {
    $(".acorrdion-leb").fadeIn(500),
      $(".acorrdion-egypt").css({ display: "none" }),
      $(".acorrdion-uae").css({ display: "none" }),
      $(".acorrdion-saudi").css({ display: "none" }),
      $(".countries-links li.leb").addClass("active"),
      $(".countries-links li.eg").removeClass("active"),
      $(".countries-links li.saudi").removeClass("active"),
      $(".countries-links li.uae").removeClass("active");
  }),
  $(".countries-links .uae").click(function () {
    $(".acorrdion-uae").fadeIn(500),
      $(".acorrdion-egypt").css({ display: "none" }),
      $(".acorrdion-leb").css({ display: "none" }),
      $(".acorrdion-saudi").css({ display: "none" }),
      $(".countries-links li.uae").addClass("active"),
      $(".countries-links li.eg").removeClass("active"),
      $(".countries-links li.saudi").removeClass("active"),
      $(".countries-links li.leb").removeClass("active");
  });
var swiper = new Swiper(".mySwiper", {
  loop: !0,
  autoplay: { delay: 9500, disableOnInteraction: !1 },
  pagination: { el: ".swiper-pagination" },
  scrollbar: { el: ".swiper-scrollbar", hide: !0 },
});
$(".buttons-change button").click(function (e) {
  $(".buttons-change button").removeClass("active"),
    e.target.classList.add("active");
}),
  $(".btn-acc-one").click(function (e) {
    $(".content-acoordion").removeClass("active"),
      $(".acc-one").addClass("active");
  }),
  $(".btn-acc-two").click(function (e) {
    $(".content-acoordion").removeClass("active"),
      $(".acc-two").addClass("active");
  }),
  $(".btn-acc-three").click(function (e) {
    $(".content-acoordion").removeClass("active"),
      $(".acc-three").addClass("active");
  });
(swiper = new Swiper(".slider-reports", {
  mousewheelControl: !0,
  autoplay: !0,
  slidesPerView: 7,
  breakpoints: {
    0: { slidesPerView: 4 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 7 },
  },
  spaceBetween: 10,
  loop: !0,
  loopFillGroupWithBlank: !0,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
})),
  (swiper = new Swiper(".sliders-testimonials", {
    mousewheelControl: !0,
    pagination: { el: ".swiper-pagination" },
    autoplay: !0,
    slidesPerView: 3,
    breakpoints: {
      0: { slidesPerView: 1 },
      530: { slidesPerView: 2 },
      600: { slidesPerView: 2 },
      769: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
    },
    spaceBetween: 20,
    loop: !0,
    loopFillGroupWithBlank: !0,
  }));
$(".years-pollets span").click(function (e) {
  $(".years-pollets span").removeClass("active"),
    e.target.classList.add("active");
}),
  $(".years-pollets .y2015").click(function (e) {
    $(".years-charc span").removeClass("active"),
      $(".years-charc .chac2015").addClass("active"),
      $(".abouts-sliders-years .content-slider").removeClass("active"),
      $(".abouts-sliders-years .cont-2015").addClass("active");
  }),
  $(".years-pollets .y2016").click(function (e) {
    $(".years-charc span").removeClass("active"),
      $(".years-charc .chac2016").addClass("active"),
      $(".abouts-sliders-years .content-slider").removeClass("active"),
      $(".abouts-sliders-years .cont-2016").addClass("active");
  }),
  $(".years-pollets .y2017").click(function (e) {
    $(".years-charc span").removeClass("active"),
      $(".years-charc .chac2017").addClass("active"),
      $(".abouts-sliders-years .content-slider").removeClass("active"),
      $(".abouts-sliders-years .cont-2017").addClass("active");
  }),
  $(".years-pollets .y2018").click(function (e) {
    $(".years-charc span").removeClass("active"),
      $(".years-charc .chac2018").addClass("active"),
      $(".abouts-sliders-years .content-slider").removeClass("active"),
      $(".abouts-sliders-years .cont-2018").addClass("active");
  }),
  $(".years-pollets .y2019").click(function (e) {
    $(".years-charc span").removeClass("active"),
      $(".years-charc .chac2019").addClass("active"),
      $(".abouts-sliders-years .content-slider").removeClass("active"),
      $(".abouts-sliders-years .cont-2019").addClass("active");
  }),
  $(".years-pollets .y2020").click(function (e) {
    $(".years-charc span").removeClass("active"),
      $(".years-charc .chac2020").addClass("active"),
      $(".abouts-sliders-years .content-slider").removeClass("active"),
      $(".abouts-sliders-years .cont-2020").addClass("active");
  }),



  $(".drop-list-toggle").click(function (e) {
    $(".dropdown-roles").toggleClass("active");
  });

