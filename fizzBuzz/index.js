'use strict';


//initialize formsubmissionhandler
$(function() {
  $('#number-chooser').submit(event => {
    // this stops the default form submission behavior
    event.preventDefault();
    //create local variable to store the form  input 
    const userSubmittedValue =  $(this).find('#number-choice');
    //debug
    //console.log(userSubmittedValue.val());
    //begin fizzbuzzy calculations :o
    const userNumber = userSubmittedValue.val();
    const fizzBuzzBlock='<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>';
    const fizzBlock='<div class="fizz-buzz-item fizz"><span>fizz</span></div>';
    const buzzBlock='<div class="fizz-buzz-item buzz"><span>buzz</span></div>';
    let fizzNumber = 1;

    for(let i=0;i<userNumber+1;i++){
      if (i%3 === 0 && i%5 === 0){
        $('.js-results').append(fizzBuzzBlock);
      } 
      else if (i%3 ===0){
        $('.js-results').append(fizzBlock);
      }
      else if (i%5 ===0){
        $('.js-results').append(buzzBlock);
      } 
      else{
        fizzNumber = i;
        $('.js-results').append('<div class="fizz-buzz-item buzz"><span>'+fizzNumber+'</span></div>');

      } 
    }

    //end fizzbuzzcalculations

  });  
});


