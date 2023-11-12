function correctInput(inputId) {
    var inputValue = Math.min(Math.max(0, parseFloat(document.getElementById(inputId).value) || 0), 9999);
    document.getElementById(inputId).value = inputValue;
    var maxNumber = Math.max(
        parseFloat(document.getElementById("number1").value),
        parseFloat(document.getElementById("number2").value),
        parseFloat(document.getElementById("number3").value)
    );
    document.getElementById("maxNumber").innerText = maxNumber === 0 ? "-" : maxNumber;
}