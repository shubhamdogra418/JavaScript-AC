//evolution from callback functions >> promises >> async and await
const cart=["oreo", "dark fantasy", "almonds", "mangoes"];
createOrder(cart);
proceedToPayment(orderId);

function createOrder (orderId) {
    proceedToPayment(orderId);
}

//as a callback function >> making CALLBACK HELL (PYRAMID OF DOOM)
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showPaymentSummary(paymentInfo,  function () {
            updateWalletBalance();
        }); 
    });
});  //problemis inversion of control (giving control to something else)

//PROMISE IS A PLACEHOLDER FOR A CERTAIN POINT OF TIME WHICH WILL BE FILLED WIHTH DATA AFTER A CERTAIN POINT OF TIME
// A PROMISE IS AN OBJECT REPRESENTING THE EVENTUAL COMPLETION OF AN ASYNC OPERATION
//returning a promise and store in promise object {undefined(first)}
const promise= createOrder(cart);
//promise will return an object >> as it is async so it will take time 
// and after that it will fill the object with data

promise.then(function (orderId) {
    proceedToPayment(orderId);
}); //it is gurantee that proceedToPayment will run for sure after promise get done with it


//PROMISE CHAINING >> solution of CALLBACK HELL
//setting the flow of data (return) also to avoid loosing of data
createOrder(cart)
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    return showPaymentSummary(paymentInfo);
})
.then(function (paymentInfo) {
    return updateWalletBalance();
}) 

//using arrow functions
createOrder(cart)
.then (orderId => proceedToPayment(orderId))
.then(paymentInfo => showPaymentSummary(paymentInfo))
.then(paymentInfo => updateWalletBalance(paymentInfo));

//example
const API_URL="https://api.github.com/users/shubhamdogra418";
const user= fetch(API_URL);
user.then(function(data) {
    console.log(data);
})

//promise will be execute only once-- either- fullfilled, rejected, pending
//promise objects are immutable, resolved only once