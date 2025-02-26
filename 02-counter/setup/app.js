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


//Reset button functionality
resetBtn.addEventListener("click", function() {
    currentValue = 0; // Decrease the value
    current.textContent = currentValue; // Update displayed value
    console.log("Reset Value:", currentValue);
});

//Increase button functionality
increaseBtn.addEventListener("click", function() {
    currentValue++; // Decrease the value
    current.textContent = currentValue; // Update displayed value
    console.log("Reset Value:", currentValue);
});
