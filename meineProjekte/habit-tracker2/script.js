const boxes = document.querySelectorAll("td:not(:first-child)");

const savedBoxes = JSON.parse(localStorage.getItem("boxes"));

if (savedBoxes) {
    boxes.forEach ((box, index) => {
        if (savedBoxes[index]) {
            box.classList.add(savedBoxes[index]);
        }
    });
}

boxes.forEach(box => {
    box.addEventListener("click", () => {

        if(!box.classList.contains("green") &&
        !box.classList.contains("red")) {
        box.classList.add("green");
        }

        else if(box.classList.contains("green")) {
        box.classList.remove("green");
        box.classList.add("red");
        }

        else {
            box.classList.remove("red");
        }

        const states = [];

        boxes.forEach(box => {
            if (box.classList.contains("green")) {
                states.push("green");
            }
            else if (box.classList.contains("red")) {
                states.push("red");
            }
            else {
                states.push("");
            }
        });

        localStorage.setItem("boxes", JSON.stringify(states));
    
    });
});