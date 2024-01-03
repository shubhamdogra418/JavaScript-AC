console.log(a);
var a=10;
// console.log(b);
let b=20;
console.log(b);
console.log();
const c=30;
console.log(c);


let d;
console.log(d);
d=20;
console.log(d);
d=3;
console.log(d);
const e=40;
console.log(e);




console.log(a);
console.log(b);
console.log(c);
{ //shadowing
    var a=100; //global scope
    let b=200; //local - block scope
    const c=300; //local - block scope
    console.log(a);console.log(b);console.log(c);
}
console.log(a); //being global scope, value acanged from 10 > 100 
console.log(b);
console.log(c);

const z=1000; {
    const z=2000; {
        let z=3000; {
            // console.log(z);
        } console.log(z);
    } console.log(z);
} console.log(z);
