// Q113
// create a new map to store countries and their capitals
// add some countries and their capitals to the map
var countriesAndCapitals = new Map();
countriesAndCapitals.set("India", "Delhi");
countriesAndCapitals.set("Japan", "Tokyo");
countriesAndCapitals.set("China", "Beijing");
countriesAndCapitals.set("Russia", "Moscow");
countriesAndCapitals.set("France", "Paris");
console.log(countriesAndCapitals);
// this function check for canda in the map and log its capital
function checkCapital(country) {
    if (countriesAndCapitals.has(country)) {
        console.log(countriesAndCapitals.get(country));
    }
    else {
        console.log("Country not found");
    }
}
checkCapital("India");
console.log(countriesAndCapitals.size);
