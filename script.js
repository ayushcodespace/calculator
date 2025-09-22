const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const darkModeToggle = document.getElementById('darkModeToggle');

let currentInput = '';

// Update display
function updateDisplay() {
  display.value = currentInput || '0';
}

// Handle button clicks
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    if (value) {
      currentInput += value;
      updateDisplay();
    }
  });
});

// Clear
clear.addEventListener('click', () => {
  currentInput = '';
  updateDisplay();
});

// Equals
equals.addEventListener('click', () => {
  try {
    currentInput = eval(currentInput).toString();
  } catch (e) {
    currentInput = 'Error';
  }
  updateDisplay();
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    currentInput += e.key;
    updateDisplay();
  } else if (e.key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
    } catch (err) {
      currentInput = 'Error';
    }
    updateDisplay();
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if (e.key.toLowerCase() === 'c') {
    currentInput = '';
    updateDisplay();
  }
});

// Dark mode toggle
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
