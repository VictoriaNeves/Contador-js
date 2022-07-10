var currentNumberWrapper = document.getElementById ('currentNumber')
var currentNumber = 0;

function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    // inner html -> pegar o conteúdo html dentro dele
}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    // inner html -> pegar o conteúdo html dentro dele
}


