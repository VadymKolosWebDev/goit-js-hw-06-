const inputEl = document.querySelector('#name-input');
const nameLabelEl = document.querySelector('#name-output');

const onInputChange = function (event) {
    if (event.currentTarget.value === "") {
        nameLabelEl.textContent = 'Anonymous'
    } else {
         nameLabelEl.textContent = event.currentTarget.value;
    }
}

inputEl.addEventListener('input', onInputChange);