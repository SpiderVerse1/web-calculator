function calc() {

    var a = parseInt(document.querySelector("#num1").value)
    var b = parseInt(document.querySelector("#num2").value)
    var op = document.querySelector("#operator").value
    var calculate
    switch (op) {
        case "add":
            calculate = a + b
            break
        case "sub":
            calculate = a - b
            break
        case "div":
            calculate = a / b
            break
        case "mul":
            calculate = a * b
            break

    }
    document.querySelector('#result').innerHTML = calculate;
}