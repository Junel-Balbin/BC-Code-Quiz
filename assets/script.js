  // Quiz questions and answers.
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
// Variables are placed in order of sequence.
var startButton = document.getElementById("start-quiz");
var quizContainer = document.getElementById("quiz-container");
var questionsElement = document.getElementById("questions");
var choicesContainer = document.getElementById("choices");
var exitButton = document.getElementById("exit-button");
var timeElement = document.getElementById("time");
var scoreForm = document.getElementById("score-form");
var initialsInput = document.getElementById("initials");
var submitScoreButton = document.getElementById("submit-score");
var highScoresElement = document.getElementById("high-scores");
var scoreList = document.getElementById("score-list");
var clearScoresButton = document.getElementById("clear-scores");
var startNewQuizButton = document.getElementById("start-new-quiz");

  // Add Event Listeners for main click buttons. 
  startButton.addEventListener("click", startQuiz);
  submitScoreButton.addEventListener("click", submitScore);
  exitButton.addEventListener("click", exitQuiz);
  clearScoresButton.addEventListener("click", clearScores);
  startNewQuizButton.addEventListener("click", startNewQuiz);


  // Main Functions below.

  // This function is called when the start button is clicked. It hides the start button, shows the quiz container, starts the timer interval and shows the first question.
  function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    timerInterval = setInterval(updateTimer, 1000);
    showQuestion();
  }

  //This function displays the current question and its choices. It shows buttons for each choice and adds event listeners to handle the choice click.
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

  // Correct and Wrong selection are showing but not on the last question.  Need to figure that out.
  // This function is called when a choice button is clicked. It checks if the selected choice matches the correct answer, penalty of 10 seconds for wrong answers, updates the question index and either shows the next question or ends the quiz.
  function handleChoiceClick(event) {
    var selectedChoice = event.target.textContent;
    var currentQuestion = questions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.answer) {
        displayResult("Correct!");
    } else {
        displayResult("Wrong!");
        timeLeft -= 10; 
        if (timeLeft < 0) {
            timeLeft = 0;
    }
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      endQuiz();
  }
}

  // This function displays the result of the choice selected if correct or wrong. Hides the results after 1 second.
  function displayResult(result) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = result;
    resultElement.style.display = "block";

  setTimeout(function () {
    resultElement.style.display = "none";
  }, 900);
}

  // This function is called when the quiz ends. It clears the timer interval, hides the quiz       container and shows the score submission form.
  // Utilized the style display none to quiz container.
  function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.style.display = "none";
    scoreForm.style.display = "block";
}

  // This function is called by the timer interval to update the remaining time and check if the time has run out. If the time is zero or less the quiz ends.
  function updateTimer() {
    timeLeft--;
    timeElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        endQuiz();
  }
}

// This function is for exit functionality.  Reset the question index & show the start button again.  Hides the quiz container & score submission. Clears the timer interval and resets the timer.
function exitQuiz() {
  currentQuestionIndex = 0;
  startButton.style.display = "";

  quizContainer.style.display = "none";
  scoreForm.style.display = "none";

  if (timerInterval) {
    clearInterval(timerInterval);
  }
  timeLeft = 100;
  timeElement.textContent = timeLeft;
}

  // This function is called when the submit score button is clicked. Retrieves entered users initials. Creates a score object with the initials and remaining time, updates the high scores array, saves the high scores to local storage and shows the high scores.
  function submitScore() {
    var initials = initialsInput.value.trim();

    if (initials !== "") {
      var score = {
          initials: initials,
          time: timeLeft
      };

      var highScores = getHighScores();
      highScores.push(score);
      highScores.sort((a, b) => b.time - a.time);

      saveHighScores(highScores);
      showHighScores();
  }
}

// This function retrieves the high scores array from local storage. If the high scores exist, it parses the JSON data and returns the array. If not, it returns an empty array.
  function getHighScores() {
    var highScores = localStorage.getItem("highScores");

    if (highScores) {
        return JSON.parse(highScores);
    } else {
        return [];
  }
}

// This function saves the high scores array to local storage by converting it to a JSON string.
  function saveHighScores(highScores) {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

//This function displays the high scores on the page. Hides the score submission form, shows the high scores element and creates list items for each high score.
  function showHighScores() {
    var highScores = getHighScores();
    scoreForm.style.display = "none";
    highScoresElement.style.display = "block";
    scoreList.innerHTML = "";

    for (let i = 0; i < highScores.length; i++) {
        var score = highScores[i];
        var scoreItem = document.createElement("li");
        scoreItem.textContent = `${score.initials}: ${score.time}`;
        scoreList.appendChild(scoreItem);
  }
}

// This function is called when clear scores is clicked.  Resets the score list to none.
  function clearScores() {
    localStorage.removeItem("highScores");
    scoreList.innerHTML = "";
}

// This function is called when try again button is clicked.  Reset the timer and question index.
  function startNewQuiz() {
    clearInterval(timerInterval);
    quizContainer.style.display = "none";
    scoreForm.style.display = "none";
    highScoresElement.style.display = "none";
    scoreList.innerHTML = "";
    timeLeft = 100; 
    currentQuestionIndex = 0; 
    startQuiz();
}