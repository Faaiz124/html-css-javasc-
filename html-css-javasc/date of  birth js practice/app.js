document.getElementById("subit").addEventListener('click', function() {
    // var days = document.getElementById("days")
    // var hours = document.getElementById("hours")
    // var minutes = document.getElementById("minutes")
    // var seconds = document.getElementById("seconds")
    // var saal = document.getElementById("year")
    // var input = document.getElementById("myDate").value;







    function updateCountdown() {


        var days = document.getElementById("days")
        var hours = document.getElementById("hours")
        var minutes = document.getElementById("minutes")
        var seconds = document.getElementById("seconds")
        var saal = document.getElementById("year")
        var input = document.getElementById("myDate").value;


        var enddate = input
        const end = new Date(enddate)
            // console.log(end)
        const now = new Date()
        const diff = (now - end);



        var saal = Math.floor(diff / (1000 * 60 * 60 * 24 * 360));
        var day = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hou = Math.floor(diff / (1000 * 60 * 60));
        var minute = Math.floor(diff / (1000 * 60));
        var second = Math.floor(diff / (1000));

        // console.log(Math.floor(day));
        // console.log(Math.floor(hou));
        // console.log(Math.floor(minute));
        // console.log(Math.floor(second));
        if (diff > 0) {
            year.innerHTML = saal;
            days.innerHTML = day;
            hours.innerHTML = hou < 10 ? '0' + hou : hou;
            minutes.innerHTML = minute < 10 ? '0' + minute : minute;
            seconds.innerHTML = second < 10 ? '0' + second : second;
        }




    }

    setInterval(updateCountdown, 1000);
    console.log()
})