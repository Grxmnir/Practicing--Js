// const used to call the ids from our html code
const daysEl = document.getElementById("days");
const hoursEl= document.getElementById("hours");
const minsEl= document.getElementById("mins");
const secondsEl= document.getElementById("seconds");



//The date that we want to reach
const christmas = "25 Dec 2021";
//This is the function that gets us the right values for the countdown
function countdown(){
    const ChristmasDate = new Date(christmas);
    const currentDate = new Date();
    const TotalSeconds = Math.floor((ChristmasDate - currentDate) / 1000);
    const days = Math.floor((TotalSeconds / 3600 / 24));
    const hours = Math.floor((TotalSeconds / 3600)) % 24;
    const mins = Math.floor((TotalSeconds / 60)) % 60;
    const seconds = Math.floor((TotalSeconds % 60)) 
    
 //Passing the value of the function to our ids thru innerHTML
daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = mins;
secondsEl.innerHTML = seconds;
}



countdown();
//We use a setInterval for each second so the function never stops running
setInterval(countdown, 1000);
