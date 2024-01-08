// const count= true;
// let countValue= new Promise ( function (resolve, reject) {
//     if(count) {
//         resolve("promise resolve sexfully");
//     } else {
//         reject("promise has been rejected")
//     }
// });

// console.log(countValue);

// //error catching
// let countVal =new Promise(function (resolve,  reject) {
//     // resolve(" promise resolved");
//     reject();
// })
// countVal .then (function success(result) {
//     console.log(result);
// });
// countVal.catch(function notSuccess () {
//     console.error("not succes");
// })

// console.log(countVal);

//promise takes callback function
// const getPromise= new Promise((resolve,reject)=> {
//     // resolve("promise has been resolved");
//     reject("promise has been rejected");
// })

// //then, catch also takes callback function
// getPromise.then(()=> {
//     console.log("fulfilled");
// })
// getPromise.catch(()=> {
//     console.error("rejected");
// })

//fetching data from API
const github = async ()=> {
    const data=await  fetch( "https://api.github.com/users/shubhamdogra418");
    const json= await data.json();
    console.log(json);
    document.body.append(json.avatar_url);
}
github();


// const promise = new Promise((resolve, reject) => {
    //     let speed= 2;
    //     console.log(speed);
    //     if(speed > 5) {
    //         resolve("downloaded successfully");
    //     } else {
    //         reject("low speed");
    //     }
    // })
    //  .then((result)=> {
    //     console.log("success")
    //  })
    //  .catch((result) => {
    //     console.error(new Error("failed"))
    // })
    
    
    
    // const div = document.getElementById('parent');
    // function changeColor (color, delay) {
    //     return new Promise((resolve, reject) => {
    //         div.style.backgroundColor= color;
    //         setTimeout(() => {
    //             resolve("color changed")
    //         }, delay);
    //     })
    // }
    
    // changeColor("green",2000);
    // //ASYNC AWAIT
    //     async function demo() {
    //         await changeColor ("red",3000);
    //         await changeColor ("blue",1000);
    //         await changeColor ("green",1000);
    //         await changeColor ("yellow",1000);
    //         await changeColor ("black",1000);
    //         await changeColor ("skyblue",1000);
    //         await changeColor ("brown",1000);
    //         await changeColor ("tomato",1000);
    //         changeColor("gray",1000);
    //     }
    //     demo();
    
    
    //PROMISE CHAINING
    
    // changeColor("red",1000)
    // .then((result) => {
    //     console.log("1st done", result);
    //     return changeColor("blue",3000);
    // })
    // .then((result) => {
    //     console.log("2nd done", result);
    //     return changeColor("yellow", 1000);
    // })
    // .then((result)=> {
    //     console.log("3rd done", result);
    //     return changeColor("green",1000);
    // })
    // .catch((result) => {
    //     console.error(new Error(result));
    // })
    // .finally("task has been done, final cleanup");
    
    
    
    //getting the API data
    const h2= document.getElementById("h2");
    const head2= document.getElementById("head2");
    
    // async function getCatFact () {
    //     const data= await fetch("https://catfact.ninja/fact");
    //     const json= await data.json();
    //     console.log(json);
    //     h2.innerText= json.fact;
        
    //     try {
    //         const data2= await fetch("https://catfact.ninja/fact");
    //         const json2= await data2.json();
    //         console.log(json2);
    //         head2.innerText= json2.fact;
    
    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
    //     finally {
    //         console.log('all data fetched');
    //     }
    // }
    
    // getCatFact();
    