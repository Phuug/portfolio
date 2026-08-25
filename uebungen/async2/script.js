const textfeld = document.querySelectorAll("input");

textfeld.forEach((txtfld, index) => {
    txtfld.addEventListener("click", async function loadUser() {
        txtfld.value = `Lade, bitte warten`;

        try {
            const response = await fetch (`https://jsonplaceholder.typicode.com/users/${Math.floor(index+1)}`);
            const user = await response.json();

            txtfld.value = `${user.name}`
        }
        catch (error){
            console.error(error);
            alert(`error`);
        }
    });
});