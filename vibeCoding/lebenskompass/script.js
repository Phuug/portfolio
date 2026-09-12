const lifeAreas = [
    {
        id: "faith",
        name: "Glaube & Spiritualität",
        suggestion:
            "Nimm dir zehn ruhige Minuten für Gebet, Meditation oder persönliche Reflexion."
    },
    {
        id: "growth",
        name: "Persönlichkeitsentwicklung",
        suggestion:
            "Lies ein paar Seiten oder notiere eine Erkenntnis, die du praktisch anwenden möchtest."
    },
    {
        id: "health",
        name: "Gesundheit",
        suggestion:
            "Bewege dich zehn Minuten oder tue deinem Körper heute etwas bewusst Gutes."
    },
    {
        id: "wealth",
        name: "Reichtum & Beruf",
        suggestion:
            "Arbeite 15 Minuten an einer Fähigkeit, einem Projekt oder einer konkreten Gelegenheit."
    },
    {
        id: "love",
        name: "Liebe & Beziehungen",
        suggestion:
            "Schenke jemandem ehrliche Aufmerksamkeit oder melde dich bei einem Menschen, der dir wichtig ist."
    }
];

const evaluateButton = document.querySelector("#evaluate-button");
const result = document.querySelector("#result");

lifeAreas.forEach((area) => {
    const slider = document.querySelector(`#${area.id}`);
    const output = document.querySelector(`output[for="${area.id}"]`);
    const note = document.querySelector(`#${area.id}-note`);

    const savedValue = localStorage.getItem(`${area.id}-value`);
    const savedNote = localStorage.getItem(`${area.id}-note`);

    if (savedValue !== null) {
        slider.value = savedValue;
        output.textContent = savedValue;
    }

    if (savedNote !== null) {
        note.value = savedNote;
    }

    slider.addEventListener("input", () => {
        output.textContent = slider.value;
        localStorage.setItem(`${area.id}-value`, slider.value);
    });

    note.addEventListener("input", () => {
        localStorage.setItem(`${area.id}-note`, note.value);
    });
});

evaluateButton.addEventListener("click", () => {
    const ratings = lifeAreas.map((area) => {
        const slider = document.querySelector(`#${area.id}`);

        return {
            ...area,
            value: Number(slider.value)
        };
    });

    const lowestValue = Math.min(...ratings.map((area) => area.value));

    const lowestAreas = ratings.filter(
        (area) => area.value === lowestValue
    );

    displayResult(lowestAreas, lowestValue);
});

function displayResult(lowestAreas, lowestValue) {
    result.replaceChildren();

    const heading = document.createElement("h2");
    const score = document.createElement("p");

    score.textContent = `Niedrigster aktueller Wert: ${lowestValue} von 10`;

    if (lowestAreas.length === 1) {
        const area = lowestAreas[0];
        const message = document.createElement("p");

        heading.textContent = `Dein Kompass zeigt zu: ${area.name}`;
        message.textContent = area.suggestion;

        result.append(heading, score, message);
        return;
    }

    heading.textContent = "Mehrere Bereiche brauchen gerade Aufmerksamkeit";

    const introduction = document.createElement("p");
    introduction.textContent =
        "Du musst nicht alles gleichzeitig lösen. Wähle einen kleinen Schritt aus:";

    const list = document.createElement("ul");

    lowestAreas.forEach((area) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${area.name}: ${area.suggestion}`;
        list.append(listItem);
    });

    result.append(heading, score, introduction, list);
}