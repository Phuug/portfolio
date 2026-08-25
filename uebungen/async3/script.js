const personBox = document.querySelector("#personBox");
const loadBtn = document.querySelector("#loadBtn");

loadBtn.addEventListener("click", loadUser);


    async function loadUser() {
    
        try {
            personBox.innerHTML = "<p>Lade...</p>"

            const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
            const user = await response.json();

            personBox.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.email}</p>
            <p>${user.address.street}</p>
            `
        }

        catch (error){
            console.error(error);
            personBox.innerHTML = `Fehler beim Laden.`
        }
    };
