const inputEl = document.querySelector('#validation-input');

const onInputBlur = function (event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid').remove('invalid');
    } else {
        inputEl.classList.add('invalid').remove('valid');
    }
}

inputEl.addEventListener('blur', onInputBlur);