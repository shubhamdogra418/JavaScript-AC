//constructor function
function Person () {
    this.name= 'shubham',
    this.age= '25'
}
/*
In JavaScript, a prototype can be used to add properties and methods to a constructor function. 
And objects inherit properties and methods from a prototype.

PROTOTYPE CHAINING
If an object tries to access the same property that is in the constructor function and the prototype object, 
the object takes the property from the constructor function.
*/
Person.prototype.place= "palampur";
Person.prototype.name= "abhishek";
Person.prototype.greet= function () {
    console.log("hello good morning",this.name);
}
Person.prototype= { state: "himachal pradesh"};

//creating objects
const person1= new Person();
const person2= new Person();

//In JavaScript, every function and object has a property named prototype by default
// trying to access the prototype property of a Person constructor function.
console.log(Person.Prototype);
//1st it will into constructor fxzn and then into prototype
console.log(person1.name);
console.log(person2.name);
console.log(person2.place);
console.log(person2.state);
person1.greet();

