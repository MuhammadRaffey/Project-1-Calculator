import inquirer from "inquirer";

function main() {
  inquirer
    .prompt([
      { type: "input", name: "n1", message: "Enter your Frist Number" },
      { type: "input", name: "n2", message: "Enter your Second Number" },
      {
        type: "list",
        name: "operation",
        choices: ["+", "-", "*", "/"],
        message: "Enter the operation",
      },
    ])
    .then((answers) => {
      // console.log(answers);
      const n1 = answers["n1"];
      const n2 = answers["n2"];
      const operation = answers["operation"];
      if (operation == "+") {
        sum(n1, n2);
      } else if (operation == "-") {
        subtract(n1, n2);
      } else if (operation == "*") {
        multiply(n1, n2);
      } else if (operation == "/") {
        divide(n1, n2);
      } else {
        console.log("Invalid Operator");
      }

      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  //   let n1 = 5;
  //   let n2 = 10;
  //   let operation = "/";
  //   if (operation == "+") {
  //     sum(n1, n2);
  //   } else if (operation == "-") {
  //     subtract(n1, n2);
  //   } else if (operation == "*") {
  //     multiply(n1, n2);
  //   } else if (operation == "/") {
  //     divide(n1, n2);
  //   } else {
  //     console.log("Invalid Operator");
  //   }
}

function sum(n1: number, n2: number) {
  const calc = n1 + n2;
  console.log(`The Sum of ${n1} and ${n2} is ${calc}`);
}
function subtract(n1: number, n2: number) {
  const calc = n1 - n2;
  console.log(`The Subtraction of ${n1} and ${n2} is ${calc}`);
}
function multiply(n1: number, n2: number) {
  const calc = n1 * n2;
  console.log(`The Multiplication of ${n1} and ${n2} is ${calc}`);
}
function divide(n1: number, n2: number) {
  const calc = n1 / n2;
  console.log(`The Division of ${n1} and ${n2} is ${calc}`);
}

main();
