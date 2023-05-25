  // Quiz questions and answers
  var questions = [
    {
      question: "What is the correct way to write a comment in JavaScript?",
      choices: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
      answer: "// This is a comment",
    },
    
    {
      question: "What is the purpose of the querySelectorAll method?",
      choices: ["It selects the first element that matches a CSS selector.", "It selects all elements that match a CSS selector.", "It returns the length of an array.", "It checks if an element exists in the DOM."],
      answer: "It selects all elements that match a CSS selector.",
    },

    {
      question: "What is the correct syntax for a function declaration?",
      choices: ["function myFunction() { }", "let myFunction() = { }", "const myFunction = () => { }", "def myFunction(): { }"],
      answer: "function myFunction() { }",
    },

    {
      question: "What is the purpose of the getElementById method?",
      choices: ["It retrieves all elements that have a specific class name.", "It selects the first element that matches a CSS selector.", "It returns the element with a specified ID attribute.", "It checks if an element exists in the DOM."],
      answer: "It returns the element with a specified ID attribute.",
    },

    {
      question: "What does the && operator represent?",
      choices: ["Logical OR", "Logical AND", "Logical NOT", "Equality comparison"],
      answer: "Logical AND",
    },

    {
      question: "What does the localStorage object allow you to do?",
      choices: ["Access the browser's location information.", "Manipulate the history of visited URLs.", "Store data on the client's browser for persistent storage.", "Manage the client's session information."],
      answer: "Store data on the client's browser for persistent storage.",
    },

    {
      question: "What does the || operator represent?",
      choices: ["Logical NOT", "Logical AND", "Equality comparison", "Logical OR"],
      answer: "Logical OR",
    },

    {
      question: "What is the purpose of the addEventListener method?",
      choices: ["It adds an event listener to an HTML element.", "It removes an event listener from an HTML element.", "It retrieves the value of an HTML element.", "It changes the CSS styling of an HTML element."],
      answer: "It adds an event listener to an HTML element.",
    },

    {
      question: "What is the purpose of the 'return' statement in a function?",
      choices: ["It defines the function's parameters.", "It terminates the execution of the function.", "It specifies the function's name.", "It specifies the function's output value."],
      answer: "It specifies the function's output value.",
    },

    {
      question: "What does the === operator compare?",
      choices: ["Values only", "Types only", "Values and types", "None of the above"],
      answer: "Values and types",
    }

    // Add more questions here
  ];



// What does the "===" operator compare?
// Values only
// Types only
// Values and types
// None of the above
// Answer: Values and types


// Which of the following is NOT a valid way to declare a variable?
// var myVariable;
// let myVariable;
// const myVariable;
// variable myVariable;
// Answer: variable myVariable;


// What is the correct syntax for a function declaration?
// function myFunction() { }
// let myFunction() = { }
// const myFunction = () => { }
// def myFunction(): { }
// Answer: function myFunction() { }


// Which of the following is used to access the length of an array?
// lengthOfArray
// array.length()
// array.length
// array.length[]
// Answer: array.length


// What is the correct way to write a comment in JavaScript?
// <!-- This is a comment -->
// // This is a comment
// /* This is a comment */
// <!-- This is a comment -->
// Answer: // This is a comment


// Which of the following is NOT a data type?
// boolean
// string
// number
// character
// Answer: character


// What does the "&&" operator represent?
// Logical OR
// Logical AND
// Logical NOT
// Equality comparison
// Answer: Logical AND


// What does the "||" operator represent?
// Logical NOT
// Logical AND
// Equality comparison
// Logical OR
// Answer: Logical OR


// What does the "localStorage" object allow you to do?
// Access the browser's location information.
// Manipulate the history of visited URLs.
// Store data on the client's browser for persistent storage.
// Manage the client's session information.
// Answer: Store data on the client's browser for persistent storage.


// What is the purpose of the "querySelectorAll" method?
// It selects the first element that matches a CSS selector.
// It selects all elements that match a CSS selector.
// It returns the length of an array.
// It checks if an element exists in the DOM.
// Answer: It selects all elements that match a CSS selector.


// Which of the following methods is used to remove an element from an array by its index?
// array.remove()
// array.splice()
// array.delete()
// array.pop()
// Answer: array.splice()


// What is the purpose of the "return" statement in a function?
// It defines the function's parameters.
// It terminates the execution of the function.
// It specifies the function's name.
// It specifies the function's output value.
// Answer: It specifies the function's output value.


// What is the purpose of the "getElementById" method?
// It retrieves all elements that have a specific class name.
// It selects the first element that matches a CSS selector.
// It returns the element with a specified ID attribute.
// It checks if an element exists in the DOM.
// Answer: It returns the element with a specified ID attribute.


// What is the purpose of the "addEventListener" method?
// It adds an event listener to an HTML element.
// It removes an event listener from an HTML element.
// It retrieves the value of an HTML element.
// It changes the CSS styling of an HTML element.
// Answer: It adds an event listener to an HTML element.



var currentQuestionIndex = 0;
var timeLeft = 100;
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
var clearScoresButton = document.getElementById("clear-scores");
var startNewQuizButton = document.getElementById("start-new-quiz");

  // Place the main functions

  // This function is called when the start button is clicked. It hides the start button, shows the quiz container, starts the timer interval, and shows the first question.
  // Not working when clicking on Start Quiz.
  function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    timerInterval = setInterval(updateTimer, 1000);
    showQuestion();
  }


  // Will need function for showing questions.
  // Not working.  Questions not showing up.
  function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionsElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";
  
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", handleChoiceClick);
        choicesContainer.appendChild(choiceButton);
    }
  }
  



  // Will need ADD EVENT LISTENERS.

  // Will need for-loop???

  // Will need function for start quiz.

  // Will need function for showing questions.

  // Will need function for timer.

  // Will need function for choice select results.

  // Will need function for handling Correct or Wrong choice.  If wrong must need to deduct time and points.

  // Will need function for end of quiz.

  // Will need function for end of quiz score.

  // Will need function for score, high score and submitting score.

  // Will need function for submitting initials.

  // Will need function for saving data to local storage.

  // Will need function for listing submitted initials and high scores.

  // Will need function for clearing high scores.

  // Will need function for want to play code quiz again.  Try again.