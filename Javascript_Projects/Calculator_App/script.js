const result = document.getElementById('result');

function append(value) {
    result.value += value;
}
function clearValue() {
    result.value = "";
}
function calculate() {
    try {
        result.value = eval(result.value);
    }
    catch {
        result.value = "Error";
    }
}