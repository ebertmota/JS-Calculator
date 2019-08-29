const display = document.getElementById('display');

function showOnDisplay( numValue ) {
    display.value += numValue;
} 

function reset() {
    display.value = "";
}

function calculate() {
    if (display.value == "" || display.value == "+" || display.value == "-" || 
        display.value == "/" || display.value == "*"){
        display.value = "Nenhum valor inserido!"
    }else {
        var result = 0;
        result = display.value;
        display.value = '';
        display.value = eval(result);
    }
}


// ------------------ Armazenando tema no LocalStorage ------------------- //

var gradientPink = "gradient-pink";
var gradientBlue = "gradient-blue";
const themeButton = document.getElementById('title');
const container = document.querySelector('main');


function toggleTheme() {                                        //  troca o tema com o click no botao Js calculator
    container.classList.toggle("gradient-pink");
}

container.addEventListener("click",function setDefaultTheme() {
    var currentPinkTheme = container.classList.contains("gradient-pink");
    if (currentPinkTheme) {                                     //  se o container tiver a classe gradient-pink
        localStorage.setItem('currentTheme', gradientPink );    //  ele guarda essa classe no localStorage
    }else {                                                     //  se nao tiver ou for trocada
        localStorage.setItem('currentTheme', gradientBlue);     //  ele guarda a classe gradient-azul no localStorage
    }
})

if (localStorage.currentTheme){                                 //  se a chave currentTheme existir no LocalStorage
    container.classList.add(localStorage.currentTheme);         //  ele coloca o valor dela como tema do container
}
