document.addEventListener('DOMContentLoaded', function() {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertBtn = document.getElementById('convertBtn');
    const result = document.getElementById('result');
    const convertedTemp = document.getElementById('convertedTemp');

    convertBtn.addEventListener('click', function() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature)) {
            alert('Please enter a valid number for temperature.');
            return;
        }

        let converted;
        let convertedUnit;

        if (unit === 'celsius') {
            converted = (temperature * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
        } else {
            converted = (temperature - 32) * 5/9;
            convertedUnit = 'Celsius';
        }

        convertedTemp.textContent = `${converted.toFixed(2)}° ${convertedUnit}`;
        result.classList.remove('result-hidden');
        result.classList.add('result-visible');
    });
});