

var hourHand = document.getElementById('hourHand');
var minHand = document.getElementById('minHand');
var secHand = document.getElementById('secHand');



function clock(){
    var time = new Date();

    var hour = time.getHours();
    var min = time.getMinutes();
    var seconds = time.getSeconds();

    var hourDeg = (hour * 30) + (0.5 * min);
    var minDeg = (min * 6) + (0.1 * seconds);
    var secDeg = seconds * 6;

    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minHand.style.transform = 'rotate(' + minDeg + 'deg)';
    secHand.style.transform = 'rotate(' + secDeg + 'deg)';

    setTimeout(clock, 1000);
};
clock();