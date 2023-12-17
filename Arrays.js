//arays mutatble unlike string which are imutable
//looping-- arrays,strings, objects

let names=["shubham", "neh", "abhishek", "walter", "eleven", "skyler"];
console.log(names);
console.log(names[1], names[2]);
console.log(names.length);
typeof names;

//looping
for(let i=0;i<names.length;i++) {
    console.log(names[i]);
}

//easy and preferred way 
for(let name of names) {
    console.log(name);
}

//aray methods
names.push("walter") //add at the end
names.pop(); //delete from the end
names.unshift("jesse"); //add at the start
names.shift(); //delete from the start
//does not retrun a new array (last index not inclusive)
console.log("slice method ",names.slice(1,4)); 
//SPLICE method-- changes made in orginal array (last index is inclusive)
//Splice( ) : change original array (add, remove, replace)
//splice( startIdx, delCount, newEl1... )
console.log("splice mthod ", names.splice(1,2,"will","dustin","mike"));
console.log("whole array ",names);

//converts array to string
console.log("toString method--> ",names.toString());

//For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class

let nums=[85, 97, 44, 37, 76, 60];
let n=nums.length;
let sum=0;
for(var num of nums) {
    sum+=num;
} console.log(sum/n);


//concatenation method >> Concat( ) : joins multiple arrays & returns result
console.log(names.concat(nums));

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. 
// Change the array to store final price after applying offer.

let prices=[250, 645, 300, 900, 50];
for(let i=0;i<prices.length;i++) {
    let offer=prices[i]/10;
    prices[i]=prices[i]-offer;
}
console.log(prices);

