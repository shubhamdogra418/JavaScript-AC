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