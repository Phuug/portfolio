const button = document.getElementById("loadBtn");
const output = document.getElementById("output");

button.addEventListener("click", loadUser);

async function loadUser() {
    
    output.textContent = "Lade Daten...";

    try {

        const response = await fetch ("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();

        output.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email</strong>${user.email}</p>
        <p><strong>Address</strong>${user.address.street}</p>
        `;
    }

    catch (error){
        output.textContent = "Fehler beim Laden der Daten";
        console.error(error);
    }
}









































button.addEventListener("click", loadUser);

async function loadUser() {
    output.textContent = "Lade Daten...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        const user = await response.json();

        output.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>E-Mail:</strong> ${user.email}</p>
            <p><strong>Stadt:</strong> ${user.address.city}</p>
        `;
    } catch (error) {
        output.textContent = "Fehler beim Laden!";
        console.error(error);
    }
}




"https://jsonplaceholder.typicode.com/users/1"