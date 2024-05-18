function monthlySavings(payments, livingCost) {
    // Check if the inputs are valid
    if (!Array.isArray(payments) || typeof livingCost != 'number' || payments.length == 0) {
        return "Invalid Input";
    }

    // Calculate total income after tax deduction
    let totalIncome = payments.reduce((total, payment) => {
        if (payment >= 3000) {
            // Deduct 20% tax from payments of Tk 3000 or more
            return total + payment * 0.8;
        } else {
            return total + payment;
        }
    }, 0);

    // Calculate savings
    let savings = totalIncome - livingCost;

    // Return the appropriate result
    if (savings < 0) {
        return "Earn More";
    } else {
        return savings;
    }
}

// Example usage with prompt
const prompt = require('prompt-sync')();
const paymentsInput = JSON.parse(prompt("Enter an array of payments received each month:"));
const livingCostInput = parseFloat(prompt("Enter Shahed's living cost:"));

const result = monthlySavings(paymentsInput, livingCostInput);
console.log(result);
