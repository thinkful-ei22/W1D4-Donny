'use strict';

//initialization 
$(function() {

  let shoppingListItem = 'empty';

  //form submission
  $('#js-shopping-list-form').submit(event => {
    // this stops the default form submission behavior
    event.preventDefault();
    //enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button

    //create local variable to store the form  input 
    shoppingListItem =  $(this).find('.js-shopping-list-entry').val();

    console.log(shoppingListItem);
     
    //add item to end of shopping list
    $('.shopping-list').append(`<li><span class="shopping-item">
      ${shoppingListItem}</span><div class="shopping-item-controls">
          <button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span>
          </button></div></li>`);
    
  });  

  //button functionality
  //delete button
  $('.shopping-list').on('click', '.shopping-item-delete', function(){
    $(this).closest('li').remove();
  });

  //check item ? Lol, it just crosses them out
  $('.shopping-list').on('click', '.shopping-item-toggle', function(){
    $(this).closest('li').toggleClass('shopping-item__checked');
  });

});
//Requirements
//enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button




// check and uncheck items on the list by clicking the "Check" button



// permanently remove items from the list