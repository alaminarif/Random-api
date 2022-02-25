const section = document.querySelector("section");

const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};
loadBuddies();
const displayBuddies = (data) => {
  const parent = document.querySelector(".parent");
  const buddies = data.results;
  buddies.forEach((buddy) => {
    const p = document.createElement("p");
    p.innerText = ` Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}, Email: ${buddy.email}`;
    parent.appendChild(p);

    console.log(buddy);
  });
};
