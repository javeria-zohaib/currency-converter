#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 278.2,
    "INR": 83.36
};
let userAnswer = await inquirer.prompt([{
        name: "from_currency",
        type: "list",
        message: chalk.blueBright("Select the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "INR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.blueBright("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "INR"],
    },
    {
        name: "amount",
        type: "input",
        message: "enter the amount to convert:"
    }
]);
let from_amount = exchange_rate[userAnswer.from_currency];
let to_amount = exchange_rate[userAnswer.to_currency];
let amount = userAnswer.amount;
let baseAmount = amount / from_amount;
let convertedAmount = baseAmount * to_amount;
console.log(chalk.yellowBright(`Converted amount= ${convertedAmount.toFixed(2)}`));
