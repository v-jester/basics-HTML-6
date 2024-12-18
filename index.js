document.getElementById("fetchButton").addEventListener("click", fetchUserData);

async function fetchUserData() {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const user = data.results[0];

    const picture = user.picture.large;
    const name = `${user.name.first} ${user.name.last}`;
    const cell = user.cell;
    const city = user.location.city;
    const country = user.location.country;

    const userBlock = document.createElement("div");
    userBlock.classList.add("user-info");
    userBlock.innerHTML = `
            <img src="${picture}" alt="User Picture">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Cell:</strong> ${cell}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Country:</strong> ${country}</p>
        `;

    document.getElementById("usersContainer").appendChild(userBlock);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Error loading data. Try again.");
  }
}
