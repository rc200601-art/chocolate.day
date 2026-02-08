const chocolate = document.getElementById("chocolate");
const blocks = document.querySelectorAll(".blocks span");
const heart = document.getElementById("heart");
const message = document.getElementById("message");
const hint = document.getElementById("hint");

let index = 0;

chocolate.addEventListener("click", () => {

  if (index < blocks.length) {
    blocks[index].classList.add("eaten");
    index++;

    // chocolate shrink effect
    chocolate.style.transform = `scale(${1 - index * 0.05})`;
  }

  if (index === blocks.length) {
    hint.style.display = "none";
    heart.classList.add("pop");

    setTimeout(() => {
      chocolate.style.display = "none";
      message.classList.remove("hidden");
    }, 600);
  }
});
