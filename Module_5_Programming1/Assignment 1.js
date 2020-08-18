const weeklyInc = parseInt(prompt("What is your weekly income?"));
const foodCost = parseInt(prompt("What is your weekly food cost?"));
const housingCost = parseInt(prompt("What is your weekly housing cost?"));
const transCost = parseInt(prompt("What is your weekly transportation cost? "));
const otherCost = parseInt(prompt("What is are your other weekly costs?"));
const neededYearlySavings = parseInt(prompt("How much yearly savings do you want?"));
const neededWeeklySavings = neededYearlySavings / 52;
const totalWeeklyCost = foodCost + housingCost + transCost + transCost + otherCost; //100
const remainingAmount = weeklyInc - totalWeeklyCost; //20

if (remainingAmount > neededWeeklySavings || remainingAmount === neededWeeklySavings) {
    console.log("You are on track");
} else {
    console.log("you are not saving enough money, You need save more money!");
}