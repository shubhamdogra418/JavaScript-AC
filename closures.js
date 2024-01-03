function outer() {
    let name="shubham";
    console.log(name);
    function inner() {
        let name="shubham dogra";
        console.log("from inner", name);
    } inner();
}

outer();

//CLOSURES- a function bundled together with its lelxical env is called closure
function z() {
    var a=10;
    function y() {
        var b=20;
        function x() {
            console.log(a,b);
        } x();
    } y();
} z();

//example of refernce and not value
function numberGenerator () {
    var num=2;
    function checkNumber () {
        console.log(num);
    } num++;
    return checkNumber;
} 
const number=numberGenerator();
number();

//outer of its scope
//we have access to variables defined in enclosing function(s) even after the 
// enclosing function which defines these variables has returned.
function sayHello() {
    var say= function () {
        console.log(hello);
    }; 
    var hello="hello JS";
    return say;
}

const hello=sayHello();
hello();