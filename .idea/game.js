const choices = document.querySelectorAll('.choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', function() {
        const userChoice = this.getAttribute('data-choice');
        userChoiceDisplay.innerHTML = `<i class="fa fa-hand-${userChoice}"></i> ${userChoice}`;
        const computerChoice = getComputerChoice();
        computerChoiceDisplay.innerHTML = `<i class="fa fa-hand-${computerChoice}"></i> ${computerChoice}`;
        setTimeout(() => {
            const winner = getWinner(userChoice, computerChoice);
            updateScore(winner);
            if (userScore === 2 || computerScore === 2) {
                finishGame();
            }
        }, 1500);
    });
});

function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    return choices[Math.floor(Math.random() * 3)];
}

function getWinner(user, computer) {
    if (user === computer) {
        resultDisplay.textContent = 'Ups, empate';
        return 'draw';
    }
    if ((user === 'piedra' && computer === 'tijera') ||
        (user === 'papel' && computer === 'piedra') ||
        (user === 'tijera' && computer === 'papel')) {
        resultDisplay.textContent = '¡Muy bien, ganaste!';
        return 'user';
    }
    resultDisplay.textContent = 'Vaya... perdiste';
    return 'computer';
}

function updateScore(winner) {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
    scoreDisplay.textContent = `Usuario: ${userScore} - Computadora: ${computerScore}`;
}

function finishGame() {
    setTimeout(() => {
        if (userScore > computerScore) {
            alert('¡Felicidades, ganaste el juego!');
        } else {
            alert('Lo siento, perdiste el juego. Más suerte la próxima vez.');
        }
        window.location.href = 'index.html';
    }, 2000);
}