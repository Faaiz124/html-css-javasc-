let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string
        } else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector("input").value = string
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            document.querySelector("input").value = string
        } else if (e.target.innerHTML == "%") {
            string = string / 100;
            document.querySelector("input").value = string
        } else {
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string
        }

    })
});





let [
    milisecound, secound, minutes, hour
] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timerDisplay");
let int = null;

document.getElementById("start")
    .addEventListener("click", () => {
        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
    })

document.getElementById("pause")
    .addEventListener("click", () => {
        clearInterval(int);

    })
document.getElementById("reset")
    .addEventListener("click", () => {
        clearInterval(int);
        [
            milisecound, secound, minutes, hours
        ] = [0, 0, 0, 0];

        timeRef.innerHTML = '00 : 00 : 00 : 00'
    });

function displayTimer() {
    milisecound += 10;
    if (milisecound == 1000) {
        milisecound = 0;
        secound++;
        if (secound == 60) {
            secound = 0;
            minutes++;

            if (minutes == 60) {
                minutes = 0;

                hour++;
            }
        }
    }

    let h = hour < 10 ? '0' + hour : hour;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = secound < 10 ? '0' + secound : secound;
    let ms = milisecound < 10 ? '0' + milisecound : milisecound;

    timeRef.innerHTML = `${h}:${m}:${s}:${ms}`;
}