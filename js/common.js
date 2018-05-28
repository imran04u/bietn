
// Mobile Menu
if($(window).width() <= 1023){
 $("#menu").mmenu({
   "offCanvas": {
     "position": "right"
   }
 });
 
}

 // Header Fixed   
 $(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height >100) {
    $('header').addClass('header-fixed');
  }
  else if (height == 0) {
    $('header').removeClass('header-fixed');
  }
  if (height > 390) {
    $('.submenu').addClass('submenu-fixed');
  }
  else if (height < 389) {
    $('.submenu').removeClass('submenu-fixed');
  }
});  












