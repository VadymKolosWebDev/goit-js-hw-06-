const inputEl = document.querySelector('#validation-input');

const onInputBlur = function (event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
    }
}

inputEl.addEventListener('blur', onInputBlur);