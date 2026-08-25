const drawBtn = document.querySelector("#drawBtn");
const cardImage = document.querySelector("#cardImage");
const cardName = document.querySelector("#cardName");
const cardMeaning = document.querySelector("#cardMeaning");

drawBtn.addEventListener("click", drawCard);

function drawCard() {

    const randomIndex = Math.floor(Math.random() * cards.length);

    const card = cards[randomIndex];

    cardImage.src = card.image;
    cardImage.style.display = "block";

    cardName.textContent = card.name;
    cardMeaning.textContent = card.meaning;
}