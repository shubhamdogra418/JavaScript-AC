// function name() {
//     var naam="shubham";
//     setTimeout(() => {
//         console.log(naam);
//     }, 2000);
// }
// name();
// console.log("mentioned after timeout");

// function x() {
//     console.log("hello x");
// }

// function numbers() {
//     for( var i=1;i<=5;i++) { //6 6 6 6 6 cows var points the globalscope and points to the same memory location
//         setTimeout(() => {
//             console.log(i);
//         }, 2000);
//     }
// } numbers();

//let being local scope points to diferent memory locaion everytime thus 1 2 3 4 5
// function count () {
//     for(let i=1;i<=5;i++) {
//         function close() {
//             setTimeout( function () {
//                 console.log(i);
//             }, i*1000);
//         } close();
//     }
//     console.log("inside the scope");
// }
// count();
// console.log("mentioned after for loop");

function operation () {
    var num=1;
    function increment() {
        num++;
        console.log(num);
    }
    function decrement () {
        num--;
        console.log(num);
    } increment(); decrement();
} 
operation();


function sum(a,b) { //pararms
    return a+b;
}
let addition= sum(10,20); //args
console.log(addition);

//callback functions
// function greet( func1, func2) {
//     console.log("high order function takes callback functions");
//     func1();
//     func2();
// } greet(sum,mul);

function mul(a,b) {
    console.log(a*b);
}; 
mul(10,20);

// let final= greet(sum , mul);
// console.log(final);

// function y(func) {
//     console.log("HOF takes CB fxn");
//     func();
// }; y(mul(10,20));

// function callback() {
//     console.log("callback function");
// }


function greet(name, callback) {
    console.log("hey", name);
    callback();
}
greet("shubham", message )
function message() {
    console.log("happy new year");
}

function increase () {
    var count=1;
    count++;
    console.log(count);
} increase();
const button= document.getElementById('btn');
button.textContent= 1;
document.body.append(button);