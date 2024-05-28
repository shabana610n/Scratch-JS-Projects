// Selecting elements from the HTML document
const image = document.querySelector('img');
const testimonial = document.querySelector('h3');
const author = document.querySelector('h4');

// Initializing count variable to track current testimonial index
let count = 0;

// Function to update testimonial, author, and image every 3 seconds
setInterval(() => {
    // Check if count exceeds the length of either array, reset if true
    if (count >= authorsList.length || count >= testimonialsList.length) {
        count = 0;
    }

    // Update testimonial text and author name
    testimonial.innerHTML = testimonialsList[count];
    author.innerHTML = authorsList[count];

    // Generate a unique URL for the image to prevent caching
    image.src = `https://source.unsplash.com/random/150×150/?face&${Date.now()}`;

    // Increment count for the next iteration
    count++;
}, 3000);