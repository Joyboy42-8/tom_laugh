let button = document.getElementById("button");
let laugh = new Audio("tom_laugh.mp3");

button.addEventListener("click", () => {
  laugh.play();
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});
