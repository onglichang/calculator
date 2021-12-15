// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

// Display function
const firstNoDisplay = document.querySelector('.firstNo');
const evalDisplay = document.querySelector('.eval');
const operatorArr = [247, 215, 8722, 43]
const numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let secondNo = false;
let haveToEval = false;

function inputKey(e) {
    const inputVal = e.target.attributes.getNamedItem('data-key').value;
    console.log(e.target.innerText)
    console.log(inputVal.charCodeAt(0))
    console.log(typeof inputVal.charCodeAt(0));
    // Clear button will wipe input and output display whilst resetting original vals
    if (inputVal == "clear") {
        firstNoDisplay.innerText = "0";
        evalDisplay.innerText = "";
        secondNo = false;
        haveToEval = false;
    // Del button will remove one char from input display
    } else if (inputVal == "del") {
        firstNoDisplay.innerText = firstNoDisplay.innerText.slice(0, -1)
    } else if (inputVal == "equals") {
        if (haveToEval == true) {
            
        } 
    } else if (operatorArr.includes(inputVal.charCodeAt(0))) {
        // Base case
        if (haveToEval == false) {
            evalDisplay.innerText = firstNoDisplay.innerText + e.target.innerText;
            secondNo = true;
        } else {

        }
        // check to see if there is existing operator
        //console.log("hellpppp");
        //console.log(firstNoDisplay.innerText.length);
        //console.log(firstNoDisplay.innerText[firstNoDisplay.innerText.length]);
        
        // if (!(numberArr.includes(firstNoDisplay.innerText.
        //     charAt(firstNoDisplay.innerText.length - 1)))) {

        //     }
    } else {
        // if no number has been inputted previously or second no. needs to be eval
        if (firstNoDisplay.innerText == "0" && inputVal != ".") {
            firstNoDisplay.innerText = inputVal;
        } 
        if (secondNo == true) {
            firstNoDisplay.innerText = inputVal;
            secondNo = false;
            haveToEval = true;
        } else {
            firstNoDisplay.innerText += inputVal;
        }
    }
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('click', inputKey));