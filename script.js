let history = [];
let correctAnswer = 0;

function generateProblem() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    correctAnswer = num1 + num2;
    document.getElementById("problem").innerText = `${num1} + ${num2} = ?`;
    document.getElementById("userAnswer").value = "";
    document.getElementById("result").innerText = "Result: ";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("userAnswer").value);
    const isCorrect = userAnswer === correctAnswer;
    const resultText = isCorrect ? "Correct!" : "Incorrect!";
    document.getElementById("result").innerText = resultText;

    history.push(`${document.getElementById("problem").innerText} Your Answer: ${userAnswer}, Correct Answer: ${correctAnswer}, Result: ${resultText}`);
    updateHistory();
}

function updateHistory() {
    const historyElement = document.getElementById("history");
    historyElement.innerHTML = history.map(item => `<p>${item}</p>`).join('');
}

function clearHistory() {
    history = [];
    document.getElementById("history").innerHTML = "";
}

// Generate a problem on page load
generateProblem();
