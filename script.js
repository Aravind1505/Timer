document.getElementById("titleWebsite").innerHTML = "Timer App";
document.getElementById("appTitle").innerHTML = "Timer"

const newYears = '1 Jan 2023';

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("days").innerHTML = format(days);
    document.getElementById("hours").innerHTML = format(hours);
    document.getElementById("minutes").innerHTML = format(minutes);
    document.getElementById("seconds").innerHTML = format(seconds);
}

function format(time){
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);