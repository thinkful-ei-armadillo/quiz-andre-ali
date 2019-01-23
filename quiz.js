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

    html = `<h3>You guessed it!</h3><img src="${STORE[questionNumber].correctGif}" alt="${STORE[questionNumber].correctAlt}">`;
  } else {
    let correctAnswer = STORE[questionNumber].validAnswer;
    html = `<h3>WRONG! The correct answer was: ${correctAnswer}</h3><img src="${STORE[questionNumber].incorrectGif}" alt="${STORE[questionNumber].incorrectAlt}">`;
  }

  $('#pointsNumTotal').text(questionNumber + 1);
  if(questionNumber === STORE.length - 1) {
    html += '<button type="button" id="lastOne">See results</button>';
  } else {
    html += '<button type="button" id="nextOne">Go to next question</button>';
  }

  $('.questionContent').html(html);
}

  /*if (
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
  }*/



function generateQuestion(num) {
  let roulette = [0, 1, 2, 3];
  let answerHtml = '';

  for(let i = 0; i < STORE[num].answer.length; i++) {
    let index = roulette.splice(Math.floor(Math.random() * roulette.length), 1);

    answerHtml += `
      <label class="answerOption">
        <input type="radio" name="answer" value="${STORE[num].answer[index]}" class="answerInput" required>
        <span>${STORE[num].answer[index]}</span>
      </label>`;
  }

  return `
    <h2>${STORE[num].question}</h2>
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
  $('.questionContent').removeClass('hidden');
  $('.startPage').addClass('hidden');

  renderQuestion();
  
}

function restartQuiz() {
  $('.startPage').removeClass('hidden');
  $('.resultsPage').addClass('hidden');
  questionNumber = -1;
  points = 0;
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

function handleAnswer() {
  $('.questionContent').on('submit', '#multipleChoice', event => { 
    event.preventDefault();
    evaluateAnswer();
  });
}

function handleNextQuestion() {
  $('.questionContent').on('click', '#nextOne', event => {
    renderQuestion();
  });
}

function handleShowResults() {
  $('.questionContent').on('click', '#lastOne', event => {
    $('.resultsPage').removeClass('hidden');
    $('.questionContent').addClass('hidden');
    if (points === 1) {
    $('#finalScore').text(`${points} point`);
    } else {
    $('#finalScore').text(`${points} points`);
    }
  });
}

function handleRestart() {
  $('.resultsPage').on('click', '#quizRestart', event => {
   restartQuiz();
  })
}

/*function handleAnswerSelect() {
  $('.answerOption').on('click', '.answerInput', event => {
    event.currentTarget
  });
}*/


function main() {
  handleStartQuiz();
  handleQuestionForm();
  handleAnswer();
  handleNextQuestion();
  handleShowResults();
  handleRestart();
}

$(main);
