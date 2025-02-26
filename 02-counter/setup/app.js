let decreaseBtn = document.querySelector("decrease");
let resetBtn = document.querySelector("reset");
let increaseBtn = document.querySelector("increase");
//initialize the counter value
let currentValue = document.getElementById("value");

decreaseBtn.addEventListener("click", function() {
    decreasedValue = currentValue--;
    console.log(decreasedValue);
})

// function decreaseCounter(){
//     decreaseBtn.addEventListener("click", ()=> {
//     decreased = currentValue--;
//     // currentValue.innerText = decreased;
//     console.log(decreased);
//         }   
//     )
// };



//function to decrease the count



// each button should have an event listener 
// that triggers certain behavior
//1. to decrease
//2. to reset
//3. to increase
