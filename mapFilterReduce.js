let arr=[2,3,14,5,6,8,18,15];
const result=arr.map((num)=> num*2);
console.log(result);
console.log(arr.filter((num)=> num%2===0));
console.log(arr.reduce((sum, acc)=> sum+acc));

//find maximum element
let max=0; 
for(let i=0;i<arr.length;i++) {
    if(arr[i] > max) {
        max=arr[i];
    }
} console.log(max); 

let nums=[12,32,13,56,88,33,11];
console.log(nums.reduce((max, curr)=> {
    if(curr > max) {
        max=curr;
    } return max;
}))

let students=[
    { name: "shubham", roll: 21, marks: 80 },
    { name: "harry", roll: 32, marks: 89}, 
    { name: "abhishek", roll: 23, marks: 83},
];

//print only the names whose roll if more than 22
const rolll= students.filter((stu)=> stu.roll > 22).map((x)=> x.name);
console.log(rolll);

//convert names to upper case
const upper=students.map((stu)=> stu.name.toUpperCase());
console.log(upper);


const finall= students.filter((stu)=> stu.marks > 82 && stu.roll>22);
console.log(finall);

for(let i=0;i<finall.length;i++) {
    console.log(finall[i]);
}

//factorial
function fact(n) {
    if(n ==0) return 1;
    return n*fact(n-1);
} 
console.log(fact(5));

