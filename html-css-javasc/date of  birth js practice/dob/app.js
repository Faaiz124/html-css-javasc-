document.getElementById("subit").addEventListener('click', function() {
    var days = document.getElementById("days")
    var hours = document.getElementById("hours")
    var minutes = document.getElementById("minutes")
    var seconds = document.getElementById("seconds")
    var saal = document.getElementById("year")
    var input = document.getElementById("myDate").value;
    var name = document.getElementById("namee").value;






    const enddate = input;

    function updateCountdown() {


        const end = new Date(enddate)
            // console.log(enddate)
        const now = new Date()
        const diff = (now - end);

        var nam = name;
        var saal = Math.floor(diff / (1000 * 60 * 60 * 24 * 360));
        var day = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hou = Math.floor(diff / (1000 * 60 * 60));
        var minute = Math.floor(diff / (1000 * 60));
        var second = Math.floor(diff / (1000));

        // console.log(Math.floor(day));
        // console.log(Math.floor(hou));
        // console.log(Math.floor(minute));
        // console.log(Math.floor(second));

        if (enddate && now) {

            year.innerHTML = saal;
            days.innerHTML = day;
            hours.innerHTML = hou < 10 ? '0' + hou : hou;
            minutes.innerHTML = minute < 10 ? '0' + minute : minute;
            seconds.innerHTML = second < 10 ? '0' + second : second;

        }

    }

    setTimeout(updateCountdown, 1000);
})





// document.getElementById("subit").addEventListener('click', function() {
//     var input = document.getElementById("myDate").value;
//     var name = document.getElementById("namee").value;
//     const enddate = input;

//     function updateCountdown() {
//         const end = new Date(enddate);
//         const now = new Date();
//         const diff = (now - end);

//         if (enddate && now) {
//             var saal = Math.floor(diff / (1000 * 60 * 60 * 24 * 360));
//             var day = Math.floor(diff / (1000 * 60 * 60 * 24));
//             var hou = Math.floor(diff / (1000 * 60 * 60));
//             var minute = Math.floor(diff / (1000 * 60));
//             var second = Math.floor(diff / (1000));

//             var yearEl = document.getElementById("year");
//             var daysEl = document.getElementById("days");
//             var hoursEl = document.getElementById("hours");
//             var minutesEl = document.getElementById("minutes");
//             var secondsEl = document.getElementById("seconds");

//             yearEl.innerHTML = saal;
//             daysEl.innerHTML = day;
//             hoursEl.innerHTML = hou < 10 ? '0' + hou : hou;
//             minutesEl.innerHTML = minute < 10 ? '0' + minute : minute;
//             secondsEl.innerHTML = second < 10 ? '0' + second : second;
//         }
//     }

//     setInterval(updateCountdown, 1000);
// });


// document.getElementById("submit").addEventListener('click', function() {
//     var input = document.getElementById("myDate").value;
//     var name = document.getElementById("namee").value;
//     const enddate = input;

//     function updateCountdown() {
//         const end = new Date(enddate);
//         const now = new Date();
//         const diff = (end - now);

//         if (enddate && now) {
//             var saal = Math.floor(diff / (1000 * 60 * 60 * 24 * 360));
//             var day = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
//             var hou = Math.floor(diff / (1000 * 60 * 60)) % 24;
//             var minute = Math.floor(diff / (1000 * 60)) % 60;
//             var second = Math.floor(diff / (1000)) % 60;

//             var yearEl = document.getElementById("year");
//             var daysEl = document.getElementById("days");
//             var hoursEl = document.getElementById("hours");
//             var minutesEl = document.getElementById("minutes");
//             var secondsEl = document.getElementById("seconds");

//             yearEl.innerHTML = saal;
//             daysEl.innerHTML = day;
//             hoursEl.innerHTML = hou < 10 ? '0' + hou : hou;
//             minutesEl.innerHTML = minute < 10 ? '0' + minute : minute;
//             secondsEl.innerHTML = second < 10 ? '0' + second : second;
//         }
//     }

//     setInterval(updateCountdown, 1000);
// });