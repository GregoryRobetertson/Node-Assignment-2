"use strict";
import inquirer from "inquirer";
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },

  {
    type: "list",
    name: "language",
    message: "Which one of these are your favorite programming language?",
    choices: ['JavaScript", "Python", "Ruby", "Other'],
  },

  {
    type: "list",
    name: "developement tool",
    message: "Which editor do you prefer?",
    choices: ["VS Code", "Sublime Text", "Atom", "Other"],
  },

  {
    type: "input",
    name: "open-ended",
    message: "What's one feature you wish your editor had",
  },
];



inquirer
  .prompt(questions)
  .then((answers) => {
  console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
