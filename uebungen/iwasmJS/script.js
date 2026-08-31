const styleBtn = document.querySelector("button");
const styleOne = document.querySelector(".styleOne");
const styleTwo = document.querySelector(".styleTwo");

styleBtn.addEventListener("click", () => {
    styleOne.toggleAttribute("disabled");
    styleTwo.toggleAttribute("disabled");
});