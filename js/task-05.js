const refs = {
    inputRef: document.querySelector('#name-input'),
    spanRef: document.querySelector('#name-output'),
}

let defoltValue = "Anonymous"

const addText = () => !refs.inputRef.value.trim() ? refs.spanRef.textContent = defoltValue : refs.spanRef.textContent = refs.inputRef.value;

refs.inputRef.addEventListener('input', addText)