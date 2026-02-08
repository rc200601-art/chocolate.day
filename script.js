const chocolate = document.getElementById("chocolate");
const heart = document.getElementById("heart");
const message = document.getElementById("message");
const hint = document.getElementById("hint");

let bites = 0;
const maxBites = 5;

chocolate.addEventListener("click", () => {
  bites++;

  if (bites < maxBites) {
    chocolate.classList.add("bite");
    setTimeout(() => chocolate.classList.remove("bite"), 200);
  }

  if (bites === maxBites) {
    heart.classList.add("pop");
    hint.style.display = "none";

    setTimeout(() => {
      chocolate.style.display = "none";
      message.classList.remove("hidden");
    }, 600);
  }
});
