// script.js

// Part 1: Variable declarations and conditionals
let userName = "John Doe"; // Declare a variable for the user's name
let userAge = 25; // Declare a variable for the user's age

// Check if the user is an adult
if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is not an adult.");
}

// Part 2: Custom functions
// Function to greet the user
function greetUser(name) {
    return "Hello, " + name + "!";
}

// Function to calculate the square of a number
function squareNumber(num) {
    return num * num;
}

// Part 3: Loop examples
// Example 1: For loop to display numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

// Example 2: While loop to count down from 5 to 1
let count = 5;
while (count > 0) {
    console.log("Countdown: " + count);
    count--;
}

// Part 4: DOM interactions
// Change the content of an element with id 'greeting'
document.getElementById('greeting').textContent = greetUser(userName);

// Change the background color of an element with id 'colorBox'
document.getElementById('colorBox').style.backgroundColor = 'lightblue';

// Add a click event listener to a button with id 'submitButton'
document.getElementById('submitButton').addEventListener('click', function() {
    alert("Button clicked!");
});