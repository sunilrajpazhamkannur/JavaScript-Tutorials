let score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, ties: 0};
updateScore();

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerChoice;
    
    if (randomNumber < 1/3 && randomNumber >= 0) {
        computerChoice = 'rock';
    } else if (randomNumber < 2/3 && randomNumber >= 1/3) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

function playGame(playerMove) {
    let computerChoice = pickComputerMove();
    let result;

    if (playerMove === 'paper') {
        if (computerChoice === 'rock') {
            result = 'You win.';
        } else if (computerChoice === 'paper') {
            result = 'Tie.';
        } else {
            result = 'You lose.';
        }
    } else if (playerMove === 'rock') {
        if (computerChoice === 'rock') {
            result = 'Tie.';
        } else if (computerChoice === 'paper') {
            result = 'You lose.';
        } else {
            result = 'You win.';
        }
    } else {
        if (computerChoice === 'rock') {
            result = 'You lose.';
        } else if (computerChoice === 'paper') {
            result = 'You win.';
        } else {
            result = 'Tie.';
        }
    }

    if (result === 'You win.') {
        score.wins++;
    } else if (result === 'You lose.') {
        score.losses++;
    } else {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerText = result;
    document.querySelector('.js-moves').innerHTML = 
        `You <img class="move-icon" src="./images/${playerMove}-emoji.png"> <img class="move-icon" src="./images/${computerChoice}-emoji.png"> Computer`;
    updateScore();
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`
}

let isAutoPlaying = false;
let intervalId;
const autoPlayButton = document.querySelector('.js-auto-play-button');
function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        autoPlayButton.innerHTML = 'Stop playing';
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        autoPlayButton.innerHTML = 'Auto play';
        isAutoPlaying = false;
    }
}

function resetScore() {
    localStorage.removeItem('score');
    score = {wins: 0, losses: 0, ties: 0};
    updateScore();
    document.querySelector('.js-result').innerText = '';
}

function resetingScoreHandling() {
    comfimationPopup.innerHTML = `
    Are you sure you want to reset the score?
    <button class="js-yes-button">Yes</button>
    <button class="js-no-button">No</button>
    `;
    document.querySelector('.js-yes-button').addEventListener('click', () => {
        resetScore();
        comfimationPopup.innerHTML = '';
    });
    document.querySelector('.js-no-button').addEventListener('click', () => {
        comfimationPopup.innerHTML = '';
    });
}

const comfimationPopup = document.querySelector('.js-reset-comfirmation-popup');

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
})
document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
})
document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
})

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    }
})

autoPlayButton.addEventListener('click', () => {
    autoPlay();
})

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        autoPlay();
    }
})

document.querySelector('.js-reset-score-button').addEventListener('click', () => {
    resetingScoreHandling()
})

document.body.addEventListener('keydown', (event) => {
    resetingScoreHandling()
})