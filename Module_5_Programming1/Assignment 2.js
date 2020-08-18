let Input = parseInt(prompt("Enter the result marks"));

if (Input > 95) {
    console.log("The grade is A+");
} else if (Input > 88 && Input < 96) {
    console.log("The grade is A");
} else if (Input > 84 && Input < 89) {
    console.log("The grade is B+");
} else if (Input > 76 && Input < 85) {
    console.log("The grade is B");
} else if (Input > 70 && Input < 77) {
    console.log("The grade is C");
} else if (Input > 67 && Input < 71) {
    console.log("The grade is D+");
} else if (Input > 64 && Input < 68) {
    console.log("The grade is D");
} else {
    console.log("The grade is F");
}