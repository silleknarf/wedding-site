/* Countdown timer script, nicked and modified from: 
 * https://www.w3schools.com/howto/howto_js_countdown.asp
 */

// Our ceremony kick off time
var countDownDate = new Date("2019-12-14 14:00:00Z").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
var daysSection = days !== 0 ? days + " days, " : "";
var hoursSection = hours !== 0 ? hours + " hours, " : "";
var minutesSection = minutes !== 0 ? minutes + " minutes" : "";
var secondsSection = seconds !== 0 ? " and " + seconds + " seconds" : "";

document.getElementById("timer").innerHTML = daysSection + hoursSection + minutesSection + secondsSection;

// If the count down is finished, write some text 
if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Just Married";
}
}, 500);