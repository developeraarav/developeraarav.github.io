// Function to initialize the typing animation
function initTyped() {
  const textArray = ["hello there!!", "im aarav pandey"]; // Array of texts to be typed
  const options = {
    typeSpeed: 80, // Typing speed in milliseconds
    loop: false, // Whether to loop through the texts or not
    showCursor: true, // Whether to display the cursor or not
    cursorChar: "|", // Custom cursor character
  };

  // Initialize Typed.js on the <h1> element with ID "name"
  new Typed("#name", options).typed = textArray;
}

// Call the function to start the typing animation
initTyped();
