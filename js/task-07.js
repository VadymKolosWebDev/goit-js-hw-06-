const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onInputChange = function (event) {
    textEl.style.fontSize = event.currentTarget.value + 'px'
}

inputEl.addEventListener('input', onInputChange);