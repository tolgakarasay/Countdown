const summerDate = new Date("01/01/2022");

function countdown(){
    const currentDate = new Date();
    distance = summerDate-currentDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

    console.log(days + "d " + hours + "h "+ minutes + "m " + seconds + "s ");
}

function formatTime(time){
    if (time<10){
        return "0"+time;
    }
    else{
        return time;
    }
}

countdown();

setInterval(countdown, 1000)