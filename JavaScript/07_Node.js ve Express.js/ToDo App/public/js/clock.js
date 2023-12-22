let h3 = document.querySelector("h3");
function time()
{
    let d = new Date();
    let hours = d.getHours(); if(hours<10) {hours=`0${hours}`};
    let minutes = d.getMinutes(); if(minutes<10) {minutes=`0${minutes}`};
    let seconds = d.getSeconds(); if(seconds<10) {seconds=`0${seconds}`};
    let time = `${hours}:${minutes}:${seconds}`;
    h3.textContent=time;
}
time()
setInterval(time,1000)