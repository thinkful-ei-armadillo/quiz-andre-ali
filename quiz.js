'use strict';

let questionNumber = -1;
let points = 0;


function evaluateAnswer() {
  const selectedAnswer = $('input[name="answer"]:checked').val()
  if (selectedAnswer === STORE[questionNumber].validAnswer) {
    renderFeedback(true);
  } else {
    renderFeedback(false);
  }
}

function renderFeedback() {
  if (true) {
    points++;
    const html = $(.questionContent).html();
    
  } else if (false) {
    correctAnswer = STORE[questionNumber].validAnswer;
    //${correctAnswer}
  }
  }
  /*if (
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
  }*/
function handleAnswer() {
  $('.questionContent').on('submit', '#multipleChoice', event => { 
    event.preventDefault();
    evaluateAnswer()
  });
}


function generateQuestion(num) {
  return `
    <h3>${STORE[num].question}</h3>
    <form id="multipleChoice">
      <label class="answerOption">
        <input type="radio" name="answer" value="${STORE[num].answer[0]}" required>
        <span>${STORE[num].answer[0]}</span>
      </label>
      <label class="answerOption">
        <input type="radio" name="answer" value="${STORE[num].answer[1]}" required>
        <span>${STORE[num].answer[1]}</span>
      </label>
      <label class="answerOption">
        <input type="radio" name="answer" value="${STORE[num].answer[2]}" required>
        <span>${STORE[num].answer[2]}</span>
      </label>
      <label class="answerOption">
        <input type="radio" name="answer" value="${STORE[num].answer[3]}" required>
        <span>${STORE[num].answer[3]}</span>
      </label>

      <input type="submit" value="Submit answer">
    </form>`;
}

function renderQuestion() {
  let html = generateQuestion(questionNumber);

  $('.questionContent').html(html);
}


function startQuiz() {
  questionNumber = 0;
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
