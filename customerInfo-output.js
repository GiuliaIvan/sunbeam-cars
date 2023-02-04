const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);


// Get shopping list from sesstionstorage
const accessoriesList = JSON.parse(sessionStorage.getItem("goods"));

// Show every item on shopping list to user
// for (const item of accessoriesList) {
    // item.push(checkbox.dataset.item);
    // YellowBox.insertAdjacentHTML("beforeend", `<ul><li>${item}</li></ul>`);
// }

const YellowBox = document.getElementById("yellow-box");

YellowBox.innerHTML = "<h2>" + "Rental informations </h2> " +
"<h4> All inclusive: " + sessionStorage.getItem("total") + " kr." + "<br>( including VAT )" + "</h4>" +
"<h3>" + sessionStorage.getItem("carName") + "</h3>" + 
"<p>Pick-up date: " + sessionStorage.getItem("pickupDate") + 
"<br> Return date: " + sessionStorage.getItem("returnDate") +
"<br> Rental days: " + sessionStorage.getItem("rentalDays") + "</p>" +
"<h4> Car rental cost: " + sessionStorage.getItem("carCost") + " kr." + "<br>( including VAT )" + "</h4>" +
"<h4> Accessories: </h4>" + "<p>" + sessionStorage.getItem("goods") + "</p>" +
"<h4> Accessories total: " + sessionStorage.getItem("AccessoryTotal") + " kr." + "<br>( excluding VAT )" + "</h4>";


// POSTAL CODES AND CITIES
fetch("https://dawa.aws.dk/postnumre")
.then(function (data) {
return data.json();
})

.then(function (post) {
const datalist = document.getElementById("codesandcities");
const listofcities = post;

for (city of listofcities) {
    datalist.insertAdjacentHTML("beforeend", `<option>${city.nr} ${city.navn}</option>`);
}
});






const form2 = document.getElementById("form2");
form2.reset(); // Resets form every time page loads



form2.addEventListener("submit", function (e) {
    e.preventDefault();
    const FirstName = document.getElementById("first-name").value;
    const LastName = document.getElementById("last-name").value;
    const StreetName = document.getElementById("street-name").value;
    const NumberFloor = document.getElementById("floor").value;
    const PostCity = document.getElementById("postlandcity").value;
    // const EMAIL = document.getElementById("email").value;

    sessionStorage.setItem("firstName", FirstName);
    sessionStorage.setItem("lastName", LastName);
    sessionStorage.setItem("streetName", StreetName);
    sessionStorage.setItem("numberFloor", NumberFloor);
    sessionStorage.setItem("postCity", PostCity);

    document.location.href = "receipt.html";
})