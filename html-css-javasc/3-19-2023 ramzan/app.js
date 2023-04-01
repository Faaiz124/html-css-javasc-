const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")


var enddate = "23 march 2023 "

function updateCountdown() {
    const end = new Date(enddate)
    const now = new Date()
    const diff = (end - now);
    // console.log(Math.floor(diff));
    var day = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hou = Math.floor(diff / (1000 * 60 * 60));
    var minute = Math.floor(diff / (1000 * 60));
    var second = Math.floor(diff / (1000));

    // console.log(Math.floor(day));
    // console.log(Math.floor(hou));
    // console.log(Math.floor(minute));
    // console.log(Math.floor(second));

    days.innerHTML = day;
    hours.innerHTML = hou < 10 ? '0' + hou : hou;
    minutes.innerHTML = minute < 10 ? '0' + minute : minute;
    seconds.innerHTML = second < 10 ? '0' + second : second;
}

setInterval(updateCountdown, 1000);