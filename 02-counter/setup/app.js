let decreaseBtn = document.querySelector(".decrease");
let resetBtn = document.querySelector(".reset");
let increaseBtn = document.querySelector(".increase");

// Initialize the counter value
let current = document.querySelector("#value");
// Extract and ensure it's a number
let currentValue = parseInt(current.textContent);

// Decrease button functionality
decreaseBtn.addEventListener("click", function() {
    currentValue--; // Decrease the value
    current.textContent = currentValue; // Update displayed value
    console.log("Decreased Value:", currentValue);
});


// let decreaseBtn = document.querySelector(".decrease");
// let resetBtn = document.querySelector(".reset");
// let increaseBtn = document.querySelector(".increase");
// //initialize the counter value
// let current = document.querySelector(".value");


// decreaseBtn.addEventListener("click", function() {
//     //extract the current value
//     let currentValue = parseInt(current.textContent);
//     decreasedValue = currentValue--;
    
//     console.log(decreasedValue);
// })

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
