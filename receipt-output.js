const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

// Date and time
const dateTime = document.getElementById("date-time");
let text = document.lastModified;
dateTime.innerHTML = "<h4>Date: " + text + "</h4>";


// Personal Informations
const form3 = document.getElementById("form3");

if (sessionStorage.getItem("firstName") === null) {
    form3.innerHTML = "<p>Form was not used.</p>"
} else {
    form3.innerHTML = "<p>First name: " + "<b>" +sessionStorage.getItem('firstName') + "</b>" +
    " <br>Last name: " + "<b>" + sessionStorage.getItem('lastName') + "</b>" +
    " <br>Street name: " + "<b>" + sessionStorage.getItem('streetName') + "</b>" +
    " <br>Number / floor: " + "<b>" + sessionStorage.getItem('numberFloor') + "</b>" +
    " <br>Postalcode / City: " + "<b>" + sessionStorage.getItem('postCity') + "</b></p>";
}



// Cars' infos in the dark yellow box
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


// // Get shopping list from sesstionstorage
// const accessoriesList = JSON.parse(sessionStorage.getItem("goods"));

// // Show every item on shopping list to user
// for (const item of accessoriesList) {
//     YellowBox.insertAdjacentHTML("beforeend", `<ul><li>${item}</li></ul>`);
// }