let currentInput = '0';
let expression = '';
let shouldResetDisplay = false;

const resultDisplay = document.getElementById('result');
const expressionDisplay = document.getElementById('expression');

// Authentication elements
const authContainer = document.getElementById('auth-container');
const calculatorWrapper = document.getElementById('calculator-wrapper');
const googleSignInBtn = document.getElementById('google-signin-btn');
const signOutBtn = document.getElementById('signout-btn');
const authError = document.getElementById('auth-error');
const userName = document.getElementById('user-name');
const userPhoto = document.getElementById('user-photo');

// Google Sign-In Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Read auth set by firebase-config.js (exposed on window)
const auth = window.auth;

// Authentication State Observer
if (auth) {
    auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        showCalculator(user);
    } else {
        // User is signed out
        showAuthScreen();
    }
    });
} else {
    console.warn('Firebase auth not available yet. Ensure firebase-config.js runs before script.js.');
}

// Show authentication screen
function showAuthScreen() {
    authContainer.style.display = 'flex';
    calculatorWrapper.style.display = 'none';
    authError.textContent = '';
}

// Show calculator
function showCalculator(user) {
    authContainer.style.display = 'none';
    calculatorWrapper.style.display = 'block';
    
    // Update user info
    if (user.displayName) {
        userName.textContent = user.displayName;
    } else {
        userName.textContent = user.email;
    }
    
    if (user.photoURL) {
        userPhoto.src = user.photoURL;
        userPhoto.style.display = 'block';
    } else {
        userPhoto.style.display = 'none';
    }
}

// Google Sign-In
googleSignInBtn.addEventListener('click', async () => {
    try {
        authError.textContent = '';
        googleSignInBtn.disabled = true;
        googleSignInBtn.textContent = 'Signing in...';
        
        await auth.signInWithPopup(googleProvider);
    } catch (error) {
        console.error('Sign-in error:', error);
        authError.textContent = error.message || 'Failed to sign in. Please try again.';
        googleSignInBtn.disabled = false;
        googleSignInBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.965-2.184l-2.908-2.258c-.806.54-1.837.86-3.057.86-2.35 0-4.34-1.587-5.053-3.72H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
                <path d="M3.947 10.698c-.18-.54-.282-1.117-.282-1.698s.102-1.158.282-1.698V4.97H.957C.348 6.175 0 7.55 0 9s.348 2.825.957 4.03l2.99-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.582C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.97L3.947 7.3C4.66 5.163 6.65 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Sign in with Google
        `;
    }
});

// Sign Out
signOutBtn.addEventListener('click', async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error('Sign-out error:', error);
        alert('Error signing out: ' + error.message);
    }
});

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

// Expose functions for inline `onclick` handlers used in HTML
window.appendNumber = appendNumber;
window.appendOperator = appendOperator;
window.calculate = calculate;
window.clearAll = clearAll;
window.clearEntry = clearEntry;
window.deleteLast = deleteLast;

