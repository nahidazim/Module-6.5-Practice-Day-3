function calculateGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A+";
    } 
    else if (score >= 75 && score < 80) {
        return "A";
    } 
    else if (score >= 70 && score < 75) {
        return "A-";
    } 
    else if (score >= 65 && score < 70) {
        return "B+";
    } 
    else if (score >= 60 && score < 65) {
        return "B";
    } 
    else if (score >= 55 && score < 60) {
        return "B-";
    } 
    else if (score >= 50 && score < 55) {
        return "C+";
    } 
    else if (score >= 45 && score < 50) {
        return "C";
    } 
    else if (score >= 40 && score < 45) {
        return "D";
    } 
    else {
        return "F";
    }
}

const prompt = require('prompt-sync')();
const score = parseFloat(prompt("Enter your score: "));

if (!isNaN(score) && score >= 0 && score <= 100) { 
    var grade = calculateGrade(score);
    console.log("Your grade is: " + grade);
} 
else {
    console.log("Invalid input. Please enter a number between 0 and 100.");
}
