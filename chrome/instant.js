/**
 * Instant Search for JIRA.
 */


(function($){
/*
This function is taken from https://github.com/jollytoad/jquery.plugins/blob/master/src/jquery.defer.js written by Mark Gibson
*/
$.defer = function(delay, timerDataName, callback) {
  var timer;

  if ( !callback ) {
      callback = timerDataName;
      timerDataName = undefined;
  }

  // Return the callback proxy
  return function() {
    // Save the vars for the real callback
    var that = this, args = arguments;
    
    // Reset the delay
    clearTimeout(timerDataName ? $.data(this, timerDataName) : timer);

    // Delay the real callback
    timer = setTimeout(function() {
      callback.apply(that, args);
    }, delay);

    if ( timerDataName ) {
        $.data(this, timerDataName, timer);
    }
  };
};


$(document).ready(function() {
  var request;
  
  function submitForm() {
    var form = $('#jqlform');
    
    $('.results > div').fadeTo('fast', 0.4);
    
    if (request) {
      request.abort();
    }
    request = $.ajax({url: form.attr('action'),
            type: 'POST',
            data: form.serialize(),
            success: function(data) {              
              var results = $('.results > div', data);
              $('.results > div').remove();
              $('.results').append(results);
              $('.results > #jqlerror').remove();
              setTimeout(function() {
                $('#primary').remove();
                $('#primary', data).prependTo('#main-content');
              }, 0);
            }
           });
  }
  $('#jqltext').bind('keyup', $.defer(10, function(event) {
    if ($('.jqlgood').length) {
      submitForm();
    }
  }));
});
})(jQuery);
