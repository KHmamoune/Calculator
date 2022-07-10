const num = document.querySelectorAll(".num")
const operation = document.querySelectorAll(".op")
const disp = document.querySelector(".disp")
const result = document.querySelector(".result")
let calc = {num1: "0" ,num2: "", op: ""} //add prevnum

result.addEventListener("click", () => showResult())

num.forEach(item => {
    item.addEventListener("click", () => {
        if(calc.op == ""){
            calc.num1 = calc.num1 + item.textContent
            disp.textContent = parseFloat(calc.num1)
        }else{
            calc.num2 = calc.num2 + item.textContent
            disp.textContent = parseFloat(calc.num2)
        }
    })
})

operation.forEach(item => {
    item.addEventListener("click", () => {
        calc.op = item.textContent
    })
})

function showResult(){
    calc.num1 = parseFloat(calc.num1)
    calc.num2 = parseFloat(calc.num2)
    if(calc.op == "+"){
        disp.textContent = calc.num1 + calc.num2
        calc.num1 = "0"
        calc.num2 = ""
        calc.op = ""
    }else if(calc.op == "-"){
        disp.textContent = calc.num1 - calc.num2
        calc.num1 = "0"
        calc.num2 = ""
        calc.op = ""
    }else if(calc.op == "*"){
        disp.textContent = calc.num1 * calc.num2
        calc.num1 = "0"
        calc.num2 = ""
        calc.op = ""
    }else if(calc.op == "/"){
        disp.textContent = calc.num1 / calc.num2
        calc.num1 = "0"
        calc.num2 = ""
        calc.op = ""
    }
}
