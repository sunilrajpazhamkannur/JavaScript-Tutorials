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