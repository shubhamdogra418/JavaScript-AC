const info= {
    fname: "shubham",
    lname: "dogra",
    further: function () {
        return this.fname + " "+ this.lname;
    }
}

const user1= {
    fname: "cole",
    lname: "walter"
}

const  user2={
    fname: "jessey",
    lname: "pinkman"
};

let fullInfo= function (city, state)  {
    return this.fname+ " "+ this.lname+ " "+ city + " "+ state;
};

console.log(fullInfo.call(user1, "colarado", "united states"));
console.log(fullInfo.call(user2, "heisenberg", "new york"));
console.log(fullInfo.apply(info, ["palampur", "himachal pradesh"]));
const dbData= fullInfo.bind(user2, "new jersey","australia" );
console.log(dbData());

//pollyfill for call
Function.prototype.myCall= function(context, ...args) {
    if( typeof this !== 'function') {
        throw new Error(this +" is not a function")
    }
    context.fn= this;
    return context.fn(...args);
}
console.log(fullInfo.myCall(user1, "dehra","kangra"));


//pollyfill for apply
Function.prototype.myApply= function(context={}, args=[]) {
    if( typeof this !== 'function') {
        throw new Error(this +" is not a function")
    }
    context.fn= this;
    return context.fn(...args);
}
console.log(fullInfo.myApply(user2, ["colarado","united states"]));

//pollyfill for bind
Function.prototype.myBind= function(context={}, ...args) {
    if(typeof this !== 'function') {
        throw new Error(this, " is not callable");
    }
    context.fn=this;
    return function() {
        return context.fn(...args);
    }
}

const bindMethod= fullInfo.myBind(user1, "HYD","TS");
console.log(bindMethod()); 
