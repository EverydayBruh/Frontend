document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const resultInput = document.getElementById('result');
        const buttonValue = this.textContent;

        if (buttonValue === 'C') {
            resultInput.value = '';
        } else if (buttonValue === '=') {
            try {
                resultInput.value = eval(resultInput.value);
            } catch (error) {
                resultInput.value = 'Ошибка!';
            }
        } else {
            resultInput.value += buttonValue;
        }
    });
});
