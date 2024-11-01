
const cardholderNameInput = document.querySelector('input[placeholder="e.g. Jane Appleseed"]');
const cardNumberInput = document.querySelector('input[placeholder="e.g. 1234 5678 9123 0000"]');
const expMonthInput = document.querySelector('input[placeholder="MM"]');
const expYearInput = document.querySelector('input[placeholder="YY"]');
const cvcInput = document.querySelector('input[placeholder="e.g. 123"]');


const confirmButton = document.querySelector('.footer');

confirmButton.addEventListener('click', function() {

    cardholderNameInput.value = '';
    cardNumberInput.value = '';
    expMonthInput.value = '';
    expYearInput.value = '';
    cvcInput.value = '';
});
