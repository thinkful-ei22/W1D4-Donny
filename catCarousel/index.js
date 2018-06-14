'use strict';
//initialize clickHandler
$(function() {
  $('.thumbnail').click(function(event) {
    event.stopPropagation();
    //create local variable to img src/alt
    let newImg = $(this).find('img').attr('src');
    let newAlt = $(this).find('img').attr('alt');
    //console.log($(this).attr('aria-pressed'));
    console.log(newImg);
    console.log(newAlt);
    //change img/alt attribute to thumbnail src
    $('.hero img').attr('src',newImg);
    $('.hero img').attr('alt',newAlt);

  });
});