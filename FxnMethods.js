
//functions
//hoisting
name("shubham dogra"); //reguklar fxns are hoisted
function name(name) {
    console.log({name}) //object
    console.log(name) //value
}
name("abhishek nath")


//arrow function
// info("shubham dogra", 25); //arrow fxns not hoisted
const info =(name, age) => {
    console.log("my name is ", name, "age is ", age);
    console.log(`my name is ${name} age is ${age}`)
}
info("shubham",25); //hindered implementation


//function composition-- fxn inside a fxn
//closures-- fxn accessing lexcial scope of its parent
function outer() {
    var name="shubham";
    function inner () {
        console.log(name);
    } 
} 

//function composition
const person= {
    name: "shubham dogra",
    greet() {
        console.log(`object--- my name is ${this.name}`)
    }
};
console.log("object", person.name);
person.greet();

//function composition
// fxn inside the fxn

//Question-- Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

// const name="naomi";
function findVowels (str) {
    let count=0;
    for (let char of str ) {
        // console.log(char);
        if(char==='a' ||char==='e'|| char==='o' ||char==='i' ||char==='u') {
            count++;
        } 
    } console.log(count);
} findVowels("chandigarh university");

//Create an arrow function to perform the same task.
const vowelNo =(str) => {
    let count=0;
    for( let char of str) {
        if(char==='u' ||char==='o' ||char==='i' ||char==='e' ||char==='a') {
            count++;
        }
    }   console.log(count);
}
vowelNo("javascript");

//loops
// forEach >> doest not return anythng it is only for playing purposes
let arr=[2,4,3,5,6,7];
//forEach- taking other fxn as callback fxn- HOF
arr.forEach(function printVal(val,i,arr) {
    console.log(`value: ${val*4} index ${i} array ${arr}`);
})
arr.forEach((e)=> console.log(e*3));
console.log(arr);
arr.map((e)=> console.log(e*3))
console.log(arr);

// For a given array of numbers, print the square of each value using the forEach loop.
arr.forEach((e)=> console.log(e*e));


//MAP >> makes new array
//arr.map( callbackFnx( value, index, array ) )
console.log("map ", arr.map((e)=> e*2))
let newArr= arr.map((e)=> {return e*2});
console.log(newArr);
//FILTER
//Creates a new array of elements that give true for a condition/filter.
console.log("filter ", arr.filter((e)=> e%2==0))

//REDUCE
//Performs some operations & reduces the array to a single value. It returns
// that single value
//refer below mentioned program

//We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marks=[80,90,85,92,94];
console.log(marks.filter((e)=> e>90));

// Take a number n as input from user. Create an array of numbers from 1 to n.
// let n=prompt("Enter a number");
let nums=[];
for(let i=1;i<=n;i++) {
    nums[i-1]=i;
} console.log(nums);

// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array
// let arr=[2,4,3,5,6,7];
//initial value (arr[0]+IV)
console.log(arr.reduce((acc,curr)=> acc+curr,3));
console.log(arr.reduce((acc,curr)=> acc*curr));

//HIGHER ORDER FUNCTIONS- taking other fxns as args or return other fxns
