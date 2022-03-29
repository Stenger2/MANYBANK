let inputs = document.querySelectorAll('input[data-rule]')

for (let input of inputs) {
    input.addEventListener('blur', function () {
        let rule = this.dataset.rule

        let value = this.value
        let check

        switch (rule) {
            case 'name':
                check = /[A-Za-zA-Яф-яЁё]/.test(value)
                break;
        }

        if (check) {
            this.classList.add('form__box-input')
            this.classList.remove('invalid')
        }
        else {
            this.classList.remove('form__box-input')
            this.classList.add('invalid')
        }
    })
}