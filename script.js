const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        answers: {
            A: "Jakarta",
            B: "Bandung",
            C: "Surabaya",
            D: "Yogyakarta"
        },
        correctAnswer: "A"
    },
    {
        question: "Siapa presiden pertama Indonesia?",
        answers: {
            A: "Soeharto",
            B: "B.J. Habibie",
            C: "Ir. Soekarno",
            D: "Joko Widodo"
        },
        correctAnswer: "C"
    },
    {
        question: "Berapa jumlah provinsi di Indonesia?",
        answers: {
            A: "34",
            B: "33",
            C: "32",
            D: "31"
        },
        correctAnswer: "A"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach((button, index) => {
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        button.innerText = question.answers[letter];
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").innerHTML = `
        <h2>Quiz Selesai!</h2>
        <p>Skor Anda: ${score}</p>
        <button onclick="restartQuiz()">Coba Lagi</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

loadQuestion();
