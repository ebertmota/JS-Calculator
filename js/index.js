const display = document.getElementById('display');

function showOnDisplay( numValue ) {
    display.value += numValue;
} 

function reset() {
    display.value = "";
}

function calculate() {
    var result = 0;
    result = display.value;
    display.value = '';
    display.value = eval(result);
    
}

const themeButton = document.getElementById('title');
const container = document.querySelector('main');
function toggleTheme() {
    container.classList.toggle("gradient-pink");
}