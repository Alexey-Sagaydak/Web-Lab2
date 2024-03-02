document.addEventListener('DOMContentLoaded', function() {
    let depositTypeSelect = document.getElementById('deposit-type');
    let termSelect = document.getElementById('term-select');

    depositTypeSelect.addEventListener('change', function() {
        termSelect.innerHTML = '';

        let depositType = depositTypeSelect.value;

        if (depositType === 'пополняемый') {
            addOption(termSelect, '6 месяцев (20%)', { months: 6, percentage: 0.2 });
            addOption(termSelect, '1 год (22%)', { months: 12, percentage: 0.22 });
            addOption(termSelect, '1.5 года (15%)', { months: 18, percentage: 0.15 });
            addOption(termSelect, '2 года (10%)', { months: 24, percentage: 0.1 });
        } else if (depositType === 'срочный') {
            addOption(termSelect, '3 месяца (20%)', { months: 3, percentage: 0.2 });
            addOption(termSelect, '6 месяцев (22%)', { months: 6, percentage: 0.22 });
            addOption(termSelect, '9 месяцев (23%)', { months: 9, percentage: 0.23 });
            addOption(termSelect, '1 год (24%)', { months: 12, percentage: 0.24 });
            addOption(termSelect, '1.5 года (18%)', { months: 18, percentage: 0.18 });
            addOption(termSelect, '2 года (15%)', { months: 24, percentage: 0.15 });
        }
    });

    function addOption(selectElement, text, value) {
        var option = document.createElement('option');
        option.text = text;
        option.value = JSON.stringify(value);
        selectElement.add(option);
    }

    depositTypeSelect.dispatchEvent(new Event('change'));
});
