let questionNumber = 0;
let points = 0;

function generateHtml() {
  if (questionNumber === 0) {
    generateStart();
  }
  else if(questionNumber < STORE.length) {
    generateQuestion();
  }   
  else if (questionNumber > STORE.length) {
    generateDone();
    }
  }
}

//function evaluateAnswer() {
  if (
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
//}


generateQuestion() {
	
return     `<article class="content">
	    <h3>${STORE[questionNumber].question</h3>
 	    <form id="multipleChoice">
	    <label class="answerOption">
 	    <input type="text" value="${STORE[questionNumber].answers[0]} required>
	    <span>${STORE[questionNumber].answers[0]}</span>
	    </label>
	    <label class="answerOption">
	    <input type="radio" value="${STORE[questionNumber].answers[1]}" required>   	   <span>${STORE[questionNumber].answers[1]}</span>
	    </label>
	    <label class="answerOption">
            <input type="radio" value="${STORE[questionNumber].answers[2]}" required>              <span>${STORE[questionNumber].answers[2]}</span>
            </label>
	    <label class="answerOption">
            <input type="radio" value="${STORE[questionNumber].answers[3]}" required>              <span>${STORE[questionNumber].answers[3]}</span>
            </label>
	    <button type="submit">Submit Answer</button>
	    </form>
            </article>`


