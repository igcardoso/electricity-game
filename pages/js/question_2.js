var defeat = new Audio('defeat.mp3');
var victory = new Audio('victory.mp3');
var myQuestions = [{
  question: "A corrente elétrica é:",
  answers: {
    a: 'O movimento desordenado dos eletrões através de um fio condutor',
    b: 'O movimento ordenado dos átomos através de um fio condutor',
    c: 'O movimento ordenado dos elétrons através de um fio condutor',
    d: 'Nenhuma das opções anteriores está correta'
  },
  correctAnswer: 'c'
},
  {
    question: "Considerando-se materiais isolantes e condutores de corrente elétrica, marque a alternativa que contém apenas materiais condutores de eletricidade.",
    answers: {
      a: 'Borracha, madeira e água',
      b: 'Água, cobre e ferro',
      c: 'Borracha, alumínio e cobre',
      d: 'Água, madeira seca e borracha'
    },
    correctAnswer: 'b'
  },
  {
    question: "(Enem) Um circuito em série é formado por uma pilha, uma lâmpada incandescente e uma chave interruptora. Ao se ligar a chave, a lâmpada acende quase instantaneamente, irradiando calor e luz. Popularmente, associa-se o fenômeno da irradiação de energia a um desgaste da corrente elétrica, ao atravessar o filamento da lâmpada, e à rapidez com que a lâmpada começa a brilhar. Essa explicação está em desacordo com o modelo clássico de corrente. De acordo com o modelo mencionado, o fato de a lâmpada acende quase instantaneamente  está relacionado à rapidez com que:",
    answers: {
      a: 'O fluido elétrico se desloca no circuito',
      b: 'As cargas negativas móveis atravessam o circuito',
      c: 'A bateria libera cargas móveis para o filamento da lâmpada',
      d: 'O campo elétrico se estabelece em todos os pontos do circuito',
      e: 'As cargas positivas e negativas se chocam no filamento da lâmpada'
    },
    correctAnswer: 'd'
  }];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

      // first reset the list of answers
      answers = [];

      // for each available answer...
      for (letter in questions[i].answers) {

        // ...add an html radio button
        answers.push(
          '<label>'
          + '<input type="radio" name="question'+i+'" value="'+letter+'">'
          + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer) {

    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked') || {}).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.background = '#f3f3f3';
        answerContainers[i].innerHTML = '<div class="evaluation">Resposta correta</div>'
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[i].style.background = '#f3f3f3';
        answerContainers[i].innerHTML = '<div class="evaluation">Resposta incorreta</div>'
      }
    }

    // show number of correct answers out of total

    if (numCorrect >= "3") {
      resultsContainer.innerHTML = numCorrect + " respostas corretas de " + questions.length + `<button onclick='window.location.href = "question_3.html"' id='next' type='button'>Próximo</button>`;
      victory.play();
    } else {
      window.alert("Você errou 2 ou mais questões");
      defeat.play();
    }

  }


  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);
  }

}