function calc() {

    var a = parseInt(document.querySelector("#number1").value);
    var b = parseInt(document.querySelector("#number2").value);
    var op = document.querySelector("#operator").value;
    var calculate;
    if (op == "add") {
        calculate = a + b;
    }
    {
        document.querySelector('#result').innerHTML = calculate;
    }
}
