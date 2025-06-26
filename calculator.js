let result = document.getElementById('result');
let calculation = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'AC') {
            calculation = '';
            result.innerText = '0';
        } else if (button.id === 'del') {
            calculation = calculation.slice(0, -1);
            result.innerText = calculation || '0';
        } else if (button.id === '=') {
            try {
                calculation = eval(calculation);
                result.innerText = calculation;
            } catch (error) {
                result.innerText = 'Error';
                calculation = '';
            }
        } else {
            calculation += button.innerText;
            result.innerText = calculation;
        }
    });
});

