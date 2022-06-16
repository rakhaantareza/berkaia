// Home Highlight Slider
var slides = document.querySelectorAll('.highlight');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// manual SliderNav
var manualNav = function(manual){
  slides.forEach((highlight) => {
    highlight.classList.remove('active');
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });
  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}
btns.forEach((btn, i) =>{
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Automatic SliderNav
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide)=> {
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if(slides.length == i) {
        i = 1;
      }
      if(i >= slides.length){
        return;
      }
      repeater();
    }, 3000);
  }
  repeater();
}
repeat();

// Carousel
$(document).ready(function() {
  // Our Client Carousel
  $('.client-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:20,
    responsiveClass:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    items:2,
    autoplayHoverPause:true,
    navText: ["<span class='fa-2x fas fa-arrow-circle-left m-2 mt-4 mb-0'</span>", "<span class='fa-2x fas fa-arrow-circle-right m-2 mt-4 mb-0'</span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
        },
        1000:{
            items:2,
        }
    }
  });

  // navbar shrink
  $(window).on("scroll", function() {
    if($(this).scrollTop() > 50) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  // Services Carousel
  $('.services-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    responsiveClass:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    items:4,
    autoplayHoverPause:true,
    navText: ["<span class='fa-2x fas fa-arrow-circle-left text-center p-2 mt-4'</span>", "<span class='fa-2x fas fa-arrow-circle-right p-2 mt-4'</span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
  });
});

//SmoothScroll
$(function(){
  $.scrollIt({
    easing: 'linear',      
    scrollTime: 800,      
    activeClass: 'active', 
    onPageChange: null,  
    topOffset: -70          
  });
});

// ScrollReveal
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home-text, .foot-0`)
sr.reveal(`.home-img, .foot-1`, {delay:600})
sr.reveal(`.foot-2`, {delay:700})
sr.reveal(`.foot-3`, {delay:800})
sr.reveal(`.foot-4`, {delay:900})
sr.reveal(`.history, .client-text`, {origin: 'left'})
sr.reveal(`.card-vm, .client-carousel`, {origin: 'right'})
sr.reveal(`.team-text, .services-title`, {interval: 100})
sr.reveal(`.team-col, .services-carousel`, {interval:400})
sr.reveal(`.shapeteam-1`, {origin: 'left', delay:1000})
sr.reveal(`.shapeteam-2`, {origin: 'right', delay:1300})