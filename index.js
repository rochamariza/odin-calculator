let tmp = 0;
let countSignal = 0
let currentOperator;
let result = false
const display = document.querySelector(".result")
const clear = document.querySelector(".clear")
const calculate = document.querySelector(".calculate")
const numbers = document.querySelectorAll(".number")
const signals = document.querySelectorAll(".signal")



// Operation Functions
function operate(operation, a, b){
    if(operation === "+"){
        return a + b
    }else if(operation === "-"){
        return a - b
    }
    else if(operation === "*"){
        return a * b
    }
    else if(operation === "/"){
        return a / b
    }
}

function updateDisplay(text){
    display.textContent += text
}
// Button click Listener
numbers.forEach((number) => {
    number.addEventListener("click", () =>{
        if(result){
            display.textContent = ""
            result = false
        }
        updateDisplay(number.value)
    })
})
signals.forEach((signal) => {
    signal.addEventListener("click", () => {
        updateDisplay(signal.value)
        if(countSignal === 0){
            currentOperator = signal.value
            countSignal += 1
        }
    })
})
// Keyboard Listener
document.addEventListener("keydown", (e) =>{
    if(e.key >= 0 && e.key <= 9){
        updateDisplay(e.key)
    }else if(e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/"){
        updateDisplay(e.key)
    }
})
calculate.addEventListener("click", () =>{
    let displayText = display.textContent
    let arr;
    if(displayText.includes("+") || displayText.includes("-") || displayText.includes("*") || displayText.includes("/")){
        arr = displayText.split(currentOperator)
        tmp = operate(currentOperator, parseInt(arr[0]), parseInt(arr[1]))
    }
    currentOperator = 0
    countSignal = 0
    result = true
    display.textContent = tmp
})
// Clear
clear.addEventListener("click", () =>{
    display.textContent = ""
})