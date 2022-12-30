var currentDay = dayjs().format('MMM D, YYYY')
$('#currentDay').text(currentDay);

$(document).ready(function() {

    // To save user's logged event in local storage
    $('.saveBtn').on('click', function() {
      
      userEntry = $(this).siblings('.description').val();
      timeKey = $(this).parent().attr('id');
      localStorage.setItem(timeKey, userEntry);

    })

    $('.saveBtn').on('dblclick', function() {

      userEntry = $(this).siblings('.description').val();
      timeKey = $(this).parent().attr('id');
      localStorage.removeItem(timeKey, userEntry);
    
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

    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    timeTracker();

})
  


// Need a function to clear a time block and its associated local data

