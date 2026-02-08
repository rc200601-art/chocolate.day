const chocolate = document.getElementById("chocolate");
const blocks = document.querySelectorAll(".top span");
const heart = document.getElementById("heart");
const message = document.getElementById("message");
const hint = document.getElementById("hint");

let i = 0;

chocolate.addEventListener("click", () => {

  if (i < blocks.length) {
    blocks[i].classList.add("eaten");
    chocolate.style.transform =
      `rotateX(18deg) rotateY(-18deg) scale(${1 - i * 0.05})`;
    i++;
  }

  if (i === blocks.length) {
    heart.classList.add("pop");
    hint.style.display = "none";

    setTimeout(() => {
      chocolate.style.display = "none";
      message.classList.remove("hidden");
    }, 700);
  }
});
