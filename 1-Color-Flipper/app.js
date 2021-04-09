const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//The querySelector() method only returns the first element that matches the specified selectors.

btn.addEventListener("click", function () {
    // get random number between 0 - 3 
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
// The textContent property sets or returns the text content of the specified node, and all its descendants.
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);

}