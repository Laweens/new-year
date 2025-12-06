"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Laweens Francois
   Date: 12/6/2024  

*/

/* execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* function to create and run the countdown clock */
function runClock() {

/* We store the current date and time */
var currentDate = new Date();
var dateStr = currentDate.toLocaleDateString();
var timeStr = currentDate.toLocaleTimeString();

/*Display the current date and time*/
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/* Calculate the days until january 1st */
var newYear = new Date("January 1, 2021");
var nextYear = currentDate.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDate) / (1000 * 60 * 60 * 24);

/* calculate the hours left in the current day */
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

/* calculate the minutes and seconds left in the current hour */
var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

/* Display the time left until new years eve */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
}