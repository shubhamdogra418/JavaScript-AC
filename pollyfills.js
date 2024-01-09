// //Array.includeds method

// let arr=[2,4,6,8,43,45,32];

// //FOR EACH
// // arr.forEach((num)=> console.log(num*2));

// // //prototype for forEach
// // Array.prototype.myForEach= function(callback) {
// //     for(let i=0;i<this.length;i++) {
// //         callback(this[i], i, this); //element, index, array
// //     }
// // }
// // arr.myForEach((num)=> console.log(num*2));


// //MAP
//     // arr.map((num)=> console.log(num*3));
// //apply the consdition and store as well
// Array.prototype.myMap= function (callback) {
//     let result=[];

//     for(let i=0; i<this.length; i++) {
//         result.push(callback(this[i], i, this));
//     } 
//     return result;
// }
// const newArr= arr.myMap((num)=> num*5);
// console.log(newArr);


// //FILTER
// console.log(arr.filter((num)=> num%2==0));
// // return new array, include only from the array who pass the condition
// Array.prototype.myFilter= function(callback) {
//     let result=[];

//     for ( let i=0; i<this.length; i++) {
//         if (callback(this[i], i, this) == true) {
//             result.push(this[i]);
//         }
//     } return result;
// }

// let newArray= arr.myFilter((num)=> num%2==0);
// console.log(newArray);

// //REDUCE METHOD
// console.log(arr.reduce((curr,accumulator)=> accumulator+curr));
// //pollyfill for reduce method
// Array.prototype.myReduce = function (callback, intialValue) {
//     let accumulator = intialValue;
//     for( let i=0; i<this.length; i++) {
//         if(i===0 && intialValue == undefined) {
//             accumulator == this[i];
//         }
//         accumulator = callback(accumulator, this[i], i, this);
//     } return accumulator;
// }

// const finalVal= arr.myReduce((accumulator,curr)=> curr+accumulator,0);
// console.log(finalVal);



// //ARRAY.INCLUDES
// console.log(arr.includes(439));
// //Array.inlcudes prototype
// Array.prototype.myArrayIncludes= function (searchElement) {
//     for(let i=0;i< this.length;i++) {
//         if( this[i] == searchElement ) {
//             return true;
//         }
//     } return false;
// }
// console.log("Array.Includes prototype",  arr.myArrayIncludes(63));

// //throttling
// const throttle = function(func, delay) {
//     let flag= true;
//     return function() {
//         let context= this;
//         args=arguments;
//         if(flag) {
//             func.apply(context,args);
//             flag=false;
//             setTimeout(() => {
//                 flag=true;
//             }, delay);
//         }
//     }
// }

// //pollyfills
// const doDebounce=  function(fn, delay) {
//     let timer;
//     return function() {
//         let context= this,
//         args=arguments;
//         clearTimeout(timer);
//         timer= setTimeout(() => {
//             fn.apply(context,args)
//         }, delay);
//     }
// }


const user1= {
    fname: "shubham",
    lname: "dogra",
}

const user2= {
    fname: "abhishek",
    lname: "nath",
}
let fullInfo= function (city, state) {
    return this.fname+ " "+ this.lname +" "+ city+" "+state;
}
console.log(fullInfo.call(user2, "palampur", "himachal"));
console.log(fullInfo.apply(user2, ["hamirpur", "uttrakhand"]));
const other= fullInfo.bind(user2, "palampur", "himachal");
console.log(other());

//pollyfill for call
Function.prototype.myCall= function(context, ...args) {
    if( typeof this !== 'function') {
        throw new Error(this +" is not a function")
    }
    context.fn= this;
    return context.fn(...args);
}
console.log(fullInfo.myCall(user1, "dehra","kangra"));


//pollyfill for apply
Function.prototype.myApply= function(context={}, args=[]) {
    if( typeof this !== 'function') {
        throw new Error(this +" is not a function")
    }
    context.fn= this;
    return context.fn(...args);
}
console.log(fullInfo.myApply(user2, ["colarado","united states"]));

//pollyfill for bind
Function.prototype.myBind= function(context={}, ...args) {
    if(typeof this !== 'function') {
        throw new Error(this, " is not callable");
    }
    context.fn=this;
    return function() {
        return context.fn(...args);
    }
}

const bindMethod= fullInfo.myBind(user1, "HYD","TS");
console.log(bindMethod()); 
