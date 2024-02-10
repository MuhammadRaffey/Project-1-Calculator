#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

const displayCalcTitleAndImage = async () => {
  await showBanner(
    `  Raffey's Calculator`,
    ` Simple Command Line Calculator written in TypeScript .
  ______________________________________________________________

     _____________________
    |  _________________  |
    | |            0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `,
    "blue",
    "blue"
  );
};

async function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "n1",
      message: chalk.blue("Enter your First Number"),
      validate: function (value) {
        if (isNaN(Number(value))) {
          return "Please enter a valid number.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "n2",
      message: chalk.blue("Enter your Second Number"),
      validate: function (value) {
        if (isNaN(Number(value))) {
          return "Please enter a valid number.";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "operation",
      choices: ["+", "-", "*", "/"],
      message: chalk.green("Enter the operation"),
    },
  ]);
}

async function results() {
  const { n1, n2, operation } = await promptUser();
  const num1 = Number(n1);
  const num2 = Number(n2);

  if (isNaN(num1) || isNaN(num2)) {
    console.log(chalk.red("Please enter valid numbers."));
    return results();
  }

  switch (operation) {
    case "+":
      sum(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    default:
      console.log(chalk.red("Invalid Operator"));
  }
}

function sum(n1: number, n2: number) {
  const result = n1 + n2;
  console.log(`The Sum of ${n1} and ${n2} is ${result}`);
  keepPrompting();
}
function subtract(n1: number, n2: number) {
  const result = n1 - n2;
  console.log(`The Subtraction of ${n1} and ${n2} is ${result}`);
  keepPrompting();
}
function multiply(n1: number, n2: number) {
  const result = n1 * n2;
  console.log(`The Multiplication of ${n1} and ${n2} is ${result}`);
  keepPrompting();
}
function divide(n1: number, n2: number) {
  if (n2 === 0) {
    console.log(chalk.red("Cannot divide by zero."));
    keepPrompting();
    return;
  }
  const result = n1 / n2;
  console.log(`The Division of ${n1} and ${n2} is ${result}`);
  keepPrompting();
}

async function keepPrompting() {
  const { command } = await inquirer.prompt([
    {
      type: "input",
      name: "command",
      message: chalk.blue("Type 'exit' to quit, or press Enter to continue"),
    },
  ]);
  if (command.trim().toLowerCase() === "exit") {
    console.log(chalk.green("Exiting..."));
    process.exit(0);
  }
  await results();
}

async function main() {
  await displayCalcTitleAndImage();
  await results();
}

main();
