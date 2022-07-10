const num = document.querySelectorAll(".num")
const operation = document.querySelectorAll(".op")
const calcs = document.querySelector(".calc")
const result = document.querySelector(".result")
const mini = document.querySelector(".mini")
const delet = document.querySelector(".del")
const ac = document.querySelector(".ac")
const r = document.querySelector(".r")
let calc = {num1: "0" ,num2: "0", op: "", prevnum: ""}

result.addEventListener("click", () => operate())
delet.addEventListener("click", () => del())
ac.addEventListener("click", () => clearAll())
r.addEventListener("click", () => re())

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
        }else if(calc.num2 != "0"){
            operate()
            calc.num1 = calc.prevnum
            calc.op = item.textContent
            mini.textContent = calc.num1 + " " + calc.op
        }else{
            calc.op = item.textContent
            mini.textContent = parseFloat(calc.num1) + " " + calc.op
            calcs.textContent = "0"
        }
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

function re(){
    calcs.textContent = 1 / calcs.textContent
    if(calc.op == ""){
        calc.num1 = calcs.textContent
    }else{
        calc.num2 = calcs.textContent
    }
}

function operate(){
    calc.num1 = parseFloat(calc.num1)
    calc.num2 = parseFloat(calc.num2)
    if(calc.op == "+"){
        add()
    }else if(calc.op == "-"){
        sub()
    }else if(calc.op == "*"){
        mult()
    }else if(calc.op == "/"){
        div()
    }else if(calc.op == "**"){
        pow()
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