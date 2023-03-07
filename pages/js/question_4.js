var defeat = new Audio('defeat.mp3');
var victory = new Audio('victory.mp3');
var myQuestions = [
	{
		question: "Por convenção, o sentido da corrente elétrica, num circuito, é o sentido do:",
		answers: {
			a: 'polo positivo do gerador para o polo negativo',
			b: 'polo negativo do gerador para o polo positivo.'
		},
		correctAnswer: 'a'
	},
	{
		question: "Símbolo de wallts e resistência.",
		answers: {
			a: 'P e I',
			b: 'I e V',
			c: 'P e R',
			d: 'U e R'
		},
		correctAnswer: 'c'
	},
	{
		question: "Qual o nome que recebeu a unidade de medida de resistência elétrica?",
		answers: {
			a: 'Volt',
			b: 'Ohm',
			c: 'Watt',
			d: 'Hz'
		},
		correctAnswer: 'b'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

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


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.background = '#f3f3f3';
				answerContainers[i].innerHTML = '<div class="evaluation">Resposta correta</div>'
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.background = '#f3f3f3';
				answerContainers[i].innerHTML = '<div class="evaluation">Resposta incorreta</div>'
			}
		}

    // show number of correct answers out of total

    if (numCorrect >= "3") {
      resultsContainer.innerHTML = numCorrect + " respostas corretas de " + questions.length + `<button onclick='window.location.href = "question_2.html"' id='next' type='button'>Próximo</button>`;
      victory.play();
    } else {
      window.alert("Você errou 2 ou mais questões");
      defeat.play();
    }

  }


	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}