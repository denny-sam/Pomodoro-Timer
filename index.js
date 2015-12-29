var x;
var t = 0;
var b = 0;
var counter = [];
$(document).ready(function() {

  $('#time').text($('#session').text());
 
  $('.adjustTimer').click(function() {
    getItMoving($(this).attr('id'));
  });
    
    
  $('.clock').click(function() {
    if (t === 0) {
        t = 1;
        timer();
    } else {
        t=0;
        stopClock();
    }
  });
});

function getItMoving(f) {
  //alert(f);
  switch (f) {
    case 'sessionI':
      $('#session').text($('#session').text() * 1 + 1);
      $('#time').text($('#session').text());
      break;

    case 'sessionD':
      if ($('#session').text() > 1)
        $('#session').text($('#session').text() * 1 - 1);
      $('#time').text($('#session').text());
      break;
          
      case 'breakI':
           if ($('#break').text() > 1)
                $('#break').text($('#break').text() * 1 + 1);
                break;
          
      case 'breakD':
             if ($('#break').text() > 1)
                $('#break').text($('#break').text() * 1 - 1);
                break;      
  };
}



function timer() {
    
    var time = ($('#time').text()).split(':');
  if (time[1] === undefined ||time[1]==='') {
    time[0] = (time[0] * 1) - 1;
    time.push(59);
    setTimeout(function() {
      $('#time').text(time[0] + ' : ' + time[1]);
    }, 1000);

  }else{
    time[1] = time[1] * 1 - 1;
    time[0] = time[0] * 1;
  }

 x = setInterval(function(){

  console.log(x);
      if (time[0] >= 0 && time[1] >= 0) {

        if (time[1] > 9)
          $('#time').text(time[0] + ' : ' + time[1]);
        else
          $('#time').text(time[0] + ' : 0' + time[1]);
        time[1] = time[1] - 1;

        if (time[1] === -1 && time[0] !== 0) {
          time[0] = time[0] - 1;
          time[1] = 59;
        }
      
      }else{
     
          if(b===0)
              {
                  stopClock();
                  $('#sessionText').text('Break');
                  $('#time').text($('#break').text());
                  timer();
                  b=1;
              }
          else{
               stopClock();
              $('#sessionText').text('Session');
              $('#time').text($('#session').text());
              timer();
              b=0;
          }
      }
  }
  , 100);
}




function stopClock(){
    clearInterval(x);
    console.log(x);
}
