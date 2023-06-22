// Quiz questions
var questions = [
  {
    question: "What is the correct syntax to create an empty object in JavaScript?",
    options: {
      a: "var obj = {}",
      b: "var obj = []",
      c: "var obj = new Object()",
      d: "var obj = Object.create()"
    },
    answer: "c"
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    options: {
      a: "push()",
      b: "unshift()",
      c: "pop()",
      d: "shift()"
    },
    answer: "a"
  },
  {
    question: "How can you access the value of a property named 'name' in the object 'person'?",
    options: {
      a: "person(name)",
      b: "person.name",
      c: "person['name']",
      d: "person.get('name')"
    },
    answer: "c"
  },
  {
    question: "What does the Array.isArray() method do in JavaScript?",
    options: {
      a: "Checks if a variable is an array",
      b: "Adds an element to the beginning of an array",
      c: "Converts an array to a string",
      d: "Removes the last element from an array"
    },
    answer: "a"
  },
  {
    question: "How do you remove an element at a specific index from an array?",
    options: {
      a: "splice(index, 1)",
      b: "slice(index, 1)",
      c: "delete array[index]",
      d: "remove(index)"
    },
    answer: "a"
  },
  {
    question: "What is the result of typeof [] in JavaScript?",
    options: {
      a: "'object'",
      b: "'array'",
      c: "'array-like'",
      d: "'undefined'"
    },
    answer: "a"
  },
  {
    question: "How can you add a new property 'age' with a value of 25 to an existing object 'person'?",
    options: {
      a: "person.age = 25",
      b: "person.add('age', 25)",
      c: "person.setProperty('age', 25)",
      d: "person['age'] = 25"
    },
    answer: "a"
  },
  {
    question: "What is the purpose of the map() method in JavaScript?",
    options: {
      a: "Iterates over the elements of an array and modifies them",
      b: "Creates a new array with the results of calling a function on every element",
      c: "Sorts the elements of an array in ascending order",
      d: "Checks if any element in an array satisfies a condition"
    },
    answer: "b"
  },
  {
    question: "How do you check if a specific key exists in an object?",
    options: {
      a: "obj.checkKey('key')",
      b: "obj.hasKey('key')",
      c: "'key' in obj",
      d: "obj.containsKey('key')"
    },
    answer: "c"
  },
  {
    question: "How do you concatenate two arrays in JavaScript?",
    options: {
      a: "arr1 + arr2",
      b: "arr1.concat(arr2)",
      c: "arr1.push(arr2)",
      d: "arr1.join(arr2)"
    },
    answer: "b"
  }
];

var currentQuestion = 0;
var score = 0;

function displayQuestion() {
var questionElement = document.getElementById("Question_th");
var optionElements = document.getElementsByClassName("label");
var currentQues = questions[currentQuestion];

questionElement.innerHTML = currentQues.question;
var optionKeys = Object.keys(currentQues.options);

for (var i = 0; i < optionElements.length; i++) {
  optionElements[i].innerHTML = currentQues.options[optionKeys[i]];
}
}

function checkAnswer() {
var options = document.getElementsByName("quizOption");
var selectedOption = "";

for (var i = 0; i < options.length; i++) {
  if (options[i].checked) {
    selectedOption = options[i].value;
    options[i].checked = false;
    break;
  }
}

if (selectedOption === questions[currentQuestion].answer) {
  score++;
}

currentQuestion++;

if (currentQuestion < questions.length) {
  displayQuestion();
} else {
  displayResult();
}
}

function displayResult() {
var quizContainer = document.getElementsByClassName("main_Container")[0];
quizContainer.innerHTML = "<h2>Your Score: " + score + "/" + questions.length + "</h2>";
}

// Start the quiz
displayQuestion();

// asdasdaskdf///////////////////
var currentQuestion = 0;
var score = 0;
var timer;

function displayQuestion() {
  var questionElement = document.getElementById("Question");
  var optionElements = document.getElementsByClassName("label");
  var currentQues = questions[currentQuestion];

  questionElement.innerHTML = "Q" + (currentQuestion + 1) + ") " + currentQues.question;
  var optionKeys = Object.keys(currentQues.options);

  for (var i = 0; i < optionElements.length; i++) {
    optionElements[i].innerHTML = currentQues.options[optionKeys[i]];
  }
}

function checkAnswer() {
  var options = document.getElementsByName("quizOption");
  var selectedOption = "";

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = options[i].value;
      options[i].checked = false;
      break;
    }
  }

  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    clearInterval(timer);
    displayResult();
  }
}

function displayResult() {
  var quizContainer = document.getElementsByClassName("main_Container")[0];
  quizContainer.innerHTML = "<h2>Your Score: " + score + "/" + questions.length + "</h2>";
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  var intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalId);
      checkAnswer();
    }
  }, 1000);
}


function displayQuiz() {
  var nextButton = document.getElementsByClassName("login100-form-btn")[0];
  nextButton.removeEventListener("click", displayQuiz);
  nextButton.textContent = "NEXT";

  var timerDisplay = document.getElementById("timer");
  var twoMinutes = 2 * 60;
  startTimer(twoMinutes, timerDisplay);

  checkAnswer();
  nextButton.addEventListener("click", function () {
    checkAnswer();
    clearInterval(timer);
    startTimer(twoMinutes, timerDisplay);
  });
}

// Start the quiz
displayQuestion();

