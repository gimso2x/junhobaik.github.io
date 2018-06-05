/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {
   //sidebar close script 18-06-04
   $('.nav__sub-title').click(function() {
      $item = $(this).closest('li');
      $target = $(this).next('ul');
      
      if($item.hasClass('active')) {
         $item.removeClass('active');
         $target.stop().slideUp('fast');
      } else {
         $item.addClass('active');
         $target.stop().slideDown('fast');
      }
      
      $item.siblings().removeClass('active');
      $item.siblings().find('ul').stop().slideUp('fast');
   });   
  
});
