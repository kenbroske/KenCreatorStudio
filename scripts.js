
// Click Me button
document.getElementById("clickMeBtn").addEventListener("click", () => {
  alert("You clicked the first button! 🚀");
});

// Alert Me button
document.getElementById("alertBtn").addEventListener("click", () => {
  alert("Hello from Ken Creator Studio! ⚡");
});

// Change Text button
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("dynamicText").textContent = "Boom! Text changed!";
});
console.log("Ken Creator Studio is ready to tinker!");