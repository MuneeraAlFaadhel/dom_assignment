/*
    Utilize the date class and also the css property rotate, float or flex
    
*/

//setInterval(digitalClock, 1000)

var funList = [digitalCloc24(), digitalClock12()];

function digitalClock24(){ //24H format
var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
 
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  var currentTimeString24 = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // console.log(currentTimeString1);
  
  // $(".digi_clock").(currentTimeString1)
  document.getElementsById('.dig_clok24').innerhtml(currentTimeString24);
  document.getElementsById('.x').innerhtml= "gggggg";

  }



  function digitalClock12(){//12H format
    var currentTime = new Date ( );
    
      var currentHours = currentTime.getHours ( );
      var currentMinutes = currentTime.getMinutes ( );
      var currentSeconds = currentTime.getSeconds ( );
    
      currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
      currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
     
      var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
      currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
      currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    
      var currentTimeString12 = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    
      var x = document.getElementsByClassName('.x');
      x.innerHTML = "jjjjjj";

        // console.log(currentTimeString12);
      // Update the time display
      // $(".digi_clock").innerhtml(currentTimeString2)
      document.getElementsByClassName('.dig_clok12').innerhtml(currentTimeString12);
      document.getElementsByClassName('.x').innerhtml= "gggggg";
      document.getElementsByClassName('.dig_clok12').innerhtml(currentTimeString12);


     }
 


    //toggle button
    var toggle; ()=>
    $(document).ready(function(){
      $('button').toggle(
        function(){digitalClock12();},
        function(){digitalClock24();}
    )});


//for the Analogue
// var hourHand = document.getElementById('hourHand');
// var minHand = document.getElementById('minHand');
// var secHand = document.getElementById('secHand');



// function clock(){
//     var time = new Date();

//     var hour = time.getHours();
//     var min = time.getMinutes();
//     var seconds = time.getSeconds();

//     timeOfDay = (hour < 12 ? AM : PM)

//     var digital = hour + ":" + min + ":" + seconds + timeOfDay 

//     var hourDeg = (hour * 30) + (0.5 * min);
//     var minDeg = (min * 6) + (0.1 * seconds);
//     var secDeg = seconds * 6;

//     hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
//     minHand.style.transform = 'rotate(' + minDeg + 'deg)';
//     secHand.style.transform = 'rotate(' + secDeg + 'deg)';

//     setTimeout(clock, 1000);
// };
// clock();