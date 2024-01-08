function getTime() {
    const currTime= new Date();
    const nowTime= `${currTime.getHours()}: ${currTime.getMinutes()}: ${currTime.getSeconds()}`
    document.getElementById('head').innerText= nowTime;
    if(currTime === "11:25:20") {
        alert("its time");
    }
}



const interval= setInterval(getTime, 1000);
document.getElementById('stop').addEventListener('click', ()=> {
    clearInterval(interval);
})