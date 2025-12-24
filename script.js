// Minimal JS on purpose
// Keeps the page alive and ready for future logic

const text = document.getElementById("statusText");

// Example hook: slight random glow refresh
setInterval(() => {
  const glow = Math.floor(Math.random() * 15) + 20;
  text.style.textShadow = `
    0 0 ${glow}px rgba(255, 0, 87, 0.35),
    0 0 ${glow * 2}px rgba(255, 0, 87, 0.25)
  `;
}, 1500);
