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

        if(!box.classList.contains("blue") &&
        !box.classList.contains("turkis") &&
        !box.classList.contains("green") &&
        !box.classList.contains("violet") &&
        !box.classList.contains("red")) {
        box.classList.add("blue");
        }

        else if(box.classList.contains("blue")) {
        box.classList.remove("blue");
        box.classList.add("turkis");
        }

        else if(box.classList.contains("turkis")) {
        box.classList.remove("turkis");
        box.classList.add("green");
        }

        else if(box.classList.contains("green")) {
        box.classList.remove("green");
        box.classList.add("violet");
        }

        else if(box.classList.contains("violet")) {
        box.classList.remove("violet");
        box.classList.add("red");
        }

        else {
            box.classList.remove("red");
        }

        const states = [];

        boxes.forEach(box => {
            if (box.classList.contains("blue")) {
                states.push("blue");
            }
            else if (box.classList.contains("green")) {
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