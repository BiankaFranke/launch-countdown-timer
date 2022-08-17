// JS Check
// console.log('it works');

// Declaration
let inputDay = document.querySelector('#inputDays');
let inputHour = document.querySelector('#inputHours');
let inputMin = document.querySelector('#inputMinutes');
let inputSec = document.querySelector('#inputSeconds');

// function for countdown
let counter = () => {
    let now = new Date().getTime();
    let launchDate = new Date("Dec 31, 2022 20:00:00").getTime();
    let dateDiff = launchDate - now;
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let secondsNew = Math.floor((dateDiff % minutes) / seconds);
    let minutesNew = Math.floor((dateDiff % hours) / minutes);
    let hoursNew = Math.floor((dateDiff % days) / hours);
    let daysNew = Math.floor(dateDiff / days);

    // Input into HTML
    inputDay.innerText = daysNew;
    inputHour.innerText = hoursNew;
    inputMin.innerText = minutesNew;
    inputSec.innerText = secondsNew;
};

// Call function with timer
setInterval(counter, 1000);