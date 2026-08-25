const menuBtn = document.querySelector(".menu-button");
const burger = document.querySelector(".burger");

menuBtn.addEventListener("click", () => {
    burger.classList.toggle("hidden");
});