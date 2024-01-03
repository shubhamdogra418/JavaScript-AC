//hoisting concept in JS where interpreter appears to move the fxn, varibales declerations, classes and imports to 
//the top of code,so the execution ca heppen before decalerations also.



// var a=10;
console.log(a);
var a=10;


greet(); //hoisting does works in regular fxns
function greet() {
    console.log("hello shubham")
}

// place();
//arrow fxns, fxn expressions act like varibales thus no hoisting (undefined value)
const place =()=> {
    console.log("himachal pradesh");
}
// greet();
place();


// hello(); //fxn expressions
const hello=function () {
    console.log("greetings");
}
hello();

//IIFE fxns execue only once and does not need to call
(function() {
    console.log("immediately invoked functions")
})();