const num = document.querySelectorAll(".num")
const operation = document.querySelectorAll(".op")
const calcs = document.querySelector(".calc")
const result = document.querySelector(".result")
const mini = document.querySelector(".mini")
const delet = document.querySelector(".del")
const ac = document.querySelector(".ac")
const sp_op = document.querySelectorAll(".sp_op")
const dot = document.querySelector(".dot")
let calc = {num1: "0" ,num2: "0", op: "", prevnum: ""}

result.addEventListener("click", () => operate())
delet.addEventListener("click", () => del())
ac.addEventListener("click", () => clearAll())
dot.addEventListener("click", () => addDot())

num.forEach(item => {
    item.addEventListener("click", () => {
        addNum(item.textContent)
    })
})

operation.forEach(item => {
    item.addEventListener("click", () => {
        addOp(item.textContent)
    })
})

sp_op.forEach(item => {
    item.addEventListener("click", () => {
        addSpOp(item.textContent)
    })
})

function add(){
    res = calc.num1 + calc.num2
    calcs.textContent = res
    mini.textContent = calc.num1 + " " + calc.op + " " + calc.num2 + " ="
    calc.prevnum = res
    calc.num1 = "0"
    calc.num2 = "0"
    calc.op = ""
}

function sub(){
    res = calc.num1 - calc.num2
    calcs.textContent = res
    mini.textContent = calc.num1 + " " + calc.op + " " + calc.num2 + " ="
    calc.prevnum = res
    calc.num1 = "0"
    calc.num2 = "0"
    calc.op = ""
}

function mult(){
    res = calc.num1 * calc.num2
    calcs.textContent = res
    mini.textContent = calc.num1 + " " + calc.op + " " + calc.num2 + " ="
    calc.prevnum = res
    calc.num1 = "0"
    calc.num2 = "0"
    calc.op = ""
}

function div(){
    res = calc.num1 / calc.num2
    calcs.textContent = res
    mini.textContent = calc.num1 + " " + calc.op + " " + calc.num2 + " ="
    calc.prevnum = res
    calc.num1 = "0"
    calc.num2 = "0"
    calc.op = ""
}

function pow(){
    res = calc.num1 ** calc.num2
    calcs.textContent = res
    mini.textContent = calc.num1 + " " + calc.op + " " + calc.num2 + " ="
    calc.prevnum = res
    calc.num1 = "0"
    calc.num2 = "0"
    calc.op = ""
}

function inverse(){
    calcs.textContent = 1 / calcs.textContent
    if(calc.op == ""){
        calc.num1 = calcs.textContent
    }else{
        calc.num2 = calcs.textContent
    }
}

function factor(){
    let fact = 1
    if(calc.op == ""){
        for(i=1; i<=calc.num1; i++){
            fact = fact * i
        }
        calc.num1 = fact
    }else{
        for(i=1; i<=calc.num1; i++){
            fact = fact * i
        }
        calc.num2 = fact
    }
    calcs.textContent = fact
}

function root(){
    calcs.textContent = Math.sqrt(calcs.textContent)
    if(calc.op == ""){
        calc.num1 = calcs.textContent
    }else{
        calc.num2 = calcs.textContent
    }
}

function negative(){
    calcs.textContent = -1 * calcs.textContent
    if(calc.op == ""){
        calc.num1 = calcs.textContent
    }else{
        calc.num2 = calcs.textContent
    }
}

function square(){
    calcs.textContent = calcs.textContent ** 2
    if(calc.op == ""){
        calc.num1 = calcs.textContent
    }else{
        calc.num2 = calcs.textContent
    }
}

function addDot(){
    if(calc.num1.includes(".") == false){
        if(calc.op == ""){
            calc.num1 = calc.num1 + dot.textContent
            calcs.textContent = parseFloat(calc.num1)
        }else{
            calc.num2 = calc.num2 + dot.textContent
            calcs.textContent = parseFloat(calc.num2)
        }
    }
}

function del(){
    calcs.textContent = calcs.textContent.slice(0, -1);
    if(calc.op == ""){
        calc.num1 = calcs.textContent
    }else{
        calc.num2 = calcs.textContent
    }
}

function clearAll(){
    calcs.textContent = "0"
    mini.textContent = ""
    calc.num1 = "0"
    calc.num2 = "0"
    calc.op = ""
    calc.prevnum = ""
}

function addNum(number){
    if(calc.op == ""){
        mini.textContent = ""
        calc.num1 = calc.num1 + number
        calcs.textContent = parseFloat(calc.num1)
    }else{
        calc.num2 = calc.num2 + number
        calcs.textContent = parseFloat(calc.num2)
    }
}

function addOp(operator){
    if(calc.num1 == "0" && calc.prevnum != ""){
        calc.num1 = calc.prevnum
        calc.op = operator
        mini.textContent = parseFloat(calc.num1) + " " + calc.op
    }else if(calc.num2 != "0"){
        operate()
        calc.num1 = calc.prevnum
        calc.op = operator
        mini.textContent = calc.num1 + " " + calc.op
    }else{
        calc.op = operator
        mini.textContent = parseFloat(calc.num1) + " " + calc.op
        calcs.textContent = "0"
    }
}

function addSpOp(spOp){
    if(spOp == "1/x"){
        inverse()
    }else if(spOp == "x!"){
        factor()
    }else if(spOp == "√"){
        root()
    }else if(spOp == "+/-"){
        negative()
    }else if(spOp == "x²"){
        square()
    }
}

function operate(){
    calc.num1 = parseFloat(calc.num1)
    calc.num2 = parseFloat(calc.num2)
    if(calc.op == "/" && calc.num2 == 0){
        alert("not exactly sure what are you trying to prove here but it isn't saying much about you math abilities")
    }else if(calc.op == "+"){
        add()
    }else if(calc.op == "-"){
        sub()
    }else if(calc.op == "x"){
        mult()
    }else if(calc.op == "/"){
        div()
    }else if(calc.op == "^"){
        pow()
    }
}