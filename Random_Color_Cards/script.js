// Selecting the container element from the DOM
const container = document.querySelector('.container');

// Function to check if a color is light or dark
function isLightColor(color) {
    // Extracting red, green, and blue components from the color string
    const [, red, green, blue] = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    // Calculating the perceived brightness using the formula for relative luminance
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

    // If brightness is greater than or equal to 128, it's considered light
    return brightness >= 128;
}

// Loop to create and style cards
for (let index = 0; index < 15; index++) {
    // Generating a random color for the card background
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    // Creating a card element
    const card = document.createElement('div');
    card.innerHTML = randomColor;
    card.style.backgroundColor = randomColor;
    card.classList.add('card');

    // Checking if the background color is light
    if (isLightColor(randomColor)) {
        card.style.color = 'black'; // Set text color to black for light backgrounds
    }

    // Appending the card to the container
    container.appendChild(card);
}





// //                   *** Destructuring Assignment ***
// // Task 1: Destructuring Arrays
// // Use array destructuring to extract the first and last elements into separate variables.

// const myArr = [1, 2, 3, 4, 5]
// let [first, , , , last ] = myArr

// console.log(first);
// console.log(last);


// Task 2: Swapping Variables
// Declare two variables a and b and assign them some values.
// Use destructuring assignment to swap the values of a and b without using a temporary variable.

// let a = [7];
// let b = [9];
// [a] = b;  here "a" refers to first "a" that we declared earlier.
// console.log(a);  // 9


// // Task 3: Nested Destructuring
// // Create an object with nested properties (e.g., { person: { name: 'John', age: 30 } }).
// // Use destructuring assignment to extract the name property into a variable.

// const obj = {
//     gender: 'Male',
//     city: 'USA',
//     person: { name: 'John', age: 30 },
//     education: 'PHD'
// }

// let { person: { name } } = obj
// console.log(name);  // John


// // Task 4: Rest Syntax
// Create an array with more than three elements.
// Use array destructuring with the rest syntax to extract the first two elements into separate variables, and collect the rest of the elements into another array.

// let myArr = [1, 2, 3, 4, 5, 6];
// let [first, second, ...rest] = myArr
// console.log(rest);


// // Task 5: Default Values
// Create an object with some properties, including one that might not exist.
// Use object destructuring with default values to extract a property that may or may not be present in the object.

// const person = { name: 'John', age: 30 };
// const { name, country = 'Unknown' } = person;
// console.log(person);
// console.log(country);