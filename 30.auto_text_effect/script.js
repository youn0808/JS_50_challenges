const textEl = document.getElementById('text')
const text = "We Love Programming"
const speedEl = document.querySelector('#speed')
let index = 0;
let show = '';
let speed = 500 / speedEl.value
addChar();

function addChar() {
    if (index < text.length) {
        show += text[index]
        index++;
    } else {
        show = '';
        index = 0;
    }
    textEl.innerText = show
    setTimeout(addChar, speed)
}

speedEl.addEventListener('change', (e) => speed = 500 / e.target.value)