let tmp = 0;
let countSignal = 0
let result = 0
const display = document.querySelector(".result")
const number = document.querySelectorAll("#number")
const calculate = document.querySelector(".calculate")

number.forEach((box) => {
    box.addEventListener("click", () =>{
        display.style = "font-size: 32px;"
        if(result === 1){
            display.innerHTML = ""
        }
        if(display.innerHTML === "Only one operation allowed!"){
            display.innerHTML = ""
        }
        display.innerHTML += box.value
    })
})
// Operations
document.querySelector(".sum").addEventListener("click", () =>{
    display.innerHTML += "+"
    countSignal += 1
})
document.querySelector(".sub").addEventListener("click", () =>{
    display.innerHTML += "-"
    countSignal += 1
})
document.querySelector(".mul").addEventListener("click", () =>{
    display.innerHTML += "*"
    countSignal += 1
})
document.querySelector(".div").addEventListener("click", () =>{
    display.innerHTML += "/"
    countSignal += 1
})
console.log(countSignal)

calculate.addEventListener("click", () =>{
    console.log(countSignal)
    if(display.innerHTML.includes("+")){
        let arr = display.innerHTML.split("+")
        tmp = sum(parseInt(arr[0]), parseInt(arr[1]))
        display.innerHTML = tmp
    }
    if(display.innerHTML.includes("-")){
        let arr = display.innerHTML.split("-")
        tmp = subtract(parseInt(arr[0]), parseInt(arr[1]))
        display.innerHTML = tmp
    }
    if(display.innerHTML.includes("*")){
        let arr = display.innerHTML.split("*")
        tmp = multiplicate(parseInt(arr[0]), parseInt(arr[1]))
        display.innerHTML = tmp
    }
    if(display.innerHTML.includes("/0")){
        display.innerHTML = "Snarky Error"
    }
    if(display.innerHTML.includes("/")){
        let arr = display.innerHTML.split("/")
        tmp = divide(parseInt(arr[0]), parseInt(arr[1]))
        display.innerHTML = tmp
    }
    if(countSignal > 1){
        display.innerHTML = "Only one operation allowed!"
        display.style = "font-size: 22px; right: 15px;\n" +
            "    top: 6px;"
    }
    countSignal = 0
    result += 1
})
// Keyboard input
document.addEventListener("keydown", (e) =>{
    let key = e.key
    display.style = "font-size: 32px;"
    if(result === 1){
        display.innerHTML = ""
    }
    if(display.innerHTML === "Only one operation allowed!"){
        display.innerHTML = ""
    }
    if(key >= 0 && key <= 9){
        display.innerHTML += key
    }else if(e.code === "Minus"){
        display.innerHTML += key
        countSignal += 1 // -
    }
    else if(e.code === "Digit8" && e.shiftKey === true){
        display.innerHTML += "*"
        countSignal += 1 // *
    }else if(e.code === "Equal" && e.shiftKey === true){
        display.innerHTML += "+"
        countSignal += 1 // +
    }else if(e.code === "Equal" && e.shiftKey === false){
        display.innerHTML = tmp // =
    }else if(e.code === "Enter"){
        display.innerHTML = tmp // Enter
    }
})
calculate.addEventListener("keydown", () =>{
    if(result === 1){
        display.innerHTML = ""
    }
    if(display.innerHTML.includes("+")){
        let arr = display.innerHTML.split("+")
        tmp = sum(parseInt(arr[0]), parseInt(arr[1]))
        display.innerHTML = tmp
    }
    if(display.innerHTML.includes("-")){
        let arr = display.innerHTML.split("-")
        tmp = subtract(parseInt(arr[0]), parseInt(arr[1]))
        display.innerHTML = tmp
    }
    if(display.innerHTML.includes("*")){
        let arr = display.innerHTML.split("*")
        tmp = multiplicate(parseInt(arr[0]), parseInt(arr[1]))
        display.innerHTML = tmp
    }
    if(display.innerHTML.includes("/0")){
        display.innerHTML = "Snarky Error"
    }
    if(display.innerHTML.includes("/")){
        let arr = display.innerHTML.split("/")
        tmp = divide(parseInt(arr[0]), parseInt(arr[1]))
        display.innerHTML = tmp
    }
    if(countSignal > 1){
        display.innerHTML = "Only one operation allowed!"
        display.style = "font-size: 22px; right: 15px;\n" +
            "    top: 6px;"
    }
    countSignal = 0
    result += 1
})


// Clear
document.querySelector(".clear").addEventListener("click", () =>{
    display.innerHTML = ""
    result= 0
    countSignal = 0
})
// Operation Functions
function sum(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiplicate(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

