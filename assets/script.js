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