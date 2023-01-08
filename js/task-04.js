const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const decrement = function() {
    counterValue -= 1;
};

const increment = function () {
    counterValue += 1;
}

decrementBtn.addEventListener('click', function() {
    decrement();
    valueEl.textContent = counterValue;
})

incrementBtn.addEventListener('click', function () {
    increment();
    valueEl.textContent = counterValue;
})