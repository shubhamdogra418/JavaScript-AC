const cart= ["apple", "banana", "papaya", "litchi"];
//returning a promise (an undefined object)
//CONSUMING THE PROMISE (using it)
const promise = createOrder(cart);
//attaching a callback function
promise.then(function (orderId) {
    return orderId;
})
.then(function (orderId) {
    return proceedToPayment(orderId)
})
.then (function (paymentInfo) {
    console.log(paymentInfo)
})
.catch(function (err) {
    console.log(err.message)
})
.then(function(orderId) {
    console.log("surely it will run, no matter what happens")
})

//.catch(err => console.log(err.message);

//PRODUCING THE PROMISE
//making my own promise
function createOrder (cart) {
    //constructor to initialize an aobject
    const pr= new Promise(function(resolve, reject) {
        //promise logic here (valdating the cart) //if order get validate it otherwise cancel 
        if(!validateCart(cart)) {
            const err= new Error("Order Not Valid on Cart");
            reject(err);
        }
        const orderId=36212;
        if(orderId) {
            setTimeout(function() {
                resolve(`promise resolved ${orderId}`);
            },2000); //happens in async operation
        }
    }); return pr;
}

//another promise
function proceedToPayment (orderId) {
    return new Promise((resolve,reject) => {
        resolve("payment is successfull");
    });
}


function validateCart () {
    return true;
}