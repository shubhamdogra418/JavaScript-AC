// let map= new Map();
// console.log(map.set(1, "shubham"));
// console.log(map.set('1', "dogra"));
// console.log(map.set("love birds", "shubNeh"));
// console.log(map.size);

// console.log(map.get('love birds'));

// let arr=[1,2,3,3,5,2,1];
// let mySet= new Set(arr); //takes only unique elements

// // Q. delete all dupliacte valuse from an array
// const uniqueEls= [...mySet]; //spread operator (expands, rest- shrinks, condense)
// console.log(uniqueEls);
// // console.log(arr);
// // console.log(set);

// //ADD
// console.log(mySet.add(21));
// console.log(mySet.add("shubham")); //add string
// console.log(mySet.add('21')); //add chaarcater
// let newArr= [98,89,87,78];
// console.log(mySet.add(newArr)); //adds array
// console.log(mySet.add({ name: "shubham"})); // add object
// console.log(mySet.add(false));

// //DELETE
// console.log(mySet.delete(2)); //returns boolean
// console.log(mySet.delete({name}));
// console.log(mySet.delete(false));
// console.log(mySet.delete(newArr)); //n JS object types are always referenced while primitive types are not.

// // mySet.clear(); //delete all the elements

// console.log("has", mySet.has("shubham"));
// console.log(mySet.has("neh"));

// //SIZE of set
// console.log(mySet.size);

// console.log(mySet.keys());
// console.log(mySet.values());
// console.log(mySet.entries());


//MAP
const myMap= new Map([ ['name', 'shubham'], ['place', 'himachalpradesh']]);
myMap.set('hobby', 'travel');
myMap.set({name: 'shubham'}, "apple"); //add-set
console.log(myMap.delete('hobby')); //delete
// myMap.clear(); //clear all
console.log(myMap.has('name')); //return boolean only for key and not values
console.log(myMap.has('shubham')); // has method not for values
console.log(myMap.size); //return size
console.log(myMap.get('name'));
myMap.forEach ((value, key) => {
    console.log(key,value);
});

console.log(Array.from(myMap.keys()));
console.log(Array.from(myMap.values()));


// console.log(myMap);






