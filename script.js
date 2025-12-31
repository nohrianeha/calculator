let currentInput = '0';
let expression = '';
let shouldResetDisplay = false;

const resultDisplay = document.getElementById('result');
const expressionDisplay = document.getElementById('expression');

function updateDisplay() {
    resultDisplay.textContent = currentInput;
    expressionDisplay.textContent = expression;
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else if (number === '.' && currentInput.includes('.')) {
        return; // Prevent multiple decimal points
    } else {
        currentInput += number;
    }
    
    updateDisplay();
}

function appendOperator(operator) {
    if (expression && !shouldResetDisplay) {
        calculate();
    }
    
    expression = currentInput + ' ' + operator;
    shouldResetDisplay = true;
    updateDisplay();
}

function calculate() {
    if (!expression) return;
    
    try {
        const operator = expression.split(' ')[1];
        const firstNumber = parseFloat(expression.split(' ')[0]);
        const secondNumber = parseFloat(currentInput);
        
        let result;
        
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                if (secondNumber === 0) {
                    resultDisplay.textContent = 'Error';
                    expression = '';
                    currentInput = '0';
                    return;
                }
                result = firstNumber / secondNumber;
                break;
            default:
                return;
        }
        
        // Round to avoid floating point precision issues
        result = Math.round(result * 100000000) / 100000000;
        
        currentInput = result.toString();
        expression = '';
        shouldResetDisplay = true;
        updateDisplay();
    } catch (error) {
        resultDisplay.textContent = 'Error';
        expression = '';
        currentInput = '0';
        updateDisplay();
    }
}

function clearAll() {
    currentInput = '0';
    expression = '';
    shouldResetDisplay = false;
    updateDisplay();
}

function clearEntry() {
    currentInput = '0';
    updateDisplay();
}

function deleteLast() {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    } else if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.') {
        appendNumber(key);
    } else if (key === '+') {
        appendOperator('+');
    } else if (key === '-') {
        appendOperator('-');
    } else if (key === '*') {
        appendOperator('*');
    } else if (key === '/') {
        event.preventDefault();
        appendOperator('/');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape') {
        clearAll();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    }
});

// Initialize display
updateDisplay();

