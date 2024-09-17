"use strict";

/*--
        Header Sticky
    -----------------------------------*/

// window.onscroll = function () {
//   const left = document.getElementById("header");

//   if (left.scrollTop > 50 || self.pageYOffset > 50) {
//     left.classList.add("sticky");
//   } else {
//     left.classList.remove("sticky");
//   }
// };
window.onscroll = function () {
  const headerTop = document.getElementsByClassName("header_top")[0];

  if (headerTop.scrollTop > 100 || window.pageYOffset > 100) {
    headerTop.classList.add("sticky");
  } else {
    headerTop.classList.remove("sticky");
  }
};

/*--
        Menu parent Element Icon
    -----------------------------------*/
const $subMenu = document.querySelectorAll(".sub-menu");
$subMenu.forEach(function (subMenu) {
  const menuExpand = document.createElement("span");
  menuExpand.classList.add("menu-icon");
  // menuExpand.innerHTML = '+'
  subMenu.parentElement.insertBefore(menuExpand, subMenu);
  if (subMenu.classList.contains("mega-menu")) {
    subMenu.classList.remove("mega-menu");
    subMenu.querySelectorAll("ul").forEach(function (ul) {
      ul.classList.add("sub-menu");
      const menuExpand = document.createElement("span");
      menuExpand.classList.add("menu-icon");
      menuExpand.innerHTML = "+";
      ul.parentElement.insertBefore(menuExpand, ul);
    });
  }
});

/*--
        Search Js
    -----------------------------------*/
var $searchWrap = $(".search-wrap");
var $navSearch = $(".search-btn");
var $searchClose = $("#search-close");

$(".search-btn").on("click", function (e) {
  e.preventDefault();
  $searchWrap.animate({ opacity: "toggle" }, 500);
  $navSearch.add($searchClose).addClass("open");
});

$(".search-close").on("click", function (e) {
  e.preventDefault();
  $searchWrap.animate({ opacity: "toggle" }, 500);
  $navSearch.add($searchClose).removeClass("open");
});

function closeSearch() {
  $searchWrap.fadeOut(200);
  $navSearch.add($searchClose).removeClass("open");
}

$(document.body).on("click", function (e) {
  closeSearch();
});

$(".search-btn, .main-search-input").on("click", function (e) {
  e.stopPropagation();
});

/*--
        Mobile Menu
    -----------------------------------*/

/* Get Sibling */
const getSiblings = function (elem) {
  const siblings = [];
  let sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/* Slide Up */
const slideUp = (target, time) => {
  const duration = time ? time : 500;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/* Slide Down */
const slideDown = (target, time) => {
  const duration = time ? time : 500;
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/* Slide Toggle */
const slideToggle = (target, time) => {
  const duration = time ? time : 500;
  if (window.getComputedStyle(target).display === "none") {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

// swiper slider for hero
var swiper = new Swiper(".swiper-hero", {
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  autoplay: false,
  on: {
    slideChange: function () {
      var activeSlide = this.slides[this.activeIndex];
      var animatedText = activeSlide.querySelector(".text-animation");
      animatedText.classList.remove("animate__fadeInUp");
      void animatedText.offsetWidth;
      animatedText.classList.add("animate__fadeInUp");
    },
  },
});

// login form

$(document).ready(function () {
  // alert('dfgrfg')
  $(".open_sign").click(function (event) {
    event.stopPropagation();
    $(".login_card").slideToggle();
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".login_card").length &&
      !$(event.target).is(".login_card")
    ) {
      $(".login_card").slideUp();
    }
  });

  $("#mob_search").click(function (e) {
    e.stopPropagation();
    $(".mob_search").slideToggle();
    $(".backDrop").removeClass("d-none");
  });

  $(".close_btn").click(function () {
    $(".mob_search").slideUp();
    $(".backDrop").addClass("d-none");
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".mob_search").length &&
      !$(event.target).is(".mob_search")
    ) {
      $(".mob_search").slideUp();
      $(".backDrop").addClass("d-none");
    }
  });
});

// product slider
$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    centeredSlides: true,
    navigation: false,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: false,
    thumbs: {
      swiper: swiper,
    },
  });
});

$(document).ready(function () {
  $(function () {
    $(".accordion__content").hide();

    $(".accordion__title").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $accordionItem = $this.closest(".accordion__item");
      var $siblings = $accordionItem.siblings();
      var $accordionArrow = $this.find(".accordion__arrow");

      if (!$this.hasClass("accordion-active")) {
        $(".accordion__content", $siblings).slideUp(400);
        $(".accordion__title", $siblings).removeClass("accordion-active");
        $(".accordion__arrow", $siblings)
          .removeClass("fa-minus")
          .addClass("fa-plus");
        $siblings.removeClass("acc_border");
      }

      $this.toggleClass("accordion-active");
      $this.next().slideToggle();
      $accordionArrow.toggleClass("fa-minus fa-plus");
      $accordionItem.toggleClass("acc_border");
    });
  });
});

// category filter

function switchToGridView() {
  const $products = $("#products");
  $products.removeClass("mini-grid-view list-view");
  $products.addClass("grid-view");
}

function switchToListView() {
  const $products = $("#products");
  $products.removeClass("grid-view mini-grid-view");
  $products.addClass("list-view");
}

$(document).ready(function () {
  function toggleView() {
    if ($(window).width() < 1024) {
      $("#products").removeClass("grid-view").addClass("list-view");
      $(".left button").addClass("d-none");
    } else {
      $("#products").removeClass("list-view").addClass("grid-view");
      $(".left button").removeClass("d-none");
    }
  }

  // Initial check
  toggleView();

  // Check on window resize
  $(window).resize(function () {
    toggleView();
  });
});
