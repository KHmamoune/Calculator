const num = document.querySelectorAll(".num")
const operation = document.querySelectorAll(".op")
const calcs = document.querySelector(".calc")
const result = document.querySelector(".result")
const mini = document.querySelector(".mini")
let calc = {num1: "0" ,num2: "", op: "", prevnum: ""}

result.addEventListener("click", () => showResult())

num.forEach(item => {
    item.addEventListener("click", () => {
        if(calc.op == ""){
            mini.textContent = ""
            calc.num1 = calc.num1 + item.textContent
            calcs.textContent = parseFloat(calc.num1)
        }else{
            calc.num2 = calc.num2 + item.textContent
            calcs.textContent = parseFloat(calc.num2)
        }
    })
})

operation.forEach(item => {
    item.addEventListener("click", () => {
        if(calc.num1 == "0" && calc.prevnum != ""){
            calc.num1 = calc.prevnum
            calc.op = item.textContent
            mini.textContent = parseFloat(calc.num1) + " " + calc.op
        }else{
            calc.op = item.textContent
            mini.textContent = parseFloat(calc.num1) + " " + calc.op
        }
    })
})

function showResult(){
    calc.num1 = parseFloat(calc.num1)
    calc.num2 = parseFloat(calc.num2)
    if(calc.op == "+"){
        res = calc.num1 + calc.num2
        calcs.textContent = res
        mini.textContent = calc.num1 + " " + calc.op + " " + calc.num2 + " ="
        calc.prevnum = res
        calc.num1 = "0"
        calc.num2 = ""
        calc.op = ""
    }else if(calc.op == "-"){
        res = calc.num1 - calc.num2
        calcs.textContent = res
        mini.textContent = calc.num1 + " " + calc.op + " " + calc.num2 + " ="
        calc.prevnum = res
        calc.num1 = "0"
        calc.num2 = ""
        calc.op = ""
    }else if(calc.op == "*"){
        res = calc.num1 * calc.num2
        calcs.textContent = res
        mini.textContent = calc.num1 + " " + calc.op + " " + calc.num2 + " ="
        calc.prevnum = res
        calc.num1 = "0"
        calc.num2 = ""
        calc.op = ""
    }else if(calc.op == "/"){
        res = calc.num1 / calc.num2
        calcs.textContent = res
        mini.textContent = calc.num1 + " " + calc.op + " " + calc.num2 + " ="
        calc.prevnum = res
        calc.num1 = "0"
        calc.num2 = ""
        calc.op = ""
    }
}
