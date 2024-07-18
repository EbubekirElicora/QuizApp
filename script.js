let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat CSS erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Hakon Wium Lie",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Will Smith",
        "right_answer": 2
    },
    {
        "question": "Wer hat JAVA erfunden?",
        "answer_1": "James Gosling",
        "answer_2": "Hakon Wium Lie",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Robbie Williams",
        "right_answer": 1
    },
    {
        "question": "Wer hat JAVA-SCRIPT erfunden?",
        "answer_1": "Sylvester Stallone",
        "answer_2": "Hakon Wium Lie",
        "answer_3": "Arnold Schwarznegger",
        "answer_4": "Brendan Eich",
        "right_answer": 4
    },
    {
        "question": "Wer hat PYTHON erfunden?",
        "answer_1": "James Gosling",
        "answer_2": "Brendan Eich",
        "answer_3": "Guido van Rossum",
        "answer_4": "Tim Berners-Lee",
        "right_answer": 3
    },
    {
        "question": "Wer hat C++ erfunden?",
        "answer_1": "Anders Hejlsberg",
        "answer_2": "Bjarne Stroustrup",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Will Smith",
        "right_answer": 2
    }
];


let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
    } else {
        let question = questions[currentQuestion];

        document.getElementById('question_number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}
function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next_button').disabled = false;
}

function nextQuestion() {
    currentQuestion++
    document.getElementById('next_button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}