//----------Challenge 1 ---------


var fullName = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];
var nameJoin = fullName.join();
var changeComas = nameJoin.replace(/,/g, " ");;
//console.log(changeComas);
var backToArray = changeComas.split(' ');
//console.log(backToArray);

let firstName = [];
let lastName = [];

for (let i = 0; i < backToArray.length; i++) {
    // if (backToArray[i].length % 2 == 0) { 
    if (i % 2 == 0) {
        firstName.push(backToArray[i])
    } else {
        lastName.push(backToArray[i]) // if that test fails then it is odd.
    }
}

console.log(firstName);
console.log(lastName);