import gsap from "gsap";

export const scrambleText = (element, text) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // only alphabet characters
  const duration = 1.2;
  const oldText = element.innerText;
  const length = oldText.length; // length of the current text (so the scrambling matches it)

  return new Promise((resolve) => {
    let queue = [];

    // Create the queue with scramble settings for each character
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || " ";  // pad with spaces if necessary
      const to = text[i] || " ";       // pad with spaces if necessary
      const start = Math.floor(Math.random() * duration * 10);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }

    let frame = 0;
    const update = () => {
      let output = "";
      let complete = 0;

      // Loop through the queue and apply the scrambling effect
      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end } = queue[i];
        
        if (frame >= end) {
          complete++;
          output += to; // Final character (not scrambled)
        } else if (frame >= start) {
          // Scramble only alphabetic characters, keep others as is
          output += /^[a-zA-Z]$/.test(from)
            ? chars[Math.floor(Math.random() * chars.length)] // scramble alphabet
            : from; // keep non-alphabet characters as they are
        } else {
          output += from; // Initial character (before scrambling starts)
        }
      }

      element.querySelector(".scrambled").innerText = output; // Update the scrambled text

      if (complete === queue.length) {
        resolve(); // Resolve when all characters are finished
      } else {
        requestAnimationFrame(update);
        frame++;
      }
    };

    update(); // Start the animation
  });
};

export const applyScrambleToNavbar = (navbarLinks) => {
  navbarLinks.forEach((link) => {
    const originalText = link.innerText; // Get the original text
    
    // Create a new span for the scrambled text
    const scrambledTextElement = document.createElement("span");
    scrambledTextElement.classList.add("scrambled");
    scrambledTextElement.style.position = "absolute"; // Hide the scrambled text in place of the original
    scrambledTextElement.style.top = 0;
    scrambledTextElement.style.left = 0;
    scrambledTextElement.style.opacity = 0; // Initially invisible
    scrambledTextElement.innerText = originalText; // Set the initial scrambled text
    link.appendChild(scrambledTextElement);

    // Hide the original text
    link.style.position = "relative"; // Ensure the link's position is relative to show absolute elements
    link.style.opacity = 1; // Make sure the original is visible at first
    link.style.transition = `opacity ${1.2}s ease-out`; // Make opacity transition smooth
    
    link.addEventListener("mouseover", () => {
      // Fade out the original text and show scrambled text
      gsap.to(link, { opacity: 0, duration: 0.5 }); // Fade out original
      gsap.to(scrambledTextElement, { opacity: 1, duration: 0.5 }); // Fade in scrambled

      scrambleText(link, originalText) // Scramble the link text on hover
        .then(() => {
          // When the scrambling is complete, reset to original state
          gsap.to(link, { opacity: 1, duration: 0.5 }); // Fade in original
          gsap.to(scrambledTextElement, { opacity: 0, duration: 0.5 }); // Fade out scrambled
        });
    });
  });
};
