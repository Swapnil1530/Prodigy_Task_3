let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementsByName("display")[0].value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementsByName("display")[0].value = displayValue;
}

function deleteLastCharacter() {
    displayValue = displayValue.toString().slice(0, -1);
    document.getElementsByName("display")[0].value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementsByName("display")[0].value = displayValue;
    } catch (error) {
        document.getElementsByName("display")[0].value = "Error";
    }
}
