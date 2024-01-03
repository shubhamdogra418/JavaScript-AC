// console.log(a);
// var a=20;
// console.log(a);
// console.log(this.a);
// console.log(window.a);


//global varibales accessible from anywhere even from nested fxns
// function hello() {
//     let b=30;
//     console.log(b); //30
//     console.log(this.b); //20
// }
// hello();

//local scope accessible in that scope only, otherwise not-defined error
// console.log(b)

function a() {
    console.log(x);
    let y=30;
    b();
    
    function b() {
        console.log(y); //accessing lexical scope
        d();
        function d() {
            console.log(y); //lexical env accessible in let, const, var
        } 
    } 
}
var x=30; //global scope,anyone can access
a();
// console.log(y); //can't access local scope 