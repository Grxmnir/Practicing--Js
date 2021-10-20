const daysEl = document.getElementById("days");
const hoursEl= document.getElementById("hours");
const minsEl= document.getElementById("mins");
const secondsEl= document.getElementById("seconds");




const christmas = "25 Dec 2021";

function countdown(){
    const ChristmasDate = new Date(christmas);
    const currentDate = new Date();
    const TotalSeconds = Math.floor((ChristmasDate - currentDate) / 1000);
    const days = Math.floor((TotalSeconds / 3600 / 24));
    const hours = Math.floor((TotalSeconds / 3600)) % 24;
    const mins = Math.floor((TotalSeconds / 60)) % 60;
    const seconds = Math.floor((TotalSeconds % 60)) 
    
 
daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = mins;
secondsEl.innerHTML = seconds;
}



countdown();

setInterval(countdown, 1000);