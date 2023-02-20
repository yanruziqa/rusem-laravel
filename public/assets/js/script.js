'use script'

// Add backdrop element
$('body').append('<div class="main-backdrop"></div>');

// Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Show sidebar in mobile
$('#menuLink').on('click', function(e){
  e.preventDefault();

  $('body').toggleClass('sidebar-show');
});

// Hide sidebar in mobile
$('body').on('click', '.main-backdrop', function(){
  $('body').removeClass('sidebar-show sideright-show');
})

// Header mobile effect on scroll
function animateHead() {
  if($(document).scrollTop() > 20) {
    $('.main-mobile-header').addClass('scroll');
  } else {
    $('.main-mobile-header').removeClass('scroll');
  }
}

$(window).scroll(function() {
  animateHead();
});

// Click interaction anywhere in the page
$(document).on('click touchstart', function(e){
  e.stopPropagation();

  // closing sidebar footer menu
  if(!$(e.target).closest('.sidebar-footer').length) {
    $('.sidebar').removeClass('footer-menu-show');
  }
});

// Form search
$('.form-search .form-control').on('focusin focusout', function(e){
  $(this).parent().toggleClass('onfocus');
});

// Show/hide sidebar offset
$('#menuSidebarOffset').on('click', function(e){
  e.preventDefault();

  $('body').toggleClass('sidebar-show');
});