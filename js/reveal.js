var $carousel = $('.carousel').flickity();

$('.fuck').click(function() {
                        
  // show
  $carousel.show()
    // trigger resize method after showing
    .flickity('resize');
});