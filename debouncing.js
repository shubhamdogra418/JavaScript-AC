// function handleInput(event) {
//     // Perform input-related tasks, e.g., search or validation
//     console.log('Input event occurred:', event.target.value);
//   }
  
//   const debouncedInputHandler = debounce(handleInput, 300);
  
//   const inputElement = document.getElementById('search-input');
  
//   inputElement.addEventListener('input', debouncedInputHandler);

let count=0;
function getData() {
    console.log("fetching data", count++);
}

const doDebounce=  function(fn, delay) {
    let timer;
    return function() {
        let context= this,
        args=arguments;
        clearTimeout(timer);
        timer= setTimeout(() => {
            fn.apply(context,args)
        }, delay);
    }
}

const betterFunction = doDebounce(getData,200);