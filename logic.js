// Basic math functions
function add(a, b) {
    return Number((a+b).toFixed(5));
}

function subtract(a, b) {
    return Number((a - b).toFixed(5));
}

function multiply(a, b) {
    return Number((a * b).toFixed(5));
}

function divide(a, b) {
    return Number((a / b).toFixed(5));
}

function operate(operator, a, b) {
    switch(operator) {
        case 247:
            // return Number(divide(a, b).toPrecision(5));
            return divide(a, b);
        case 215:
            return multiply(a, b);
        case 8722:
            return subtract(a, b);
        case 43:
            return add(a, b);
        default:
            return "ERROR";

    }
}

// Display function
const firstNoDisplay = document.querySelector('.firstNo');
const evalDisplay = document.querySelector('.eval');
const operatorArr = [247, 215, 8722, 43]
const numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let secondNo = false;
let haveToEval = false;
let evaluated = false;

function inputKey(e) {
    const inputVal = e.target.attributes.getNamedItem('data-key').value;
    
    // Clear button will wipe input and output display whilst resetting original vals
    if (inputVal == "clear") {
        firstNoDisplay.innerText = "0";
        evalDisplay.innerText = "";
        secondNo = false;
        haveToEval = false;
        evaluated = false;
    // Del button will remove one char from input display
    } else if (inputVal == "del") {
        firstNoDisplay.innerText = firstNoDisplay.innerText.slice(0, -1);
    // Equals button will evaluate equation
    } else if (inputVal == "equals") {
        if (haveToEval == true) {
            const operator = evalDisplay.innerText.slice(-1).charCodeAt(0);
            const firstPart = evalDisplay.innerText.slice(0, -1);
            const secondPart = firstNoDisplay.innerText;
            // Display calculated values
            evalDisplay.innerText = firstPart + " " + String.fromCharCode(operator) +
                                    " " + secondPart + " =";
            firstNoDisplay.innerText = operate(operator, firstPart, secondPart);
            // Reset conditional
            haveToEval = false;
            evaluated = true;
        }
    } else if (operatorArr.includes(inputVal.charCodeAt(0))) {
        // Check for potential input of negative number
        if (inputVal.charCodeAt(0) == 8722 && firstNoDisplay.innerText == 0) {
            firstNoDisplay.innerText = "-";
        // Base case
        } else if (haveToEval == false) {
            evalDisplay.innerText = firstNoDisplay.innerText + e.target.innerText;
            secondNo = true;
        }
    } else {
        console.log("first", secondNo);
        // if a pair of numbers have been evaluated and a number is inputted
        if (evaluated == true && numberArr.includes(inputVal) && secondNo == false) {
            console.log("here", secondNo, haveToEval, evaluated);
            firstNoDisplay.innerText = inputVal;
            evalDisplay.innerText = "";
            secondNo = false;
            haveToEval = false;
            evaluated = false;
        // if no number has been inputted previously or second no. needs to be eval
        } else if (firstNoDisplay.innerText == "0" && inputVal != "." && secondNo == false) {
            firstNoDisplay.innerText = inputVal;
        } else if (secondNo == true) {
            if (inputVal == '.') {
                firstNoDisplay.innerText = '0' + inputVal;
                secondNo = false;
                haveToEval = true;
                evaluated = false;
            } else {
                firstNoDisplay.innerText = inputVal;
                secondNo = false;
                haveToEval = true;
                evaluated = false;
            }
        } else {
            firstNoDisplay.innerText += inputVal;
        }
    }
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('click', inputKey));