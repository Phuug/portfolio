const enter = document.querySelector(".enter");
const wert = document.querySelectorAll(".r");
const output = [];
const input = document.querySelector(".input");
const dlt = document.querySelector(".delete");


    wert.forEach(symbol => {
        symbol.addEventListener("click", () => {
            output.push(symbol.innerHTML);
            const eingabe = output.join("");
            input.value = eingabe;
        }); 
    });  

    enter.addEventListener("click", () => {
        const ausdruck = output.join("");
        input.value = eval(ausdruck);
    });

    dlt.addEventListener("click", () => {
        output.length = 0;
        const eingabe = output.join("");
        input.value = "0";
    });