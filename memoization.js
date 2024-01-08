// fibonacci series
function fibo (n) {
    if( n <=1) return n;
    return fibo(n-1) + fibo(n-2);
}

console.log(fibo(10));

// //cached the result >> resulting the result for further use
function fiboMemo ( n, cache ={}) {
    if(n<=1) return n;

    if(cache[n]) {
        return cache[n];
    }
    const result= fibo(n-1,cache) + fibo(n-2, cache);
    cache[n]= result;

    return result;
}


//another example
let cache={};
function add(num) {
    if (cache[num]) {
        console.log("cache result");
        return cache[num];
    } else {
        console.log("fresh computation");
        cache[num]= num+10;
        return cache[num];
    }
}

console.log(add(20)); //fresh
//redundant computations
console.log(add(20)); //cache
console.log(add(20)); //cache
console.log(add(20)); //cache










//sum
function calc (n) {
    let sum=0;
    for (let i=0;i<n;i++) {
        sum+=i;
    } return sum;   
}


console.time();
const result= calc(10);
console.log(result);
console.timeEnd();

//using high order functions
const memoize = (func) => {
    let cache= {}; //{ke,values}
    return function(...args) {
        let key= JSON.stringify(args);
        if(cache[key]) { // if( key in cache)
            console.log(cache);
            return cache[key];
        } else {
            console.log("for the first time");
            let result=func.apply(this, args);
            cache[key]= result;

            return result;
        }
    }
}

console.time();
const Efficient= memoize(calc); //returning another fxn so have to store
console.log(Efficient(10)); //call another function
console.timeEnd();

console.time();
console.log(Efficient(10)); //taking from cache
console.timeEnd();