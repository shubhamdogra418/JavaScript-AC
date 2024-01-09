
const normalFunction = () => {
    console.count("normal function");
}
window.addEventListener('resize', normalFunction);


const throttle = function(func, delay) {
    let flag= true;
    return function() {
        let context= this;
        args=arguments;
        if(flag) {
            func.apply(context,args);
            flag=false;
            setTimeout(() => {
                flag=true;
            }, delay);
        }
    }
}

function expensive() {
    console.count("making expensive call susing throttling");
}

const betterExpensive= throttle(expensive,200);
window.addEventListener('resize', betterExpensive);