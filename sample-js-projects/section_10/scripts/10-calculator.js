let calculation = localStorage.getItem('calculation') || '';
updateCalculationDisplay();

function updateCalculation(str) {
    calculation += str;
    localStorage.setItem('calculation', calculation);
    updateCalculationDisplay();
}

function evalCalc() {
    calculation = eval(calculation);
    updateCalculationDisplay();
    localStorage.setItem('calculation', calculation);
}

function updateCalculationDisplay() {
    document.querySelector('.js-calculation-display').innerHTML = calculation;
}