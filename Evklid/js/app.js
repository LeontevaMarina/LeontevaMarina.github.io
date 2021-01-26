/* Tab */ 

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach (function(item) {
   item.addEventListener("click", function () {
   let currentBtn = item;
   let tabId = currentBtn.getAttribute("data-tab");
   let currentTab = document.querySelector(tabId);
 
   if (! currentBtn.classList.contains('active')) {
    tabsBtn.forEach(function(item) {
    item.classList.remove('active');
    })

    tabsItems.forEach(function(item) {
        item.classList.remove('active');
        })

    currentBtn.classList.add('active');
    currentTab.classList.add('active');
    }

    });
});

document.querySelector('.tabs__nav-btn').click();

/* Fixed Header */ 

    $(function() {

    let header = $("#header");
    let hero = $("#hero");
    let heroH = hero.height();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, heroH);

    $(window).on("scroll resize", function() {
    let heroH = hero.height();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, heroH);

})

function checkScroll(scrollPos, introH) {
    if( scrollPos > heroH ) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
}
};


/* Smooth Scroll */

$("[data-scroll]").on("click", function(event) {
event.preventDefault();

let elementId = $(this).data('scroll');
let elementOffset = $(elementId).offset().top; 

nav.removeClass('show');

$("html, body").animate({
    scrollTop: elementOffset - 53
}, 700);
});
});

/* Nav Toggle */
let nav = $("#nav");
let navToggle = $("#navToggle");

navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");
});