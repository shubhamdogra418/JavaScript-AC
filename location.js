// function success (position) {
//     console.log(position);
// }
// function failure () {
//     console.log("permission halted");
// }


// const locDAta= document.getElementById("location").addEventListener('click', async () => {
//     navigator.geolocation.getCurrentPosition(success,failure);
// })



function showTime() {
    const curTime= new Date();
    // console.log(curTime);
    const time= `${curTime.getHours()}: ${curTime.getMinutes()}: ${curTime.getSeconds()}`;
    // console.log(time); 
    document.getElementById('head').innerHTML= time;
    }

let interval= setInterval(showTime, 1000);

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
})



// console.log(locDAta);
// document.body.append(locDAta);

