const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestion = 0;
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    
    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(userAnswer) {
    const currentQuizData = quizData[currentQuestion];
    count = 0
    if (userAnswer === currentQuizData.correctAnswer) {
        console.log("Correct!");
        count=count+1
    } else {
        console.log("Wrong answer. The correct answer is: " + currentQuizData.correctAnswer);
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        console.log("Quiz completed!");
    }
}

loadQuestion();