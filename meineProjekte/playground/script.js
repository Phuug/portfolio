const input = document.querySelector(".input");
const btn = document.querySelector(".button");
const main = document.querySelector(".main");

btn.addEventListener("click", () =>{
    const degrees = input.value;
    main.style.background = `linear-gradient(${degrees}deg,rgb(241,193,233),rgb(187,187,243))`;
});

const hereBtn = document.querySelector(".hereButton");
const sth = document.querySelector(".something");

hereBtn.addEventListener("click",() =>{
    sth.classList.toggle("hidden");
});

sth.addEventListener("click",() =>{
    sth.classList.toggle("hidden");
});

const dice = document.querySelector(".dice");

dice.addEventListener("click", () => {
        let dicenumber = Math.floor(Math.random()*6)+1;
        dice.src = `./MathClipArt--Single-Die-with-${dicenumber}-Showing.png.webp`;
        setTimeout(() => { let firstdicenumber = Math.floor(Math.random()*6)+1;
        dice.src = `./MathClipArt--Single-Die-with-${firstdicenumber}-Showing.png.webp`}, 40);
        setTimeout(() => { let seconddicenumber = Math.floor(Math.random()*6)+1;
        dice.src = `./MathClipArt--Single-Die-with-${seconddicenumber}-Showing.png.webp`}, 80);
        setTimeout(() => { let thirddicenumber = Math.floor(Math.random()*6)+1;
        dice.src = `./MathClipArt--Single-Die-with-${thirddicenumber}-Showing.png.webp`}, 120);
        setTimeout(() => { let fourthdicenumber = Math.floor(Math.random()*6)+1;
        dice.src = `./MathClipArt--Single-Die-with-${fourthdicenumber}-Showing.png.webp`}, 160);
        setTimeout(() => { let fifthdicenumber = Math.floor(Math.random()*6)+1;
        dice.src = `./MathClipArt--Single-Die-with-${fifthdicenumber}-Showing.png.webp`}, 200);
        setTimeout(() => { let sixthdicenumber = Math.floor(Math.random()*6)+1;
        dice.src = `./MathClipArt--Single-Die-with-${sixthdicenumber}-Showing.png.webp`}, 340);
        setTimeout(() => { let seventhdicenumber = Math.floor(Math.random()*6)+1;
        dice.src = `./MathClipArt--Single-Die-with-${seventhdicenumber}-Showing.png.webp`}, 580);
        setTimeout(() => { let eighthdicenumber = Math.floor(Math.random()*6)+1;
        dice.src = `./MathClipArt--Single-Die-with-${eighthdicenumber}-Showing.png.webp`}, 720);
        setTimeout(() => { let ninethdicenumber = Math.floor(Math.random()*6)+1;
        dice.src = `./MathClipArt--Single-Die-with-${ninethdicenumber}-Showing.png.webp`}, 900);
    
});

const shouldThey = document.querySelector(".ynmButton");
const answer = document.querySelector(".answer");

shouldThey.addEventListener("click", () => {
    let ynmnumber = Math.floor(Math.random()*3)+1;
    if (ynmnumber === 1) {
        answer.innerHTML = "yes";
    }
    if (ynmnumber === 2) {
        answer.innerHTML = "no";
    }
    if (ynmnumber === 3) {
        answer.innerHTML = "maybe";
    }
});

const schalter = document.querySelector(".schalter");

schalter.addEventListener("click", () => {
    schalter.src = "./Bildschirmfoto 2026-07-10 um 18.31.48.png"
    setTimeout(() => {schalter.src = "./Bildschirmfoto 2026-07-10 um 18.32.06.png"}, 3000);
});