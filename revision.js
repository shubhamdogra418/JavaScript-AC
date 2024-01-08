//reduce method
let arr=[2,3,4,25,74,32];
console.log(arr.map(el=> el*2));
console.log(arr.reduce((curr,acc)=> acc+curr));

//pollyfill for reduce method
//takes one elemenst and fuse it into another

//find minimum element in the array
console.log(arr.reduce((curr, acc)=> Math.min(curr, acc))); 

//not using reduce method
function findMin(arr) {
    let min=Number.MAX_VALUE;
    for(let i=0;i<arr.length;i++) {
        if(arr[i] < min) {
            min=arr[i];
        }
    } return min;
}
console.log(findMin(arr));


//find the length of array
function length() {
    let i=0;
    while( arr[i]!= undefined){
        i++;
    } return i;
}

console.log(length());

//mehods array in objects
const val= {
    sum: function (a,b)  {return a+b;}, 
    mul(a,b) {return a*b},
    sub(a,b) { return a-b},
};

console.log(val.sum(10,20));
console.log(val.mul(2,243));
//SPREAD OPERATOR
console.log(Math.min(...arr));
const fruits={
    name: "apple",
    price: 230,
    place: "himachal"
};
// console.log(...fruits);

let name="shubham";
// console.log(...name);

function add(x,y,z) {
    return x+y+z;
}
//SPREAD OPERATOR >> EXPANDS    
const numbers=[11,21,31];
console.log(add(...numbers));

//destrcutring
const fruitss ={
    name: "shubham",
    place: "himachal",
    class:" computers",
}

const infoo= {...fruitss};
console.log(infoo);

function mull (a,b,c) {
    return a+b+c;
};
const yuu=[2,3,45];
console.log(mull(...yuu));

function strict (a,b) {
    if(a === b) {
        return true;
    } else {
        return false;
    }
}
console.log(strict("shubham", "shubham"));



document.getElementById('parent').addEventListener('click', () => {
    console.log("div clicked");
    
},true);

document.getElementById('child').addEventListener('click', ()=> {
    console.log("button clicked");
});