//analog clock
const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');
const clockDigital = document.querySelector('.clock-digital');
const clockDate = document.querySelector('.clock-date');

function showTime() {
  newDate = new Date();
  const seconds = newDate.getSeconds()
  const minutes = newDate.getMinutes()
  const hours = newDate.getHours()
  //secunds
  const secondsDeg = ((seconds / 60) * 360);
  secondHand.style.transform = `rotate(${secondsDeg}deg)`

  //minutes
  const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6);
  minutesHand.style.transform = `rotate(${minutesDeg}deg)`

  //hours
  const hoursDeg = ((hours / 12) * 360) + ((minutes / 60) * 30);
  hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(showTime, 1000)
showTime()

showDigitalTime()
setInterval(showDigitalTime, 1000)

//digital clock
function showDigitalTime() {
  newDate = new Date();
  let seconds = newDate.getSeconds()
  let minutes = newDate.getMinutes()
  let hours = newDate.getHours()
  if (hours < 10) {
    hours = "0" + hours
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  clockDigital.innerHTML = `${hours}:${minutes}:${seconds}`
}

//clock date
newDate = new Date();
let day = newDate.getDate()
if (day < 10) {
  day = "0" + day
}
clockDate.innerHTML = day;
