  // Quiz questions and answers
  var questions = [
    {
      question: "?",
      choices: [""],
      answer: "",
    },
    {
      question: "?",
      choices: [""],
      answer: "",
    },
    // Add more questions here
  ];


// What does the "===" operator in JavaScript compare?
// Values only
// Types only
// Values and types
// None of the above
// Answer: Values and types


// Which of the following is NOT a valid way to declare a variable in JavaScript?
// var myVariable;
// let myVariable;
// const myVariable;
// variable myVariable;
// Answer: variable myVariable;


// What is the correct syntax for a function declaration in JavaScript?
// function myFunction() { }
// let myFunction() = { }
// const myFunction = () => { }
// def myFunction(): { }
// Answer: function myFunction() { }


// Which of the following is used to access the length of an array in JavaScript?
// lengthOfArray
// array.length()
// array.length
// array.length[]
// Answer: array.length


// What is the correct way to write a comment in JavaScript?
// // This is a comment
// <!-- This is a comment -->
// /* This is a comment */
// <!-- This is a comment -->
// Answer: // This is a comment


// Which of the following is NOT a JavaScript data type?
// boolean
// string
// number
// character
// Answer: character


// What does the "===" operator in JavaScript compare?
// Values only
// Types only
// Values and types
// None of the above
// Answer: Values and types


// What does the "&&" operator represent in JavaScript?
// Logical OR
// Logical AND
// Logical NOT
// Equality comparison
// Answer: Logical AND


// What does the "||" operator represent in JavaScript?
// Logical OR
// Logical AND
// Logical NOT
// Equality comparison
// Answer: Logical OR


// What does the "localStorage" object in JavaScript allow you to do?
// Access the browser's location information.
// Manipulate the history of visited URLs.
// Store data on the client's browser for persistent storage.
// Manage the client's session information.
// Answer: Store data on the client's browser for persistent storage.


// What is the purpose of the "querySelectorAll" method in JavaScript?
// It selects the first element that matches a CSS selector.
// It selects all elements that match a CSS selector.
// It returns the length of an array.
// It checks if an element exists in the DOM.
// Answer: It selects all elements that match a CSS selector.


// Which of the following methods is used to remove an element from an array by its index in JavaScript?
// array.remove()
// array.splice()
// array.delete()
// array.pop()
// Answer: array.splice()


// What is the purpose of the "return" statement in a JavaScript function?
// It defines the function's parameters.
// It terminates the execution of the function.
// It specifies the function's name.
// It specifies the function's output value.
// Answer: It specifies the function's output value.


// What is the purpose of the "getElementById" method in JavaScript?
// It retrieves all elements that have a specific class name.
// It selects the first element that matches a CSS selector.
// It returns the element with a specified ID attribute.
// It checks if an element exists in the DOM.
// Answer: It returns the element with a specified ID attribute.


// What is the purpose of the "addEventListener" method in JavaScript?
// It adds an event listener to an HTML element.
// It removes an event listener from an HTML element.
// It retrieves the value of an HTML element.
// It changes the CSS styling of an HTML element.
// Answer: It adds an event listener to an HTML element.



var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;


// These variables store references to various HTML elements in the document using their corresponding IDs.
var startButton = document.getElementById("start-quiz");
var quizContainer = document.getElementById("quiz-container");
var questionsElement = document.getElementById("questions");
var choicesContainer = document.getElementById("choices");
var timeElement = document.getElementById("time");
var scoreForm = document.getElementById("score-form");
var initialsInput = document.getElementById("initials");
var submitScoreButton = document.getElementById("submit-score");
var highScoresElement = document.getElementById("high-scores");
var scoreList = document.getElementById("score-list");
var clearScores = document.getElementById("clear-scores");
var startNewGame = document.getElementById("start-new-game");

  // Place the main functions