let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result.toFixed(2); // Show result rounded to 2 decimal places
    } catch (error) {
        display.value = 'Error';
    }
}