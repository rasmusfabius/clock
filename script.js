// Get the selectors from the dom
const HOURARM = document.querySelector("#hour");
const MINUTEARM = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// get the hours, minutes and seconds from the Date methods .
var date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// Calculate the position for the hours, minute and second arms. With 360 degrees
let hourPosition = (hours * 360) / 12 + (minutes * (360 / 60)) / 12;
let minutePosition = (minutes * 360) / 60 + (seconds * (360 / 60)) / 60;
let secondPosition = (seconds * 360) / 60;

// Fix the issuce where the second arm goes back to start every time it hits 12.
function runTheClock() {
  hourPosition = hourPosition + 3 / 360;
  minutePosition = minutePosition + 6 / 60;
  secondPosition = secondPosition + 6;

  HOURARM.style.transform = "rotate(" + hourPosition + "deg)";
  MINUTEARM.style.transform = "rotate(" + minutePosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
}

// We run the runTheClock function every second
var interval = setInterval(runTheClock, 1000);
