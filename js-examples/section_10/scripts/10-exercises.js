const buttonElement = document.querySelector('.js-button');
console.log(buttonElement.classList.contains('js-button'));

const gamingButton = document.querySelector('.js-gaming-button');
gamingButton.addEventListener('click', () => {
    toggleGaming();
})

function toggleGaming() {
    if (gamingButton.classList.contains('is-toggled')) {
        gamingButton.classList.remove('is-toggled')
    } else {
        gamingButton.classList.add('is-toggled')
    }
}

const buttons = document.querySelectorAll('.button-group1');
handleButtonGroup1();

function handleButtonGroup1() {
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const targetButton = event.target;
            buttons.forEach(b => b.classList.remove('is-toggled'));
            targetButton.classList.add('is-toggled');
        })
    })
}