const divs = document.querySelectorAll("div");
const antworts = document.querySelectorAll("li");
const zurueck = document.querySelector(".zurueck");
const auswerten = document.querySelector(".auswerten");
const kombi = [];
const auswertung = document.querySelector(".auswertung");


divs.forEach(div => {
    div.classList.add("hidden");
    divs[0].classList.remove("hidden");
    antworts.forEach(antwort => {
        antwort.addEventListener("click", () => {
        antwort.parentElement.parentElement.classList.add("hidden");
        antwort.parentElement.parentElement.nextElementSibling.classList.remove("hidden");
    });
    });
});

zurueck.addEventListener("click", () => {
        const currentDiv = document.querySelector("div:not(.hidden)");
        const previousDiv = document.querySelector("div:not(.hidden)").previousElementSibling;
        
        currentDiv.classList.add("hidden");
        previousDiv.classList.remove("hidden");
        kombi.pop();
});

antworts.forEach(antwort => {
    antwort.addEventListener("click", () => {
        var info = antwort.dataset.info;
        kombi.push(info);
    });
});


auswerten.addEventListener("click", () => {
    const htmlAuswertung = [];

    if(kombi[0] == "1"){
        htmlAuswertung.push("Gewöhne dir an, regelmäßig zu trainieren. Gerade am Anfang ist es wichtiger, eine verlässliche Routine aufzubauen, als jedes einzelne Training perfekt zu gestalten. Wähle einen Umfang, den du langfristig durchhalten kannst, und steigere dich mit der Zeit. Regelmäßigkeit sorgt dafür, dass Training zu einem festen Bestandteil deines Alltags wird.");
    };
    if(kombi[0] == "2") {
        htmlAuswertung.push("Um fitter zu werden, könnte etwas mehr Bewegung sinnvoll sein. Ein bis zwei Trainingseinheiten pro Woche sind bereits eine gute Grundlage. Wenn es gut in deinen Alltag passt, kannst du versuchen, nach und nach eine weitere Einheit oder zusätzliche Bewegung einzubauen. Dabei musst du nicht sofort deutlich mehr trainieren – eine kleine, langfristig durchhaltbare Steigerung reicht vollkommen aus.");
    }
    if(kombi[0] == "3"){
        htmlAuswertung.push("Drei bis fünf Sporteinheiten pro Woche sind für viele Menschen ein sinnvoller Umfang. Damit bewegst du dich regelmäßig und hast gleichzeitig genügend Spielraum für Erholung und andere Bereiche deines Alltags. Achte darauf, die Belastung an dein persönliches Fitnesslevel anzupassen und deinem Körper ausreichend Zeit zur Regeneration zu geben.");
    };
    if(kombi[0] == "4") {
        htmlAuswertung.push("Bei sechs bis sieben Sporteinheiten pro Woche solltest du besonders darauf achten, deinem Körper ausreichend Ruhe und Erholung zu geben. Häufiges Training kann gut funktionieren, wenn Belastung und Regeneration sinnvoll aufeinander abgestimmt sind. Achte auf die Signale deines Körpers und plane bei Bedarf leichtere Einheiten oder zusätzliche Erholung ein.");
    }
    if(kombi[1] == "5"){
        htmlAuswertung.push("Wenn du abnehmen möchtest, kann ein moderates Kaloriendefizit sinnvoll sein. Dabei isst du etwas weniger, als dein Körper im Alltag verbraucht. Ein moderates Defizit lässt sich meist besser langfristig durchhalten und kann dabei helfen, dein Gewicht schrittweise und nachhaltig zu reduzieren. Beim Ausdauertraining werden mehr Kalorien verbrannt, waehrend Muskeln zum Selbsterhalt auch welche verbrennen.");
    };
    if(kombi[1] == "6") {
        htmlAuswertung.push("Wenn du zunehmen möchtest, kann ein moderater Kalorienüberschuss sinnvoll sein. Dabei isst du etwas mehr, als dein Körper im Alltag verbraucht. In Kombination mit regelmäßigem Krafttraining und einer ausgewogenen Ernährung kann dies dabei helfen, schrittweise an Gewicht und Muskelmasse zuzunehmen.");
    }
    if(kombi[1] == "7"){
        htmlAuswertung.push("Wenn dein Gewicht bereits zu deinem Ziel passt, besteht zunächst kein Grund für größere Veränderungen der Kalorienmenge. Behalte deine Ernährung und deine Entwicklung im Blick und passe die Kalorienmenge bei Bedarf schrittweise an. Entscheidend ist vor allem, dass deine Ernährung langfristig zu deinem Ziel und deinem Alltag passt.");
    };
    if(kombi[2] == "8"){
        htmlAuswertung.push("Für eine ausgewogene Körperkomposition kann ein Ganzkörpertraining sinnvoll sein. Auch mit wenig oder ganz ohne Ausrüstung kannst du bereits viele Bereiche deines Körpers trainieren. Joggen, Kniebeugen, Liegestütze, Schwimmer und Sit-ups bieten beispielsweise eine einfache Grundlage, um Ausdauer und verschiedene Muskelgruppen regelmäßig zu trainieren.");
    };
    if(kombi[2] == "9") {
        htmlAuswertung.push("Für eine ausgewogene Körperkomposition kann ein Ganzkörpertraining sinnvoll sein. Mit Springseil, Turnschuhen und einer Klimmzugstange kannst du bereits ein vielseitiges Training gestalten. Joggen und Seilspringen trainieren deine Ausdauer, während Klimmzüge, Liegestütze, Kniebeugen und Bauchübungen die wichtigsten Muskelgruppen abdecken. Damit hast du eine solide Grundlage für ein ausgewogenes Training.");
    }
    if(kombi[2] == "10"){
        htmlAuswertung.push("Für eine ausgewogene Körperkomposition bietet dir ein Fitnessstudio besonders viele Möglichkeiten. Mit freien Gewichten, Geräten und Ausdauertraining kannst du alle wichtigen Muskelgruppen gezielt trainieren und dein Training schrittweise steigern. Beispielsweise eignen sich Kniebeugen für die Beine, Bankdrücken für die Brust, Klimmzüge oder Latzug für den Rücken, Schulterdrücken für die Schultern und Crunches für den Bauch. Eine Kombination aus Kraft- und Ausdauertraining bietet dabei eine solide Grundlage für eine ausgewogene körperliche Entwicklung.");
    };
    if(kombi[3] == "11") {
        htmlAuswertung.push("Ziele als Zwischenziel darauf ab 10 Klimmzuege, 20 Liegestuetze, 30 Kniebeuge zu schaffen.");
    }
    if(kombi[3] == "12"){
        htmlAuswertung.push("Die Menge an Wiederholungen deiner Klimmzuege und Liegestuetze ist solide.");
    };
    if(kombi[3] == "13") {
        htmlAuswertung.push("Du muesstest bereits durchtrainiert sein.");
    }
    auswertung.textContent = htmlAuswertung.join("\n\n");
    
    if(kombi.length > 3) {
    auswerten.classList.add("hidden");
    zurueck.classList.add("hidden");
    }
});