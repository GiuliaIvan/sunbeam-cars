const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const YellowBox = document.getElementById("yellow-box");

YellowBox.innerHTML = "<h2>" + "Well chosen! </h2> " + "<h3>" + URLDATA.get('name') + "</h3>" + 
"<p>Pick-up date: " + URLDATA.get('pickup') + 
"<br> Return date: " + URLDATA.get('handin') +
"<br> Rental days: " + URLDATA.get('rentdays') + "</p>" +
"<h4> Car rental cost: " + URLDATA.get('price') + " kr." + "<br>( including VAT )" + "</h4>";


// All inclusive red box calculation
let AccessoryCarTotal = 0; // Global variable, total starts at zero
showTotal(); // Calls function showTotal to show current total

// Event handler - check if checkbox is selected or not and 
// adjust the total value accordingly
function calculateTotal(checkbox, itemprice) {
    if (checkbox.checked === true) { // If the checkbox is seleted then ...
        AccessoryCarTotal += Math.abs(parseFloat(itemprice));
    } else { // if it is not selected then ...
        AccessoryCarTotal -= Math.abs(parseFloat(itemprice));
    }
    showTotal();
}

AccessoryCarTotal += Math.abs(URLDATA.get('price')) + (AccessoryCarTotal*1.25);

// Shows total value on screen
function showTotal() {
    const RedBox = document.getElementById("box4");
    RedBox.innerHTML = `<p style="padding-top: 8px; margin-top: 0px; font-size: 18px"> 
    All inclusive (incl. VAT): <h4 style="padding-top: 0px"> Total: ${AccessoryCarTotal} kr. </h4></p>`
}


// Accessory red box calculation
let accessoryPrice = 0; // Global variable, total starts at zero
showTotal2(); // Calls function showAccessoryTotal to show current total

// Event handler - check if checkbox is selected or not and 
// adjust the total value accordingly
function calculateTotal2(checkbox, itemprice) {
    if (checkbox.checked === true) { // If the checkbox is seleted then ...
        accessoryPrice = Math.abs(accessoryPrice + parseFloat(itemprice));
    } else { // if it is not selected then ...
        accessoryPrice = Math.abs(accessoryPrice - parseFloat(itemprice));
    }
    showTotal2();
}

accessoryPrice = Math.abs(AccessoryCarTotal) - Math.abs(URLDATA.get('price'));

// Shows total value on screen
function showTotal2() {
    const RedBoxCopy = document.getElementById("box4-copy");
    RedBoxCopy.innerHTML = `<p style="padding-top: 8px; margin-top: 0px; font-size: 18px"> 
    Accessory (excl. VAT): <h4 style="padding-top: 0px"> Total: ${accessoryPrice} kr. </h4></p>`
}



const form1 = document.getElementById("form1");
form1.reset(); // Resets form every time page loads

const checkboxes = document.getElementsByClassName("clist"); //Build an object list with checkboxes
    


form1.addEventListener("submit", function(e) {
    e.preventDefault();
    let accessoriesList = []; // Define shopping list
    for (const checkbox of checkboxes) {
        if (checkbox.checked === true) { // If the item is selected ...
            accessoriesList.push(checkbox.dataset.item); // add it to the shopping list.
        }
    }

    // Stores information in sessionstorage
    sessionStorage.setItem("goods", JSON.stringify(accessoriesList));
    sessionStorage.setItem("total", AccessoryCarTotal);
    sessionStorage.setItem("AccessoryTotal", accessoryPrice);
    // sessionStorage.setItem("Items", JSON.parseFloat(accessoriesList));
    sessionStorage.setItem("carName", URLDATA.get('name'));
    sessionStorage.setItem("pickupDate", URLDATA.get('pickup'));
    sessionStorage.setItem("returnDate", URLDATA.get('handin'));
    sessionStorage.setItem("rentalDays", URLDATA.get('rentdays'));
    sessionStorage.setItem("carCost", URLDATA.get('price'));

    location.href="customerInfo.html"; // Redirect user to customerInfo.html
    // location.href="receipt.html";
})