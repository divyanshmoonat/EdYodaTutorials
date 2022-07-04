// console.log("Assignment QUIZ");
// Question set and other variables

let questions = [];
let userAnswers = [-1, -1, -1, -1, -1];

function onInputClickHandler(e) {
  const inputArr = e.target.id.split("_");

  const questionId = inputArr[0];
  const optionIndex = inputArr[1];

  const questionIndex = questionId - 1;

  userAnswers[questionIndex] = optionIndex;
}

function renderQuestions(questions) {
  const form = document.getElementById("quizForm");

  for (let counter = 0; counter < questions.length; counter++) {
    const currentQuestion = questions[counter];

    // Create a wrapper div
    const wrapperDiv = document.createElement(`div`);

    const question = document.createElement("h3");
    question.innerText = "Q" + (counter + 1) + "." + currentQuestion.question;

    wrapperDiv.append(question);

    for (let i = 0; i < currentQuestion.options.length; i++) {
      const currentOption = currentQuestion.options[i];

      const input = document.createElement("input");
      input.name = `q_${counter + 1}`;
      input.id = currentQuestion.id + "_" + i;
      input.type = "radio";
      input.value = currentOption;
      input.required = true;
      input.addEventListener("click", onInputClickHandler);

      const label = document.createElement("label");
      label.htmlFor = currentQuestion.id + "_" + i;
      label.innerText = currentOption;

      wrapperDiv.append(input, label);
    }

    form.append(wrapperDiv);
  }

  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "Submit";

  form.append(submitBtn);
}

function onDocumentReadyHandler() {
  // AJAX HANDLER FUNCTIONS
  function onAjaxSuccessHander(data) {
    console.log(data);
    questions = data;
    renderQuestions(data);
  }

  function onAjaxErrorHandler(e) {
    console.log(e);
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    // console.log(e);
    // console.log(userAnswers);
    let score = 0;

    for (let counter = 0; counter < userAnswers.length; counter++) {
      const currentUserAnswer = userAnswers[counter];
      console.log(currentUserAnswer, questions[counter].answer);
      if (currentUserAnswer == questions[counter].answer - 1) {
        score++;
      }
    }

    const scoreSpan = document.getElementById("score");
    scoreSpan.innerText = score;
  }

  $.ajax({
    method: "GET",
    url: "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",
    success: onAjaxSuccessHander,
    error: onAjaxErrorHandler,
  });

  // Register submit handler on form
  const form = document.getElementById("quizForm");
  form.addEventListener("submit", onFormSubmitHandler);
}

$(document).ready(onDocumentReadyHandler);
