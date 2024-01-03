let count=0;
// document.getElementById('decrease').onclick= function () {
//     count-=1;
//     document.getElementById('label').innerHTML=count;
// }
document.getElementById('increase').onclick= function () {
    document.getElementById('label').innerHTML=count;

}
document.getElementById('reset').onclick= function () {
    count=0;
    document.getElementById('label').innerHTML=count;

}

document.getElementById('increase').addEventListener('click', function () {
    count+=1;
    document.getElementById('label').innerHTML=count;
})

