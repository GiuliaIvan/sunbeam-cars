const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
e.preventDefault(); // Don't reload page, thank you!
// output.innerHTML = "";

// output html element with id=result
const output = document.getElementById("output")
output.innerHTML = ""; // Removing old search results

// getting user input from form
const persons = document.getElementById("persons").value;
const suitcases = document.getElementById("suitcases").value;

// start of iteration
// for (const car of carlist) {
//     //const price = 0;
//     // Selection: looking for a match between user input and the number of persons and suitcases on the carlist
    
//     } // end of selection

const arrival = document.getElementById("arrivalfield");
const departure = document.getElementById("departurefield");
const error = document.getElementById("error");


error.innerHTML = "";
const datesValid = validDates(arrival.value, departure.value);
if (datesValid) {

    fetch("https://giuliaivan.github.io/sunbeam-cars/cars.json")
    .then(function(data) { // Waiting for the server to respond
    return data.json();
    })
    .then(function(post) { // if the server responds in a positive way...
    // "Post" is all JSON data

    const carlist = post;

    for (const car of carlist) {

        // If true, price calculation must take place here
        const days = calcRentalDays(arrival.value, departure.value);
        const price = calcRentalCost( car.supplement, days );
        
        console.log(persons, suitcases)
    if (car.persons >= persons && car.suitcases >= suitcases) {
        template = `
    <div class="car-info">
        <img src="${car.image}" alt="car image" class="carimg"></img>
            <h3> ${car.name}</h3> 
            <div class="info">
                <p>Category: ${car.category} <br></br> Persons: ${car.persons} <br></br> Suitcases: ${car.suitcases}</p>
            </div>
        <h3 id="price">${price}</h3>
        <a href="accessories.html?name=${car.name}&pickup=${arrival.value}&handin=${departure.value}&rentdays=${days}&price=${price}">
            <button class="cars-button" type="booknow" style="cursor: pointer;">Book Now</button>
        </a>
    </div>`

        output.insertAdjacentHTML("beforeend", template);

    }} 
    })
    .catch(function (error) { // If the fetch goes wrong, then ...
    const output = document.getElementById("output")
    output.innerHTML = "Service is unavailable"
    })

}
else {
    error.innerHTML = " The day of departure must be later than the day of arrival";
}

 // end of iteration

}) // end of addeventlistener



//PRICE CALCULATION

function validDates(arrivaldate, departuredate) {
    const arrival = new Date(arrivaldate);
    const departure = new Date(departuredate);
    if (arrival > departure) {
        return false;
    } else {
        return true;
    }
}


function calcRentalDays(arrivaldate, departuredate) {
    const arrival = new Date(arrivaldate);
    const departure = new Date(departuredate);
    const timediff = departure.getTime() - arrival.getTime();
    const diffindays = timediff / (1000 * 3600 * 24) + 1;
    return diffindays;
}


function calcRentalCost(supplement, days) {
    var insurance = 495;
    var priceperday = 100;
    const totalprice = (insurance + supplement * days + priceperday * days ) + (insurance + supplement * days + priceperday * days) / 4;
    return totalprice;
}