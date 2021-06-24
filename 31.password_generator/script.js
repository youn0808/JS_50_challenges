const upperEl = document.getElementById('uppercase')
const lowerEl = document.getElementById('lowercase')
const numberEl = document.getElementById('numbers')
const symbolEl = document.getElementById('symbols')
const copy_btn = document.getElementById('clipboard')
const generate_btn = document.getElementById('generate')
const result = document.getElementById('result')


generate_btn.addEventListener('click', () => {
    const password_length = document.querySelector('#length').value
    const list = create_check_list();
    createWord(list, password_length);
})


copy_btn.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = result.innerText
    if (!password) {
        return
    }

    textarea.value = password;
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

function create_check_list() {
    const checked_list = {
        upper: upperEl.checked,
        lower: lowerEl.checked,
        number: numberEl.checked,
        symbol: symbolEl.checked
    }


    const true_list = {};
    for (key in checked_list) {
        if (checked_list[key] == true) {
            true_list[key] = checked_list[key]
        }
    }

    return true_list;

}


function createWord(list, length) {
    let result_sen = '';
    for (let i = 0; i < length; i++) {
        const char = select_random_char(list)

        result_sen += char;
    }
    result.innerHTML = result_sen



}

function select_random_char(list) {

    let char = '';
    const obj_len = Object.keys(list).length

    const random_selection = (Object.keys(list)[Math.floor((Math.random()) * obj_len)]);

    switch (random_selection) {
        case 'upper':
            char = getRandomUpper();
            break
        case 'lower':
            char = getRandomLower();
            break;
        case 'number':
            char = getRandomNumber();
            break;
        case 'symbol':
            char = getRandomSymbol();
            break;
    }

    return char
}



function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

