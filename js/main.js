$(function(){

	var $window       = $(window);
  var raf           = requestAnimationFrame;
  var lastScrollTop = $window.scrollTop();
  var scrollTop;

  $window.on("load", function(){
    scrollTop = $window.scrollTop();
    if( scrollTop > 90 ){
      $('header').addClass('active');
    } else{
      $('header').removeClass('active');
    }  
  });

  if (raf) {
    loop();
  }

  function loop() {

    scrollTop = $window.scrollTop();
    var y         = (scrollTop > lastScrollTop) ? 'down' : ((scrollTop === lastScrollTop) ? 'none' : 'up');

    if (lastScrollTop === scrollTop) {
        raf(loop);
        return;
    } else {
        lastScrollTop = scrollTop;
        raf(loop);
    }
 
    lastScrollTop = scrollTop;

    if( scrollTop > 90 ){
      $('header').addClass('active');
    } else{
      $('header').removeClass('active');
    }  

  }


  $(".mobile-menu-btn").on("click", function(){

    $(this).toggleClass("active");
    $(".mobile-nav").toggleClass("show");

  });
 
});




