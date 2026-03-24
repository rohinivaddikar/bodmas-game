let correctAnswer = 11;

document.getElementById("question").innerText = "5 + 3 × 2 = ?";

function checkAnswer(answer) {
    if(answer === correctAnswer){
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }
}