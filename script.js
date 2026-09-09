const menuBtn = document.querySelector(".menu-button");
const burger = document.querySelector(".burger");

menuBtn.addEventListener("click", () => {
    burger.classList.toggle("hidden");
});

const projects = document.querySelectorAll(".project");
const mainProject = document.querySelector(".mainProject");

projects.forEach(project => {
    project.addEventListener("click", (event) => {
        event.preventDefault();
        const projectValue = project.innerHTML;
        mainProject.innerHTML = `
        ${projectValue}
        `
    });
});