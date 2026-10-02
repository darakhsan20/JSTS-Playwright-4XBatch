const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

async function main() {
  const terminal = readline.createInterface({ input: stdin, output: stdout });
  const answers = terminal[Symbol.asyncIterator]();

  async function ask(question) {
    stdout.write(question);
    const answer = await answers.next();
    return answer.done ? "" : answer.value;
  }

  try {
    console.log("Welcome to the Beginner Calculator!");

    const firstInput = await ask("Enter the first number: ");
    const operator = await ask("Choose an operation (+, -, *, /): ");
    const secondInput = await ask("Enter the second number: ");

    const firstNumber = Number(firstInput);
    const secondNumber = Number(secondInput);

    if (
      firstInput.trim() === "" ||
      secondInput.trim() === "" ||
      !Number.isFinite(firstNumber) ||
      !Number.isFinite(secondNumber)
    ) {
      console.log("Please enter a valid number each time.");
      process.exitCode = 1;
      return;
    }

    let result;

    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber === 0) {
          console.log("You cannot divide by zero.");
          process.exitCode = 1;
          return;
        }
        result = firstNumber / secondNumber;
        break;
      default:
        console.log("Please choose +, -, *, or /.");
        process.exitCode = 1;
        return;
    }

    console.log(`Result: ${firstNumber} ${operator} ${secondNumber} = ${result}`);
  } finally {
    terminal.close();
  }
}

main();
