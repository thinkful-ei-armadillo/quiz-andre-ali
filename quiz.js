let questionNumber = 1;
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

generateStart() {
  
}
