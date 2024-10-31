const texts = ["Verify the integrity of your documents with trusted signatures.", "Safeguard against unauthorized alterations and misuse.", "Simplify your workflows with secure and reliable signature verification."];
let index = 0;

function showText() {
    const animatedTextElement = document.getElementById('animated-text');
    animatedTextElement.textContent = texts[index];
    index = (index + 1) % texts.length; // Cycle through the texts
}

setInterval(showText, 3000); // Change text every 2 seconds
showText(); // Initial call to show first text
