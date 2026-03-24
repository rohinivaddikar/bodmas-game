let step = 1;

function choose(option) {

    let feedback = document.getElementById("feedback");
    let expression = document.getElementById("expression");
    let options = document.getElementById("options");

    if (step === 1) {

        if (option === 'multiply') {
            feedback.innerHTML = "✅ Correct! Multiplication comes first (BODMAS)";
            expression.innerHTML = "5 + 6";

            options.innerHTML = `
                <button onclick="choose('final')">5 + 6</button>
            `;

            step = 2;

        } else {
            feedback.innerHTML = "❌ Wrong! Try again. Follow BODMAS rule.";
        }

    } else if (step === 2) {

        if (option === 'final') {
            feedback.innerHTML = "🎉 Final Answer = 11";
            options.innerHTML = "";
            document.getElementById("instruction").innerHTML = "✔ Completed!";
        }

    }
}
