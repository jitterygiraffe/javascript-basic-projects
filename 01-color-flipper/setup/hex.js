document.getElementById("btn").addEventListener("click", ()=> {
    document.body.style.backgroundColor = randomColor();
});


let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomColor() {
   let hash = "#";
   
    for (let i = 0; i<6; i++) {
       hash += hexCode[Math.floor(Math.random() * hexCode.length)];
    }
     return hash;
} ;

//console.log(randomColor());

//1. click button to change color randomly
// - code to have random color changes
//             -
// -code for button to listen to being clicked
