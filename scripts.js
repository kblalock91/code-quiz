var quizCont = document.getElementById("codeQuiz");
var resultsCont = document.getElementById("results");
var submitButton = document.getElementById("submit");

quiz();

function quiz() {}

function showResults() {}


var quizQuestions = [{
        question: " Question 1",
        answers: {
            a: "Answer A",
            b: "Answer B",
            c: "Answer C"
        },
        //   place the correct answer in answer spot with corresponding letter below
        correctAnswer: "b"
    },
    {
        question: "Question 2",
        answers: {
            a: "Answer A",
            b: "Answer B",
            c: "Answer C"
        },
        //   place the correct answer in answer spot with corresponding letter below  
        correctAnswer: "a"
    },
    {
        question: "Question 3",
        answers: {
            a: "Answer A",
            b: "Answer B",
            c: "Answer C",
        },
        //   place the correct answer in answer spot with corresponding letter below
        correctAnswer: "c"
    }
];


submitButton.addEventListener('click', showResults);