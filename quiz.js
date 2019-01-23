'use strict';

let questionNumber = -1;
let points = 0;


function evaluateAnswer() {
  const selectedAnswer = $('input[name="answer"]:checked').val();
  if (selectedAnswer === STORE[questionNumber].validAnswer) {
    renderFeedback(true);
  } else {
    renderFeedback(false);
  }
}

function renderFeedback(isCorrect) {
  let html = '';

  if (isCorrect) {
    points++;
    $('#pointsNum').text(points);

    html = `<h3>You guessed it!</h3>`;
  } else {
    let correctAnswer = STORE[questionNumber].validAnswer;
    html = `<h3>WRONG! The correct answer was: ${correctAnswer}</h3>`;
  }

  html += `<button type="button">Go to next question</button>`;

  $('.questionContent').html(html);
}

  /*if (
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
  }*/
function handleAnswer() {
  $('.questionContent').on('submit', '#multipleChoice', event => { 
    event.preventDefault();
    evaluateAnswer();
  });
}


function generateQuestion(num) {
  let roulette = [0, 1, 2, 3];
  let answerHtml = '';

  for(let i = 0; i < STORE[num].answer.length; i++) {
    let index = roulette.splice(Math.floor(Math.random() * roulette.length), 1);

    answerHtml += `
      <label class="answerOption">
        <input type="radio" name="answer" value="${STORE[num].answer[index]}" required>
        <span>${STORE[num].answer[index]}</span>
      </label>`;
  }

  return `
    <h3>${STORE[num].question}</h3>
    <form id="multipleChoice">
      ${answerHtml}
      <input type="submit" value="Submit answer">
    </form>`;
}

function renderQuestion() {
  $('#questionNum').text(questionNumber + 2);
  let html = generateQuestion(++questionNumber);

  $('.questionContent').html(html);
}


function startQuiz() {
  $('.startPage').addClass('hidden');

  renderQuestion();
}


function handleStartQuiz() {
  $('#quizStartBtn').click(() => {
    startQuiz();
  });
}

function handleQuestionForm() {
  $('#multipleChoice').submit(event => {
    // fix this
    event.preventDefault();
  }); 
}

function main() {
  handleStartQuiz();
  handleQuestionForm();
  handleAnswer();
}

$(main);
