const output = document.querySelector(".output");
const load = document.querySelector(".load");

load.addEventListener("click", loadUser);

async function loadUser(parms) {
  output.innerHTML = `<h2>Loading...</h2>` 
  
  try {
    const rndmNr = Math.floor((Math.random()*10)+1);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${rndmNr}`);
    const user = await response.json();

    output.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>eMail:</strong>${user.email}</p>
        <p><strong>street:</strong>${user.address.street}</p>
    `
  }
  catch(error){
    console.error(error);
    output.innerHTML = `<h2>error</h2>` 
  }
};