var quizContent = document.getElementById("codeQuiz");
var resultsContent = document.getElementById("results");
var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var quizQuestions = [{
        question: "Question 1",
        answers: ["Answer A", "Answer B", "Answer C"],
        //   place the correct answer in answer spot with corresponding letter below
        correctAnswer: "Answer B"
    },
    {
        question: "Question 2",
        answers: ["Answer A", "Answer B", "Answer C"],
        //   place the correct answer in answer spot with corresponding letter below  
        correctAnswer: "a"
    },
    {
        question: "Question 3",
        answers: ["Answer A", "Answer B", "Answer C"],
        //   place the correct answer in answer spot with corresponding letter below
        correctAnswer: "c"
    }
];
var currentQuestionIndex = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    displayQuestion(quizQuestions[currentQuestionIndex]);
}

function displayQuestion(quizQuestion) {
    var questionText = document.createTextNode(quizQuestion.question);
    quizContent.appendChild(questionText);

    quizQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.textContent = answer;
        quizContent.appendChild(button);
        button.addEventListener("click", () => handleButtonClick(answer, quizQuestion.correctAnswer));
    });
    document.createElement("button");
}

function handleButtonClick(answer, correctAnswer) {
    if (answer === correctAnswer) {
        //Update page with Right! and increase score
        resultsContent.textContent = "Correct Answer";
    } else {
        // Update page with Wrong! and decrease decrement on the clock
        resultsContent.textContent = "Wrong Answer";
    }
    // display next question
    currentQuestionIndex++
    quizContent.innerHTML = "";
    displayQuestion(quizQuestions[currentQuestionIndex])

}