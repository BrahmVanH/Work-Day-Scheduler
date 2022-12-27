// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Kinda think this should be replaced with a for loop, instead of 8 separate lines
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
var currentDay = dayjs().format('MMM D, YYYY')
$('#currentDay').text(currentDay);

$(document).ready(function() {

  // To save user's logged event in local storage
  $('.saveBtn').on('click', function() {
    
    userEntry = $(this).siblings('.description').val();
    timeKey = $(this).parent().attr('id');
    localStorage.setItem(timeKey, userEntry);

    })


    function timeTracker () {
      
      // current time variable to be embedded into comparison function 
      var currentTime = dayjs().hour();
      console.log(currentTime);
      
      // function to parse time ID from time-block... to be later compared to current time
      
      $('.time-block').each(function() {
        
        var timeId = parseInt($(this).attr('id').split("hour-")[1])
        console.log(timeId);
        
      
        // If statement to change classes of time blocks and their displayed colors
        if (timeId < currentTime) {
          
          $(this).removeClass('future');
          $(this).removeClass('present');
          $(this).addClass('past');
          
        }

        else if (timeId === currentTime) {
          
          $(this).removeClass('past');
          $(this).removeClass('future');
          $(this).addClass('present');
          
        }

        else {
          
          $(this).removeClass('present');
          $(this).removeClass('future');
          $(this).addClass('future');  
        }
      })
    }

    timeTracker();

  })
  

// Need a function to save entered text into local storage >>
// Need a function to populate page with local data  >>
// Need a function to compare current TOD in 24-hour format to id hour-#  >>
//and assign a past, present, future class to timeblock to change color  >>
// Need a function to clear a time block and its associated local data
// Need page to display current date >>>

// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  //});
  