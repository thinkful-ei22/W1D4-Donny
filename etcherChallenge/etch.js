// Add Event Listeners here:
'use strict';

// When DOM is ready:
$(() => {
    createAndPlaceRows(8);
  
  //discovered that on 'hover' doesnt work - it's deprecated circa jquery 1.8 so you have to use mouseover for this behavior 
  
   $('.grid').on('mouseover','.cell', function(){
      $(this).addClass('active');
    })
  
    $('button').click(function(){
      createAndPlaceRows(8);
    })
  
    // Bind your event listeners here:
  });
  
  
  
  
  // ===============================
  // Code below is to automate grid creation
  // You can ignore this!
  // ===============================
  function createRow(cellCount) {
    let row = '<div class="row">';
    let str = '<div class="cell">&nbsp;</div>';
    for (let i = 0; i < cellCount; i++) {
      row += str;
    }
    row += '</div>';
    return row;
  }
  
  function createRows(n) {
    let rows = '';
    for (let i = 0; i < n; i++) {
      rows += createRow(n);
    }
    return rows;
  }
  
  function createAndPlaceRows(n) {
    $('.cell').remove(); // Clear all current cells and listeners
    const rows = createRows(n);
    $('.grid').html(rows);
    const cells = $('.cell');
    cells.css({ height: cells.width() });
  }