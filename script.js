// your JS code here.

// Get required elements
const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

// Load saved progress from session storage
let userAnswers =
  JSON.parse(sessionStorage.getItem("progress")) || [];

// Show saved score if exists in local storage
const savedScore = localStorage.getItem("score");

if (savedScore !== null) {
  scoreElement.textContent =
    `Your score is ${savedScore} out of 5.`;
}

// Save selected answers
questionsElement.addEventListener("change", function (e) {
  if (e.target.type === "radio") {
    const questionIndex =
      e.target.name.split("-")[1];

    userAnswers[questionIndex] =
      e.target.value;

    // Store in session storage
    sessionStorage.setItem(
      "progress",
      JSON.stringify(userAnswers)
    );
  }
});

// Submit button logic
submitButton.addEventListener("click", function () {
  let score = 0;

  // Calculate score
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  // Display score
  scoreElement.textContent =
    `Your score is ${score} out of 5.`;

  // Store score in local storage
  localStorage.setItem(
    "score",
    score.toString()
  );
});



// Do not change code below this line
// This code will just display the questions to the screen

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    const questionElement =
      document.createElement("div");

    const questionText =
      document.createTextNode(
        question.question
      );

    questionElement.appendChild(
      questionText
    );

    for (let j = 0; j < question.choices.length; j++) {

      const choice =
        question.choices[j];

      const choiceElement =
        document.createElement("input");

      choiceElement.setAttribute(
        "type",
        "radio"
      );

      choiceElement.setAttribute(
        "name",
        `question-${i}`
      );

      choiceElement.setAttribute(
        "value",
        choice
      );

      // Restore saved answers
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute(
          "checked",
          true
        );
      }

      const choiceText =
        document.createTextNode(choice);

      questionElement.appendChild(
        choiceElement
      );

      questionElement.appendChild(
        choiceText
      );
    }

    questionsElement.appendChild(
      questionElement
    );
  }
}

renderQuestions();
