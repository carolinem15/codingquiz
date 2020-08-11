window.onload = function () {


    var startButton = document.getElementById('startbutton')
    var questionList, currentQuestion
    startButton.addEventListener("click", startGame)

    function startGame() {
        questionList = questions.Math.floor(Math.random() * items.length);
    }

    setNextQuestion



    function nextButton() {

    }

    function submitanswer() {

    }

    var questions = [{
            question: "1",
            answer: {
                text: "True",
                correct: true,
                text: "False",
                correct: false,
            }
            question: "2",
            answer: {
                text: "True",
                correct: true,
                text: "False",
                correct: false,
            }
            question: "3",
            answer: {
                text: "True",
                correct: true,
                text: "False",
                correct: false,
            }
            question: "4",
            answer: {
                text: "True",
                correct: true,
                text: "False",
                correct: false,
            }
        }

    ]

}