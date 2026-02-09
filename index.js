let tmp = 0
let countSignal = 0
let currentOperator
let result = false
const display = document.querySelector(".result")
const clear = document.querySelector(".clear")
const calculate = document.querySelector(".calculate")
const numbers = document.querySelectorAll(".number")
const signals = document.querySelectorAll(".signal")
let arr
let value = 0

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
        if(number.value >= 0 && number.value <= 9){
            updateDisplay(number.value)
        }
        else if(display.textContent !== "" && number.value === "." && value === 0){
            updateDisplay(number.value)
            value = 1
            console.log(number.value)
        }
    })
})
signals.forEach((signal) => {
    signal.addEventListener("click", () => {
        if(signal.value === "+" || signal.value === "-" || signal.value === "*" || signal.value === "/"){
            if(display.textContent !== "" && countSignal === 0){
                updateDisplay(signal.value)
                currentOperator = signal.value
                countSignal = 1
                result = false
                value = 0
                console.log(signal.value)
            }
        }
    })
})
// Keyboard Listener
document.addEventListener("keydown", (e) =>{
    if(e.key >= 0 && e.key <= 9){
        if(result){
            display.textContent = ""
            result = false
        }
        updateDisplay(e.key)
    }else if(e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/"){
        if(display.textContent !== "" && countSignal === 0){
            updateDisplay(e.key)
            currentOperator = e.key
            countSignal = 1
            result = false
        }
    }else if(display.textContent !== "" && e.key === "." && value === 0){
        updateDisplay(e.key)
        value = 1
    }
})
// Calculate
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        calculate.click()
    }
})

calculate.addEventListener("click", () =>{
    if(display.textContent.includes("+") || display.textContent.includes("-") || display.textContent.includes("*") || display.textContent.includes("/")){
        arr = display.textContent.split(currentOperator)
        console.log(arr)
        if(currentOperator === "/" && parseFloat(arr[1]) === 0){
            display.textContent = "Snarky Error"
            result = true
        }else{
            tmp = operate(currentOperator, parseFloat(arr[0]), parseFloat(arr[1]))
            result = true
            if(tmp % 2 === 0 || tmp % 2 === 1){
                display.textContent = tmp
            }
            else{
                display.textContent = tmp.toFixed(2)
            }
        }
        currentOperator = 0
        countSignal = 0
    }

})
// Clear
clear.addEventListener("click", () =>{
    display.textContent = ""
    currentOperator = 0
    countSignal = 0
    result = false
    value = 0
})