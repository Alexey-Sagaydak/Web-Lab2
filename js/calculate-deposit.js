function calculateDeposit() {
    let depositTypeSelect = document.getElementById('deposit-type');
    let termSelect = document.getElementById('term-select');
    let amountInput = document.getElementById('amount-input');
    let resultTextarea = document.getElementById('result-textarea');

    if (!validateForm()) {
        return;
    }

    let depositType = depositTypeSelect.value;
    let termOption = JSON.parse(termSelect.value);
    let termMonths = termOption.months;
    let termPercentage = termOption.percentage;
    let amount = parseFloat(amountInput.value);

    let finalAmount = calculateFinalAmount(amount, termPercentage, termMonths);

    let message = "Вид вклада: " + depositType + "\n";
    message += "Срок вклада: " + termMonths + " мес.\n";
    message += "Сумма вклада: " + amount + " руб.\n";
    message += "Сумма в конце срока: " + finalAmount.toFixed(2) + " руб.";

    resultTextarea.value = message;
}

function validateForm() {
    let depositTypeSelect = document.getElementById('deposit-type');
    let termSelect = document.getElementById('term-select');
    let amountInput = document.getElementById('amount-input');

    if (depositTypeSelect.value === "" || termSelect.value === "" || amountInput.value === "") {
        alert("Пожалуйста, заполните все поля формы.");
        return false;
    }
    return true;
}

function calculateFinalAmount(amount, percentage, months) {
    let rate = 1 + (percentage / 12);
    let finalAmount = amount * Math.pow(rate, months);
    return finalAmount;
}