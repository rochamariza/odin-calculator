let tmp = 0;
let countSignal = 0
let result = false
const display = document.querySelector(".result")
const number = document.querySelectorAll(".number")
const calculate = document.querySelector(".calculate")

number.forEach((box) => {
    box.addEventListener("click", () =>{
        display.style = "font-size: 32px;"
        if(result === true){
            display.innerHTML = ""
            result = false
        }else if(display.innerHTML === "Only one operation allowed!"){
            display.innerHTML = ""
            result = false
        }
        display.textContent += box.value
    })
})
// Operations
document.querySelector(".sum").addEventListener("click", () =>{
    display.textContent += "+"
    countSignal += 1
})
document.querySelector(".sub").addEventListener("click", () =>{
    display.textContent += "-"
    countSignal += 1
})
document.querySelector(".mul").addEventListener("click", () =>{
    display.textContent += "*"
    countSignal += 1
})
document.querySelector(".div").addEventListener("click", () =>{
    display.textContent += "/"
    countSignal += 1
})
console.log(countSignal)

calculate.addEventListener("click", () =>{
    console.log(countSignal)
    if(display.textContent.includes("+")){
        let arr = display.innerHTML.split("+")
        tmp = operate(parseInt(arr[0]), parseInt(arr[1]), "+")
        display.textContent = tmp
    }else if(display.textContent.includes("-")){
        let arr = display.innerHTML.split("-")
        tmp = operate(parseInt(arr[0]), parseInt(arr[1]), "-")
        display.textContent = tmp
    }else if(display.textContent.includes("*")){
        let arr = display.innerHTML.split("*")
        tmp = operate(parseInt(arr[0]), parseInt(arr[1]), "*")
        display.textContent = tmp
    }else if(display.textContent.includes("/")){
        let arr = display.innerHTML.split("/")
        tmp = operate(parseInt(arr[0]), parseInt(arr[1]), "/")
        if(tmp % 2 === 0){
            display.textContent = tmp
        }else{
            display.textContent = tmp.toFixed(2)
        }

    }
    if(display.textContent.includes("/0")){
        display.textContent = "Snarky Error"
    }
    if(countSignal >= 2){
        display.textContent = "Only one operation allowed!"
        display.style = "font-size: 22px; right: 15px;\n" +
            "    top: 6px;"
    }
    countSignal = 0
    result = true
})
// Keyboard input
document.addEventListener("keydown", (e) =>{
    let key = e.key
    display.style = "font-size: 32px;"
    if(result === true){
        display.textContent = ""
        result === false
    }
    if(display.textContent === "Only one operation allowed!"){
        display.textContent = ""
        result === false
    }
    if(key >= 0 && key <= 9){
        display.textContent += key
    }else if(e.code === "Minus"){
        display.textContent += key
        countSignal += 1 // -
    }
    else if(e.code === "Digit8" && e.shiftKey === true){
        display.textContent += "*"
        countSignal += 1 // *
    }else if(e.code === "Equal" && e.shiftKey === true){
        display.textContent += "+"
        countSignal += 1 // +
    }else if(e.code === "Equal" && e.shiftKey === false){
        display.textContent = tmp // =
    }else if(e.code === "Enter"){
        display.textContent = tmp // Enter
    }
})
calculate.addEventListener("keydown", () =>{
    if(result === true){
        display.textContent = ""
    }
    if(display.textContent.includes("+")){
        let arr = display.textContent.split("+")
        tmp = operate(parseInt(arr[0]), parseInt(arr[1]))
        display.textContent = tmp
    } else if(display.textContent.includes("-")){
        let arr = display.textContent.split("-")
        tmp = operate(parseInt(arr[0]), parseInt(arr[1]))
        display.textContent = tmp
    }else if(display.textContent.includes("*")){
        let arr = display.textContent.split("*")
        tmp = operate(parseInt(arr[0]), parseInt(arr[1]))
        display.textContent = tmp
    }else if(display.textContent.includes("/0")){
        display.textContent = "Snarky Error"
    }else if(display.textContent.includes("/")){
        let arr = display.textContent.split("/")
        tmp = operate(parseInt(arr[0]), parseInt(arr[1]))
        display.textContent = tmp
    }else if(countSignal > 1){
        display.textContent = "Only one operation allowed!"
        display.style = "font-size: 22px; right: 15px;\n" +
            "    top: 6px;"
    }
    countSignal = 0
    result = true
})

// Clear
document.querySelector(".clear").addEventListener("click", () =>{
    display.textContent = ""
    result = false
    countSignal = 0
})
document.addEventListener("keydown", (e) =>{
    if(result === true && e.key === "0"){
        display.textContent = ""
        result= false
        countSignal = 0
    }
})
// Operation Functions
function operate(a, b, operation){
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
