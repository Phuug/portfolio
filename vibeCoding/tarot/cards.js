const cards = [
    {
        id: 0,
        name: "Der Narr",
        image: "images/der-narr.jpg",
        meaning: "Neuanfang, Freiheit und Vertrauen."
    },
    {
        id: 1,
        name: "Der Magier",
        image: "images/der-magier.jpg",
        meaning: "Willenskraft, Kreativität und Handlung."
    },
    {
        id: 2,
        name: "Die Hohepriesterin",
        image: "images/die-hohepriesterin.jpg",
        meaning: "Intuition, Weisheit und innere Stimme."
    },
    {
        id: 3,
        name: "Die Herrscherin",
        image: "images/die-herrscherin.jpg",
        meaning: "Fülle, Fürsorge und Wachstum."
    },
    {
        id: 4,
        name: "Der Herrscher",
        image: "images/der-herrscher.jpg",
        meaning: "Ordnung, Verantwortung und Stabilität."
    },
    {
        id: 5,
        name: "Der Hierophant",
        image: "images/der-hierophant.jpg",
        meaning: "Tradition, Wissen und Spiritualität."
    },
    {
        id: 6,
        name: "Die Liebenden",
        image: "images/die-liebenden.jpg",
        meaning: "Liebe, Verbindung und Entscheidungen."
    },
    {
        id: 7,
        name: "Der Wagen",
        image: "images/der-wagen.jpg",
        meaning: "Entschlossenheit, Erfolg und Kontrolle."
    },
    {
        id: 8,
        name: "Die Kraft",
        image: "images/die-kraft.jpg",
        meaning: "Mut, Geduld und innere Stärke."
    },
    {
        id: 9,
        name: "Der Eremit",
        image: "images/der-eremit.jpg",
        meaning: "Innenschau, Weisheit und Rückzug."
    },
    {
        id: 10,
        name: "Rad des Schicksals",
        image: "images/rad-des-schicksals.jpg",
        meaning: "Veränderung, Zyklen und Schicksal."
    },
    {
        id: 11,
        name: "Die Gerechtigkeit",
        image: "images/die-gerechtigkeit.jpg",
        meaning: "Fairness, Wahrheit und Ausgleich."
    },
    {
        id: 12,
        name: "Der Gehängte",
        image: "images/der-gehaengte.jpg",
        meaning: "Loslassen, Perspektivwechsel und Geduld."
    },
    {
        id: 13,
        name: "Der Tod",
        image: "images/der-tod.jpg",
        meaning: "Transformation, Ende und Neubeginn."
    },
    {
        id: 14,
        name: "Die Mäßigkeit",
        image: "images/die-maessigkeit.jpg",
        meaning: "Balance, Harmonie und Heilung."
    },
    {
        id: 15,
        name: "Der Teufel",
        image: "images/der-teufel.jpg",
        meaning: "Abhängigkeit, Versuchung und Bindung."
    },
    {
        id: 16,
        name: "Der Turm",
        image: "images/der-turm.jpg",
        meaning: "Umbruch, Erkenntnis und Befreiung."
    },
    {
        id: 17,
        name: "Der Stern",
        image: "images/der-stern.jpg",
        meaning: "Hoffnung, Inspiration und Vertrauen."
    },
    {
        id: 18,
        name: "Der Mond",
        image: "images/der-mond.jpg",
        meaning: "Illusion, Intuition und Unterbewusstsein."
    },
    {
        id: 19,
        name: "Die Sonne",
        image: "images/die-sonne.jpg",
        meaning: "Freude, Erfolg und Lebensenergie."
    },
    {
        id: 20,
        name: "Das Gericht",
        image: "images/das-gericht.jpg",
        meaning: "Erwachen, Erkenntnis und Erneuerung."
    },
    {
        id: 21,
        name: "Die Welt",
        image: "images/die-welt.jpg",
        meaning: "Vollendung, Erfüllung und Ganzheit."
    },
        {
        id: 22,
        name: "Ass der Kelche",
        image: "images/ass-der-kelche.jpg",
        meaning: "Neubeginn in Liebe, Mitgefühl und Emotionen."
    },
    {
        id: 23,
        name: "Zwei der Kelche",
        image: "images/zwei-der-kelche.jpg",
        meaning: "Partnerschaft, Harmonie und Verbindung."
    },
    {
        id: 24,
        name: "Drei der Kelche",
        image: "images/drei-der-kelche.jpg",
        meaning: "Freude, Freundschaft und gemeinsames Feiern."
    },
    {
        id: 25,
        name: "Vier der Kelche",
        image: "images/vier-der-kelche.jpg",
        meaning: "Nachdenken, Unzufriedenheit und neue Chancen."
    },
    {
        id: 26,
        name: "Fünf der Kelche",
        image: "images/fuenf-der-kelche.jpg",
        meaning: "Trauer, Verlust und Hoffnung."
    },
    {
        id: 27,
        name: "Sechs der Kelche",
        image: "images/sechs-der-kelche.jpg",
        meaning: "Erinnerungen, Nostalgie und Unschuld."
    },
    {
        id: 28,
        name: "Sieben der Kelche",
        image: "images/sieben-der-kelche.jpg",
        meaning: "Möglichkeiten, Fantasie und Entscheidungen."
    },
    {
        id: 29,
        name: "Acht der Kelche",
        image: "images/acht-der-kelche.jpg",
        meaning: "Loslassen, Aufbruch und innere Suche."
    },
    {
        id: 30,
        name: "Neun der Kelche",
        image: "images/neun-der-kelche.jpg",
        meaning: "Zufriedenheit, Wünsche und Genuss."
    },
    {
        id: 31,
        name: "Zehn der Kelche",
        image: "images/zehn-der-kelche.jpg",
        meaning: "Familie, Glück und Erfüllung."
    },
    {
        id: 32,
        name: "Bube der Kelche",
        image: "images/bube-der-kelche.jpg",
        meaning: "Neugier, Sensibilität und emotionale Botschaften."
    },
    {
        id: 33,
        name: "Ritter der Kelche",
        image: "images/ritter-der-kelche.jpg",
        meaning: "Romantik, Idealismus und Einladung."
    },
    {
        id: 34,
        name: "Königin der Kelche",
        image: "images/koenigin-der-kelche.jpg",
        meaning: "Empathie, Intuition und Mitgefühl."
    },
    {
        id: 35,
        name: "König der Kelche",
        image: "images/koenig-der-kelche.jpg",
        meaning: "Emotionale Reife, Gelassenheit und Weisheit."
    },
        {
        id: 36,
        name: "Ass der Stäbe",
        image: "images/ass-der-staebe.jpg",
        meaning: "Inspiration, neue Energie und Tatendrang."
    },
    {
        id: 37,
        name: "Zwei der Stäbe",
        image: "images/zwei-der-staebe.jpg",
        meaning: "Planung, Weitblick und Entscheidungen."
    },
    {
        id: 38,
        name: "Drei der Stäbe",
        image: "images/drei-der-staebe.jpg",
        meaning: "Fortschritt, Expansion und Chancen."
    },
    {
        id: 39,
        name: "Vier der Stäbe",
        image: "images/vier-der-staebe.jpg",
        meaning: "Feier, Gemeinschaft und Stabilität."
    },
    {
        id: 40,
        name: "Fünf der Stäbe",
        image: "images/fuenf-der-staebe.jpg",
        meaning: "Wettbewerb, Konflikte und Herausforderungen."
    },
    {
        id: 41,
        name: "Sechs der Stäbe",
        image: "images/sechs-der-staebe.jpg",
        meaning: "Erfolg, Anerkennung und Selbstvertrauen."
    },
    {
        id: 42,
        name: "Sieben der Stäbe",
        image: "images/sieben-der-staebe.jpg",
        meaning: "Standhaftigkeit, Mut und Verteidigung."
    },
    {
        id: 43,
        name: "Acht der Stäbe",
        image: "images/acht-der-staebe.jpg",
        meaning: "Schnelligkeit, Bewegung und Nachrichten."
    },
    {
        id: 44,
        name: "Neun der Stäbe",
        image: "images/neun-der-staebe.jpg",
        meaning: "Ausdauer, Vorsicht und Beharrlichkeit."
    },
    {
        id: 45,
        name: "Zehn der Stäbe",
        image: "images/zehn-der-staebe.jpg",
        meaning: "Verantwortung, Belastung und Pflicht."
    },
    {
        id: 46,
        name: "Bube der Stäbe",
        image: "images/bube-der-staebe.jpg",
        meaning: "Neugier, Abenteuer und Begeisterung."
    },
    {
        id: 47,
        name: "Ritter der Stäbe",
        image: "images/ritter-der-staebe.jpg",
        meaning: "Leidenschaft, Mut und entschlossenes Handeln."
    },
    {
        id: 48,
        name: "Königin der Stäbe",
        image: "images/koenigin-der-staebe.jpg",
        meaning: "Selbstbewusstsein, Charisma und Kreativität."
    },
    {
        id: 49,
        name: "König der Stäbe",
        image: "images/koenig-der-staebe.jpg",
        meaning: "Führung, Vision und Tatkraft."
    },
        {
        id: 50,
        name: "Ass der Schwerter",
        image: "images/ass-der-schwerter.jpg",
        meaning: "Klarheit, Wahrheit und neue Erkenntnisse."
    },
    {
        id: 51,
        name: "Zwei der Schwerter",
        image: "images/zwei-der-schwerter.jpg",
        meaning: "Unentschlossenheit, Abwägen und innere Blockade."
    },
    {
        id: 52,
        name: "Drei der Schwerter",
        image: "images/drei-der-schwerter.jpg",
        meaning: "Herzschmerz, Trauer und schmerzhafte Einsicht."
    },
    {
        id: 53,
        name: "Vier der Schwerter",
        image: "images/vier-der-schwerter.jpg",
        meaning: "Ruhe, Erholung und Besinnung."
    },
    {
        id: 54,
        name: "Fünf der Schwerter",
        image: "images/fuenf-der-schwerter.jpg",
        meaning: "Konflikt, Ego und zweifelhafter Sieg."
    },
    {
        id: 55,
        name: "Sechs der Schwerter",
        image: "images/sechs-der-schwerter.jpg",
        meaning: "Übergang, Heilung und Aufbruch."
    },
    {
        id: 56,
        name: "Sieben der Schwerter",
        image: "images/sieben-der-schwerter.jpg",
        meaning: "List, Strategie und Eigeninitiative."
    },
    {
        id: 57,
        name: "Acht der Schwerter",
        image: "images/acht-der-schwerter.jpg",
        meaning: "Einschränkung, Zweifel und Selbstblockade."
    },
    {
        id: 58,
        name: "Neun der Schwerter",
        image: "images/neun-der-schwerter.jpg",
        meaning: "Sorgen, Ängste und schlaflose Nächte."
    },
    {
        id: 59,
        name: "Zehn der Schwerter",
        image: "images/zehn-der-schwerter.jpg",
        meaning: "Ende, Zusammenbruch und Neuanfang."
    },
    {
        id: 60,
        name: "Bube der Schwerter",
        image: "images/bube-der-schwerter.jpg",
        meaning: "Neugier, Wachsamkeit und Wissensdurst."
    },
    {
        id: 61,
        name: "Ritter der Schwerter",
        image: "images/ritter-der-schwerter.jpg",
        meaning: "Entschlossenheit, Tempo und Mut."
    },
    {
        id: 62,
        name: "Königin der Schwerter",
        image: "images/koenigin-der-schwerter.jpg",
        meaning: "Klugheit, Ehrlichkeit und Unabhängigkeit."
    },
    {
        id: 63,
        name: "König der Schwerter",
        image: "images/koenig-der-schwerter.jpg",
        meaning: "Logik, Autorität und klare Entscheidungen."
    },
        {
        id: 64,
        name: "Ass der Münzen",
        image: "images/ass-der-muenzen.jpg",
        meaning: "Neuanfang, Wohlstand und Chancen."
    },
    {
        id: 65,
        name: "Zwei der Münzen",
        image: "images/zwei-der-muenzen.jpg",
        meaning: "Balance, Anpassungsfähigkeit und Flexibilität."
    },
    {
        id: 66,
        name: "Drei der Münzen",
        image: "images/drei-der-muenzen.jpg",
        meaning: "Zusammenarbeit, Lernen und handwerkliches Können."
    },
    {
        id: 67,
        name: "Vier der Münzen",
        image: "images/vier-der-muenzen.jpg",
        meaning: "Sicherheit, Kontrolle und Besitz."
    },
    {
        id: 68,
        name: "Fünf der Münzen",
        image: "images/fuenf-der-muenzen.jpg",
        meaning: "Entbehrung, Sorgen und Hoffnung auf Hilfe."
    },
    {
        id: 69,
        name: "Sechs der Münzen",
        image: "images/sechs-der-muenzen.jpg",
        meaning: "Großzügigkeit, Ausgleich und Unterstützung."
    },
    {
        id: 70,
        name: "Sieben der Münzen",
        image: "images/sieben-der-muenzen.jpg",
        meaning: "Geduld, Wachstum und langfristiger Erfolg."
    },
    {
        id: 71,
        name: "Acht der Münzen",
        image: "images/acht-der-muenzen.jpg",
        meaning: "Fleiß, Lernen und Perfektionierung."
    },
    {
        id: 72,
        name: "Neun der Münzen",
        image: "images/neun-der-muenzen.jpg",
        meaning: "Unabhängigkeit, Wohlstand und Zufriedenheit."
    },
    {
        id: 73,
        name: "Zehn der Münzen",
        image: "images/zehn-der-muenzen.jpg",
        meaning: "Beständigkeit, Familie und langfristiger Erfolg."
    },
    {
        id: 74,
        name: "Bube der Münzen",
        image: "images/bube-der-muenzen.jpg",
        meaning: "Lernbereitschaft, Neugier und neue Möglichkeiten."
    },
    {
        id: 75,
        name: "Ritter der Münzen",
        image: "images/ritter-der-muenzen.jpg",
        meaning: "Ausdauer, Verantwortung und Zuverlässigkeit."
    },
    {
        id: 76,
        name: "Königin der Münzen",
        image: "images/koenigin-der-muenzen.jpg",
        meaning: "Fürsorge, Bodenständigkeit und Wohlstand."
    },
    {
        id: 77,
        name: "König der Münzen",
        image: "images/koenig-der-muenzen.jpg",
        meaning: "Erfolg, Stabilität und Führungsstärke."
    }
];