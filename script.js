const quizData = [
  {
    question: 'What does HTML stand for?',
    a: 'Hyper Text Markup Language',
    b: 'Hyper Title Manage Language',
    c: 'Hypo Tutor Main Language',
    d: 'Anyone of them',
    correct: 'a',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Computer Style Sheets',
    b: 'Colorful Style Sheets',
    c: 'Cascading Style Sheets',
    d: 'Creative Style Sheets',
    correct: 'c',
  },
  {
    question: 'Which HTML tag is used to define an internal style sheet?',
    a: 'css',
    b: 'script',
    c: 'body',
    d: 'style',
    correct: 'd',
  },
  {
    question: 'Which HTML attribute is used to define inline styles?',
    a: 'class',
    b: 'font',
    c: 'style',
    d: 'styles',
    correct: 'c',
  },
  {
    question: 'Which is the correct CSS syntax?',
    a: 'body{color :black;}',
    b: '{body; color:black}',
    c: '{body = color : black;}',
    d: 'body = color : black;',
    correct: 'a',
  },
];
let currentQuestion = 0;

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

function getSelected() {
  const answersEl = document.querySelectorAll('.answer');
  let answer = undefined;
  answersEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer == quizData[currentQuestion].correct) {
      alert("That's true!");
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuiz();
      } else {
        alert('You finished the quiz!!!');
      }
    } else {
      alert('Try again!');
    }
  }
});

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}
