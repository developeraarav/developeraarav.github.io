const texts = ["hello there!!", "I'm Aarav Pandey"]; // Array of texts to be typed
const typeSpeed = 100; // Typing speed in milliseconds
const eraseSpeed = 50; // Speed to erase each character in milliseconds
const delayAfterTyping = 1000; // Delay after typing each text in milliseconds
const delayAfterErasing = 500; // Delay after erasing each text in milliseconds

const nameElement = document.getElementById("name");
let textIndex = 0;
let charIndex = 0;
let isTyping = true;

function type() {
  if (charIndex < texts[textIndex].length) {
    nameElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typeSpeed);
  } else {
    isTyping = false;
    setTimeout(erase, delayAfterTyping);
  }
}

function erase() {
  if (charIndex > 0) {
    nameElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, eraseSpeed);
  } else {
    isTyping = true;
    if (textIndex < texts.length - 1) {
      textIndex++;
      setTimeout(type, delayAfterErasing);
    }
  }
}

// Start the typing animation when the page loads
window.onload = function () {
  type();
};


