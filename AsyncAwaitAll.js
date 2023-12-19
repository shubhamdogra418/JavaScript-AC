
function getData(dataId, callBackFxn) {
    setTimeout(() => {
       console.log("data is", dataId)
       if(callBackFxn) {
        callBackFxn();
       } 
    }, 2000);
} 


// getData(123, getData(234));
//this is CALLBACK HELL, INVERSION OF CONNTROL, PYRAMID OF DOOM
getData(123, ()=> {
    console.log("geting data 1...")
    getData(456, ()=> {
        console.log("getting data 2....")
        getData(789, ()=> {
            console.log("getting data 3...")
            getData(987,()=> {
                console.log("getting data 4....")
                getData(654, ()=> {
                    console.log("getting data 5....")
                    getData(321)
                })
            })
        })
    });
});

//PROMISE is an object representing the eventual completion of an async operation.
//let promise= new Promise ((resolve, reject) => {---});


let promise = new Promise((resolve,reject) => {
    console.log("promise here")
    resolve("sorted and fulfilled")
    reject("failed bro")
})
.catch(console.log("error handeled"));
 

function getData(dataId, callBackFxn) {
    //creating our own promise
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("got the data");
            reject("not success");
            if(callBackFxn) {
                callBackFxn();
            }
        }, 3000);
    })
 }
getData(123);


// handeling PROMISES, .then, .catch

const promise1= getPromise1();
//further process, if resolved
promise1.then((res) => {
    console.log("promise resolved: ",res)
})
.catch((rej)=> {
    console.log("promise rejected: ",rej) 
})

// promise chaining
const getPromise1 =() => {
    return new Promise((resolve,reject) => {
        console.log("data 1")
        resolve("success")
        // reject("failed")
    })
}

const getPromise2 =() => {
    return new Promise((resolve,reject) => {
        console.log("data 2")
        resolve("success")
        // reject("failed")
    })
}

console.log("fetching data 1");
getPromise1().then((res) => {
    console.log(res);
    getPromise2().then((res)=> {
        console.log("fetching data 2");
        console.log(res)
    })
})


//Async-Await
function getInfo(name) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("name is ",name)
            resolve("success")
        }, 2000);
    })
}
   
function getRoll (rollno) {
    setTimeout(()=> {
        console.log(1883);
    },2000);
}

//asyncronously returning the promise
async function getInformation() {
    await getInfo("shubham");
    await getInfo("abhishek");
    await getInfo("evan");
    await getInfo("raj");
    await getInfo("vicky");

}
getInformation();


// //IIFE (immediately invoked function)
//no need to call, and called only once 
(function() {
console.log("hello I'm IIFE")
}) ();